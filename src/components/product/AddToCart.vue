<template>
    <div id="addToCart" class="popup-form-medium">
        <form>
            <fieldset>
                <h1>ADD TO CART</h1>
                <div class="add-to-cart-product-image">
                    <img :alt="productStore.getCartItem.productImage"
                        :src="productStore.getCartItem.productImageBase64String" />
                </div>
                <label class="field-label">Product Name:</label>
                <label class="label-form-value">{{ productStore.getCartItem.productName }}</label>
                <label class="field-label">Price:</label>
                <label class="label-form-value">{{ currencyCode.rand }} {{
                    formatFloat(+productStore.getCartItem.price) }}</label>
                <label class="field-label">Available Quantity:</label>
                <label class="label-form-value">{{ formatNumber(+productStore.getCartItem.availableQuantity)
                }}</label>
                <label class="field-label">Stock Keeping Unit:</label>
                <label class="label-form-value">{{ productStore.getCartItem.stockKeepingUnit }}</label>
                <label class="field-label">Featured:</label>
                <label class="label-form-value">{{ yesNo(productStore.getCartItem.featured) }}</label>
                <label class="field-label">On Special:</label>
                <label class="label-form-value">{{ yesNo(productStore.getCartItem.onSpecial) }}</label>
                <label class="field-label">Quantity:</label>
                <input v-model='productStore.getCartItem.quantity' placeholder='Quantity' type='text' id='txtQuantity'
                    name='txtQuantity' class="text-box" />
                <div id="messageAddToCart" class="message-label"></div>
                <nav>
                    <div id="navAddToCart" class="nav-div">
                        <div>
                            <input type="button" value="ADD TO CART" class="button"
                                @click="submitAddToCart(productStore.getCartItem.productId)" />
                        </div>
                        <div class="nav-separator"></div>
                        <div>
                            <input type="button" value="CANCEL" class="button" @click.prevent="cancelAddToCart()" />
                        </div>
                    </div>
                </nav>
            </fieldset>
        </form>
    </div>
</template>

<script setup lang="ts">

import { appendMessage, clearMessage, hidePopupForm, isMessageDivEmpty, setMessage, formatFloat, formatNumber, toggleButtonProgressBar, showCartSummaryPopupButton } from "@/scripts/utilities"
import { useProductStore } from "@/stores/product"
import { currencyCode } from '@/enums/currencyCode'
import { status } from '@/enums/status'
import { getClientErrorRESTfulAPI } from "@/scripts/shared"

const productStore = useProductStore()

const yesNo = (value: boolean) => {
    return value ? status.yes : status.no
}

const submitAddToCart = (productId: string) => {

    const messageAddToCart = clearMessage(document.querySelector("#messageAddToCart") as HTMLDivElement)

    validateAddToCartInput(messageAddToCart)

    if (!isMessageDivEmpty(messageAddToCart)) {
        return
    }

    productStore.addCartItem(productStore.getCartItem)

    hidePopupForm(document.querySelector('#addToCart') as HTMLDivElement)

    showCartSummaryPopupButton()
}

const validateAddToCartInput = (messageAddToCart: HTMLDivElement) => {

    const quantity = (document.querySelector("#txtQuantity") as HTMLInputElement).value.trim()
    if (!!!quantity) {
        appendMessage(messageAddToCart, "Quantity required")
    } else {
        if (isNaN(Number(quantity))) {
            appendMessage(messageAddToCart, "Numeric Quantity required")
        } else {
            if (Number(quantity) <= 0) {
                appendMessage(messageAddToCart, "Quantity can not be less or equal to zero")
            }
        }
    }
}

const cancelAddToCart = () => {
    hidePopupForm(document.querySelector('#addToCart') as HTMLDivElement)
}

</script>
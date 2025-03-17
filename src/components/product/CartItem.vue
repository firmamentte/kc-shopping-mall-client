<template>
    <div class="list-top-line"></div>
    <div v-for="cartItem in productStore.getCartItems" :key="cartItem.productId" class="list-row">
        <div class="line-item-list">
            <div class="line-item-info">
                <div class="list-row-line">
                    <input type="number" class="text-box-line-item-quantity" v-model="cartItem.quantity"
                        @change="quantityChange(cartItem.productId, cartItem.quantity)" />
                </div>
                <div class="list-row-line">
                    <div class="list-label">{{ cartItem.productName }}</div>
                </div>
                <div class="list-row-line">
                    <div class="list-value">{{ currencyCode.rand }} {{
                        formatFloat(subTotal(cartItem.price, cartItem.quantity))
                    }}</div>
                </div>
            </div>
            <div class="line-item-picture">
                <img :alt="cartItem.productImage" :src="cartItem.productImageBase64String" />
            </div>
        </div>
    </div>
    <div v-show="productStore.isCartItemsEmpty" class="list-row">
        <div class="line-item-list">
            <div class="list-row-line">
                <div class="list-label">There are no items added to cart yet.</div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">

import { formatFloat, showPopupForm } from '@/scripts/utilities'
import { currencyCode } from '@/enums/currencyCode'
import { useProductStore } from "@/stores/product"

const productStore = useProductStore()

const subTotal = (price: number, quantity: number): number => {
    return price * quantity
}

const quantityChange = (productId: string, quantity: number) => {
    productStore.updateCartItemQuantity(productId, quantity)
}

</script>
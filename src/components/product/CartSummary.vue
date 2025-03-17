<template>
    <div class="cart-summary-popup">
        <div class="cart-inner-summary-popup">
            <div class="cart-summary" @click="viewEditCartItem()">
                <div class="cart-icon"></div>
                <div class="cart-label-qty">
                    <label class="lblQuantity">{{ formatNumber(+productStore.getCartSummary.quantity)
                    }}</label>
                </div>
                <div class="separator">|</div>
                <div class="cart-label-sub-total">
                    <label class="lblSubTotal">{{ currencyCode.rand }} {{
                        formatFloat(+productStore.getCartSummary.subTotal)
                    }}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { formatFloat, formatNumber, showPopupForm } from '@/scripts/utilities'
import { currencyCode } from '@/enums/currencyCode'
import { useProductStore } from "@/stores/product"

const productStore = useProductStore()

const viewEditCartItem = async () => {
    showPopupForm(document.querySelector("#viewCart") as HTMLDivElement)
}

</script>
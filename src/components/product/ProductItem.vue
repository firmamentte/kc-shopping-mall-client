<template>
    <div class="product-list">
        <div v-for="item in productStore.getProducts" :key="item.productId" class="item">
            <div v-show="item.onSpecial" class="on-special">
                <label>ON SPECIAL!</label>
            </div>
            <br />
            <img :alt="item.productImage" :src="item.productImageBase64String" />
            <div class="item-row">
                <label class="field-label">{{ item.productName }}</label>
            </div>
            <div class="item-row">
                <label class="field-label-0D8609">{{ currencyCode.rand }} {{ formatFloat(+item.price)
                    }}</label>
            </div>
            <nav>
                <div class="nav-div">
                    <input type="button" class="button" value="BUY" @click='buyItem(item.productId)' />
                </div>
            </nav>
        </div>
    </div>
    <AddToCart />
    <ViewCart />
</template>

<script setup lang="ts">

import { formatFloat, showPopupForm } from '@/scripts/utilities'
import { currencyCode } from '@/enums/currencyCode'
import { useProductStore } from "@/stores/product"
import { defineAsyncComponent } from 'vue'

const productStore = useProductStore()

const buyItem = (productId: string) => {

    productStore.setCartItem(productId)

    showPopupForm(document.querySelector("#addToCart") as HTMLDivElement)
}

const AddToCart = defineAsyncComponent(() =>
    import(/* webpackChunkName: "product" */ '@/components/product/AddToCart.vue'))

const ViewCart = defineAsyncComponent(() =>
    import(/* webpackChunkName: "product" */ '@/components/product/ViewCart.vue'))

</script>
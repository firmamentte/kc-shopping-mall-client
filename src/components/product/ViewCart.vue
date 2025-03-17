<template>
    <div id="viewCart" class="popup-form-large">
        <input type="button" value="X" class="close-button-right" @click="closePopupForm()" />
        <fieldset>
            <h1>CART</h1>
            <br />
            <CartItem />
        </fieldset>
    </div>
</template>

<script setup lang="ts">
import Loading from "@/components/shared/Loading.vue"
import { hidePopupForm } from '@/scripts/utilities'
import { defineAsyncComponent } from 'vue'

const closePopupForm = async () => {
    hidePopupForm(document.querySelector('#viewCart') as HTMLDivElement)
}

const CartItem = defineAsyncComponent({
    loader: () => import(/* webpackChunkName: "product" */ '@/components/product/CartItem.vue'),
    loadingComponent: Loading
})

</script>
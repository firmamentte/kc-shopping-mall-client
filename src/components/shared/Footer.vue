<template>
    <footer>
        <div class="inner-footer">
            <label class="text-label">{{ useSharedStore().getCompanyName }} © {{ getCurrentYear() }}</label>
        </div>
        <ScrollTop />
        <PopupFormProgressBar />
        <BackgroundPopup />
        <CartSummary />
    </footer>
</template>

<script setup lang="ts">
import { useSharedStore } from "@/stores/shared"
import { getCurrentYear } from "@/scripts/utilities"
import { defineAsyncComponent } from "vue"

const ScrollTop = defineAsyncComponent(() =>
    import(/* webpackChunkName: "product" */ '@/components/shared/ScrollTop.vue'))

const PopupFormProgressBar = defineAsyncComponent(() =>
    import(/* webpackChunkName: "product" */ '@/components/shared/PopupFormProgressBar.vue'))

const BackgroundPopup = defineAsyncComponent(() =>
    import(/* webpackChunkName: "product" */ '@/components/shared/BackgroundPopup.vue'))

const CartSummary = defineAsyncComponent(() =>
    import(/* webpackChunkName: "product" */ '@/components/product/CartSummary.vue'))

</script>
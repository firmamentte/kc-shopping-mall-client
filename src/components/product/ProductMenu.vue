<template>
    <div class="scroll-horizontal-menu">
        <div :class="menuNameButtonClass(menuName)" @click="products(menuName)"
            v-for="menuName in productStore.getProductMenu" :key="menuName">
            {{ menuName }}
        </div>
    </div>
</template>

<script setup lang="ts">

import { cssClass } from '@/enums/cssClass';
import { productMenu } from '@/enums/productMenu';
import { getProducts } from '@/scripts/clients/product';
import { getClientErrorRESTfulAPI } from '@/scripts/shared';
import { hideGlobalErrorMessage, hidePopupFormProgressBar, setMessage, showGlobalErrorMessage, showPopupFormProgressBar } from '@/scripts/utilities';
import { useProductStore } from "@/stores/product"

const productStore = useProductStore()

const menuNameButtonClass = (menuName: string) => {
    return menuName == productStore.selectedMenu ? cssClass.button9E0000 : cssClass.buttonFFFFFF
}

const products = async (menuName: string) => {

    try {

        showPopupFormProgressBar()

        if (productMenu.featured == menuName) {
            productStore.setFeatured(true)
            productStore.setSelectedMenu(productMenu.featured)
        }

        if (productMenu.all == menuName) {
            productStore.setFeatured(null)
            productStore.setSelectedMenu(productMenu.all)
        }

        await getProducts(productStore.getFeatured).then(response => {

            productStore.setProducts(response.data)

            hidePopupFormProgressBar()
        })

    } catch (error: any) {
        setMessage(document.querySelector(".global-error-message") as HTMLDivElement, getClientErrorRESTfulAPI(error))
        showGlobalErrorMessage()
        setTimeout(hideGlobalErrorMessage, 10000)
        hidePopupFormProgressBar()
    }
}

</script>

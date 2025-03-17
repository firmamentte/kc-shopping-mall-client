<template>
  <ProductMenu />
  <br />
  <ProductItem />
</template>

<script setup lang="ts">

import { defineAsyncComponent, onMounted } from 'vue'
import { getProducts } from '@/scripts/clients/product'
import Loading from "@/components/shared/Loading.vue"
import { useProductStore } from "@/stores/product"
import { productMenu } from '@/enums/productMenu'
import { setMessage, showGlobalErrorMessage, hideGlobalErrorMessage } from '@/scripts/utilities'
import { getClientErrorRESTfulAPI } from '@/scripts/shared'


onMounted(async () => {

  const productStore = useProductStore()

  try {

    productStore.setFeatured(true)
    productStore.setSelectedMenu(productMenu.featured)

    await getProducts(productStore.getFeatured).then(response => {
      productStore.setProducts(response.data)
    })

  } catch (error: any) {
    setMessage(document.querySelector(".global-error-message") as HTMLDivElement, getClientErrorRESTfulAPI(error))
    showGlobalErrorMessage()
    setTimeout(hideGlobalErrorMessage, 10000)
  }
})

const ProductMenu = defineAsyncComponent({
  loader: () => import(/* webpackChunkName: "product" */ '@/components/product/ProductMenu.vue'),
  loadingComponent: Loading
})

const ProductItem = defineAsyncComponent({
  loader: () => import(/* webpackChunkName: "product" */ '@/components/product/ProductItem.vue'),
  loadingComponent: Loading
})

</script>

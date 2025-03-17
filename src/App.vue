<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import Loading from "@/components/shared/Loading.vue"

const Header = defineAsyncComponent({
  loader: () => import(/* webpackChunkName: "header" */ '@/components/shared/Header.vue'),
  loadingComponent: Loading
})

const Footer = defineAsyncComponent({
  loader: () => import(/* webpackChunkName: "header" */ '@/components/shared/Footer.vue'),
  loadingComponent: Loading
})
</script>

<template>
  <Header></Header>
  <br />
  <div class="inner-body">
    <RouterView />
  </div>
  <br />
  <Footer></Footer>
</template>
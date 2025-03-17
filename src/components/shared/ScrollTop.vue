<template>
    <div @click="scrollTop()" class="scroll-top">
        <div class="arrow">&#8593;</div>
    </div>
</template>

<script setup lang="ts">

    import { isVisible } from "@/scripts/utilities"

    const scrollTop = () => {

        if (!isVisible(document.querySelector(".background-popup") as HTMLDivElement)) {
            window.scroll({ top: 0, left: 0, behavior: "smooth" })
        }
    }

</script>
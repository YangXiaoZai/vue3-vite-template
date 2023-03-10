<script setup>
import { ref } from "vue";

defineProps({
  msg: String
});

const count = ref(0);
</script>

<template>
  <div class="tw-flex tw-items-center tw-justify-center tw-flex-col">
    <h1 class="tw-font-bold tw-text-3xl">{{ msg }}</h1>
    <a-button type="primary" @click="count++">count is {{ count }}</a-button>
  </div>
</template>

<style scoped></style>

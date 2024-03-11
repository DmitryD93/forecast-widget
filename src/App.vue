<script setup lang="ts">
import {onBeforeMount} from "vue";
import {getGeoLocation} from "./utils";


// Запрос местоположения
onBeforeMount(() => {
  getGeoLocation()
})
</script>

<template>
<div class="widget-container">
<div class="header">

</div>
</div>
</template>

<style lang="scss">
@import "./assets/styles/main";

.widget-container {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 10px;
  padding: 10px;
  background: url("./assets/img/bg-cold.jpg") no-repeat center center / cover;
}


</style>

<script setup lang="ts">
import Image from './components/Image.vue'
import ColorControl from './components/ColorControl.vue'
import ShapeControl from './components/ShapeControl.vue'
</script>

<template>
  <div class="image-wrapper-outer">
    <Image />
  </div>
  <div class="control-wrapper">
    <div class="shape-control"><ShapeControl /></div>
    <div class="color-control"><ColorControl /></div>
  </div>
</template>

<style>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrapper-outer, .control-wrapper {
  position: absolute;
}

.control-wrapper {
  width: calc(100vw - 48px * 2);
  min-width: 1344px;
  max-width: 1544px;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
}
</style>

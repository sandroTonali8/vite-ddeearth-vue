<script setup lang="ts">
import { Earth } from 'dde-earth'
import { ArcGisMapServerImageryProvider, ImageryLayer } from 'cesium'

defineOptions({
  name: 'EarthInit',
  mounted() {
    this.mountEarth()
  },
  methods: {
    mountEarth() {
      this.earth = new Earth('container', {
        baseLayer: ImageryLayer.fromProviderAsync(ArcGisMapServerImageryProvider.fromUrl('https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer', {
          enablePickFeatures: false
        }), {}),
      })
    }
  },
  destroyed() {
    if(this.earth) {
      this.earth.destroy()
    } 
  }
})
</script>
<template>
  <div id="container">
  </div>
</template>
<style scoped>
#container{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  flex: 1;
}
</style>
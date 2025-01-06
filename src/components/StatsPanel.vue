<template>
</template>
<script setup lang="ts">
import Stats from 'stats.js'

defineOptions({
  name: 'StatsPanel',
  mounted() {
    this.mountStatsPanel()
  },
  methods: {
    mountStatsPanel() {
      const stats = new Stats()
      document.body.appendChild(stats.dom)

      stats.dom.style.position = 'fixed'
      stats.dom.style.bottom = '0'
      stats.dom.style.right = '0'
      stats.dom.style.left = ''
      stats.dom.style.top = ''
      stats.dom.style.zIndex = '9999'

      const animate = () => {
        stats.begin()  
        stats.end()    
        requestAnimationFrame(animate)  
      }
      animate()
    }
  },
  destroyed() {
    if(this.stats) {
      document.body.removeChild(this.stats.dom)
    }
  },
})
</script>
<style scoped>
</style>
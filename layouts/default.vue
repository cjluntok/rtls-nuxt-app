<template>
  <div>
    <appHeader></appHeader>
    <nuxt />
    <appFooter></appFooter>
  </div>
</template>


<script>
import mainHeader from '@/components/header.vue'
import mainFooter from '@/components/footer.vue'
export default {
    components: {
    appHeader: mainHeader,
    appFooter: mainFooter
  }
}
</script>
<style>
</style>

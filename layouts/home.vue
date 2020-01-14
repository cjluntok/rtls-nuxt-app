<template>
  <div>
    <appHeader></appHeader>
    <mainBanner></mainBanner>
    <nuxt />
    <appFooter></appFooter>
  </div>
</template>


<script>
import mainHeader from '@/components/header.vue'
import mainFooter from '@/components/footer.vue'
import mainBanner from '@/components/partials/mainPageBanner.vue'

export default {
    components: {
    appHeader: mainHeader,
    appFooter: mainFooter,
    mainBanner : mainBanner
  }
}
</script>
<style>
</style>

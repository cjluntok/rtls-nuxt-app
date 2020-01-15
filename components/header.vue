<template>
    <header id="__main">
        <a id="backtotop"><i><font-awesome-icon :icon="['fas', 'arrow-up']" /></i></a>
        <appNav></appNav>
    </header>
</template>
<script>
import mainNav from '@/components/partials/navigation.vue'
export default {
components: {
    appNav: mainNav
  }
}
</script>
<style lang="scss" scoped>
</style>

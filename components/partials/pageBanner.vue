<template>
    <section class="page-banner-container row page-banner banner-bg" :style="{backgroundImage : image}">
        <div class="page-banner-inner container flex">
            <div class="col-sm-12 col-md-12 page-banner-text">
                <h2>{{ title }}</h2>
                <p class="text-center">{{ subtitle }}</p>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props : {
        title : String,
        subtitle : String,
        image : String
    },
}
</script>
<style lang="scss" scoped>

</style>

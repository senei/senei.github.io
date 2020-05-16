<template><!-- home -->
</template>

<script>
    export default {
        beforeRouteUpdate(to, from, next) {
            console.info('home trigered', this,to, from, next)
        }
    }
</script>

<style scoped></style>
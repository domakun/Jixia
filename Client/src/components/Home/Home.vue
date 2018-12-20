<template>
    <topheader></topheader>
</template>

<script>
    import Header from '../Public/Header'
    import UserLR from './UserLR'

    export default {
        name: "home",
        components: {
            'topheader': Header,
            'userlr': UserLR
        }
    }
</script>

<style scoped>

</style>

<template>
    <div class="indexflex">
        <Index-Gallary></Index-Gallary>
        <animation></animation>
    </div>
</template>

<script>
import IndexGallary from './componeots/gallary'
import animation from "./componeots/animation";
    export default {
        name: 'index',
        props: {

        },
        data () {
            return {

            }
        },
        components: {
            IndexGallary,animation
        },
        methods: {
        }
    }
</script>
<style lang="stylus" scoped>
    .indexflex{
        display :flex;
        height :100%;
        flex-direction: column;
    }
</style>

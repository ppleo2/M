<template>
    <div>
        <div class="banner" @click="handleBannerClick" >
            <img :src="bannerImg" />
            <div class="banner_buttom">
                <div class="banner_title">{{sightName}}</div>
                <div class="banner_num">{{gallaryImgs.length}}</div>
            </div>
        </div>
        <common-gallary :imgs="gallaryImgs" v-show="gallaryShow" @close="handleGallaryClose"></common-gallary>
    </div>
</template>

<script>
    import CommonGallary from 'common/gallary/gallary'
    export default {
        name: 'indexgallary',
        props: {

        },
        data () {
            return {
                publicPath: process.env.BASE_URL,
                gallaryShow: false,
                sightName: '星空',
                bannerImg: 'static/img/120s.jpg',
                gallaryImgs: ['static/img/120s.jpg','static/img/222.jpg','static/img/120s.jpg','static/img/222.jpg']
            }
        },
        components: {
            CommonGallary
        },
        methods: {
            handleBannerClick () {
                this.gallaryShow = true
            },
            handleGallaryClose () {
                this.gallaryShow = false
            }
        },
        created() {//用vuex保存图片数量
                this.$store.commit('imgLength', this.gallaryImgs.length)
        }
    }
</script>
<style lang="stylus" scoped>
    .banner{
        width : 100%;
        overflow : hidden;
    }
    .banner img{
        width : 100%;
    }
    .banner_buttom{
        display : flex;
        position : absolute;
        height : .62rem;
        line-height : .62rem;
        margin-top : -.62rem;
        color : #fff;
        font-size : .3rem;
        width : 100%;
        background :linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
    }
    .banner_buttom .banner_title{
        flex :1;
        padding-left : .2rem;
    }
    .banner_buttom .banner_num{
        padding : 0rem .4rem;
        height : .4rem
        line-height : .32rem;
        background :rgba(0,0,0,0.8);
        border-radius :.08rem;
        margin-right :.2rem;
        margin-top : .1rem;
        font-size :.3rem;
    }
</style>

<template>
  <div class="gallary" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <!-- slides -->
         <swiper-slide v-for="(item,index) of imgs" :key="index"><img :src=item></swiper-slide>
        <!-- Option al controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: { // swiper配置项
        pagination: '.swiper-pagination', // 分页配置
        paginationType: 'fraction', // 分页类型 页码
        observeParents: true, // 父元素改变时重置
        observer: true // 自身改变时刷新
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .gallary{
    display :flex;
    flex-direction :column;
    justify-content :center;
    position : fixed;
    z-index : 99;
    top :0;
    bottom : 0;
    left : 0;
    right :0;
    background-color :#000;
  }
  .wrapper{}
  .wrapper img{
    width : 100%;
  }
  .swiper-pagination{
    color : #fff;
    margin-bottom : -1rem;
    display :inherit
  }
  .swiper-container{
    overflow : inherit
  }
</style>

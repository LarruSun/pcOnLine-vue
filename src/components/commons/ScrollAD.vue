<template>
    <div id="scrollAD">
        <swiper :options="swiperOption" class="mySwiper">
        <template v-if="focus.length">
            <swiper-slide v-for="(item,index) in focus" :key="index">
                <img :src="item.imageUrl">
            </swiper-slide>
        </template>
        <template v-else>
            <swiper-slide></swiper-slide>
        </template>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        props: ['focusURL'],
        data(){
            return {
                focus: [],
                swiperOption: {
                        spaceBetween: 0,
                        centeredSlides: true,
                        autoplay: {
                            delay: 2500,
                            disableOnInteraction: false
                        },
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                        }
                    }
            }
        },
        //注册子组件
        components: {
            swiper,
            swiperSlide
        },
        created(){
            var _this = this;
            this.$http.get(this.focusURL)
            .then(function(response){
                if(response.data){
                    _this.focus = response.data.focus;
                    console.log(response);
                }
            })
            .catch(function(error){
                console.log(error);
            })
        }
    }
</script>
<style lang="scss" scoped>
    #scrollAD {
        width: 100%;
        height: 170px;
        .mySwiper {
            width: 100%;
            height: 100%;
            img {
                width:100%;
                height: 100%;
            }
        }
    }
</style>
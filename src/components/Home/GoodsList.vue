<template>
    <div id="GoodsList">
        <ul>
            <li v-for="(item,index) in goodsList" :key="index">
                 <div id="cellLeft">
                     <img :src="item.cover" alt="">
                 </div>
                 <div id="cellRight">
                     <span>
                         {{item.shortTitle}}
                     </span>
                     <span>
                         {{item.price |formatePrice}}
                     </span>
                     <span>
                         <span>{{item.pubDate | formatepubDate}}</span>
                         <span>{{item.mallName}}</span>
                         <span>购物车</span>
                     </span>
                 </div>
            </li>
        </ul>
    </div>
</template> 

<script>
import filtersMixin from '@/components/minxins/Filters'
export default {
    props: ["goodsList"],
    mixins: [filtersMixin],
    created(){
        console.log(this.goodsList);
    },
    filters: {
        formatePrice(value){
            if(value.length>=20){
                return value.slice(0,20)+"...";
            }else{
                return value;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    #GoodsList {
        width: 100%;
        min-height: 170px;
        background-color: lightgray;
        ul {
            width: 100%;
            height: 100%;
            li {
                padding: 10px;
                // margin-top: 1px;
                width: 100%;
                box-sizing: border-box;
                display: flex;
                flex-direction: row;
                background-color: white;
                &:after {
                    content: '';
                    position: absolute;
                    left: 0;
                    background:lightgray;
                    width: 100%;
                    height: 1px;
                    -webkit-transform: scaleY(0.5);
                            transform: scaleY(0.5);
                    -webkit-transform-origin: 0 0;
                            transform-origin: 0 0;
                }
                #cellLeft {
                    width: 30%;
                    img {
                        width: 100%;
                        height: auto;
                    }
                }
              
                #cellRight {
                    width: 70%;
                    padding: 5px;
                    display: flex;
                    flex-direction: column;
                    span:nth-child(1) {
                        flex:2;
                    }
                    >span:nth-child(2) {
                        flex:2;
                        color: red;
                    }
                    span:nth-child(3) {
                        flex:1;
                        font-size: 10px;
                    }                       
                }
            }
        }
    }
</style>


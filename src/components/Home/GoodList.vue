<template>

    <div id='GoodList' >
        <ul>
            <li v-for='(item,index) in goodList' :key="index">
                <div id='goodListLeft'>
                    <img :src='item.cover'>
                </div>
                <div id='goodListRight'>
                    <span>
                        {{item.shortTitle}}
                    </span>
                    <span>
                        {{item.price | changePrice}}
                    </span>

                    <span>
                        <span>
                            {{item.pubDate | changeDate}}
                        </span>
                        <span>
                            {{item.mallName}}
                        </span>
                        <span>
                            购物车
                        </span>
                    </span>
                
                </div>
            </li>
        
        
        </ul>
    </div>


</template>



<script>
    import filters from '@/components/minxins/Filters';
    export default{
        props:['goodList'],
        mixins:[filters],//引入导入的Filters过滤器filters名字必须为filters才能注册到filters里面
        created(){
            // console.log('------------goodList接受数据------------');
            console.log(this.goodList);
            // console.log('---------------------------------------');
        },
        filters:{
            changePrice(value){
                return value;
            }
        }
    }
</script>   


<style lang="scss" scoped>
    #GoodList{
        width:100%;
        min-height:150px;
        ul{
           width:100%;
           height:100%;
           li{
               paddind-left:5px;
               margin-top:5px;
               box-sizing:border-box;
               width:100%;
               display:flex;
               flex-direction:row;
               background:white;
    
               #goodListLeft{
                   width:50%;

                    img{
                         width:100%;
                    }
               }
                #goodListRight{
                        width:10%;
               }
           } 
        }
    }
</style>
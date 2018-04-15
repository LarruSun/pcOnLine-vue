<template>
    <div id="FaXian">
        <ul>
            <li v-for="(item,index) in goodsList" :key="index">
                <img :src="item.cover" alt="">
                <span>
                    <span>{{item.mallName}}</span>
                    <span>{{item.price}}</span>
                    <span>{{item.pubDate | formatepubDate}}</span>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import filtersMixin from '@/components/minxins/Filters'
    export default {
        mixins: [filtersMixin],
        data(){
            return {
                goodsList: []
            }
        },
        created(){
            var _this = this;
            this.$http.get(this.baseApiUrl+"/api/home?sectionId=2")
            .then(function(resp){
                _this.goodsList = resp.data.data;
            })
            .catch(function(error){
                console.log(error);
            })
        }
    }
</script>

<style lang="scss" scoped>
    #FaXian {
        width: 100%;
        ul {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            li {
                width: 50%;
                padding: 10px;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                img {
                    width: 100%;
                }
            }
        }
    }
</style>
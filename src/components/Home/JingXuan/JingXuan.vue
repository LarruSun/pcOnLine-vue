<template>
    <div id="JingXuan">
        <Sunplaza :sunplazaData="sunplazaData"></Sunplaza>
        <GoodsList :goodsList="goodsList"></GoodsList>
    </div>
</template>

<script>
import Sunplaza from './SunplazaEntrys'
import GoodsList from '../GoodsList'
    export default {
        data(){
            return {
                sunplazaData: [],
                goodsList: []
            }
        },
        components: {
            Sunplaza,
            GoodsList
        },
        created(){
            var _this = this;
            this.$http.get(this.baseApiUrl+"/api/home?sectionId=99")
            .then(function(resp){
                console.log(resp);
                _this.sunplazaData = resp.data.sunplazaEntrys;
                for(var list of resp.data.listIndex){
                    _this.goodsList.push(list.value);
                }
            })
            .catch(function(){

            })
        },
    }
</script>

<style lang="scss" scoped>
    
</style>
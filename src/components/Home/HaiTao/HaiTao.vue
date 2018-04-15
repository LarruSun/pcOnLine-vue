<template>
    <div id="HaiTao">
        <GoodsList :goodsList="goodsList"></GoodsList>
    </div>
</template>

<script>
import GoodsList from '../GoodsList'

    export default {
        data(){
            return {
                goodsList: []
            }
        },
        created(){
            var _this = this;
            this.$http.get(this.baseApiUrl+"/api/home?sectionId=1")
            .then(function(resp){
                console.log(resp);
               _this.goodsList = resp.data.data;
            })
            .catch(function(){

            })
        },
        components: {GoodsList}
    }
</script>

<style lang="scss" scoped>
    
</style>
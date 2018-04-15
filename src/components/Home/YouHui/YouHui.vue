<template>
    <div id="YouHui">
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
        components: {
            GoodsList
        },
        created(){
            var _this = this;
            this.$http.get(this.baseApiUrl+"/api/home?sectionId=0")
            .then(function(resp){
                _this.goodsList = resp.data.data;
            })
            .catch(function(){

            })
        },
    }
</script>

<style lang="scss" scoped>
    
</style>
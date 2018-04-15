<template>
    <div id="commonTop">
        {{commonTopUrl}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            commonTopUrl:'',
            dataUrl:{
                name:{
                    '白菜价':'',

                },
                key:{
                    '白菜价':''
                }
            }
        }
    },
    created(){
        this.commonTopUrl = this.$route.params.commonTopItem;//吧传递来的数取出来
     

        if(this.commonTopUrl.name){
            this.commonTopUrl='name:'+this.commonTopUrl.name;
        }else{
            this.commonTopUrl='key:'+this.commonTopUrl.key;
        }
    },

    
}
</script>


<style lang='scss' scoped>
    #commonTop{
        width: 100%;
        // height: 1000px;
    }
</style>

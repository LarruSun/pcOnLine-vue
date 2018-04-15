<template>
    <div id="CategoryHome">


        <div id="top">
            <input type="search">
            <p id="topP">
               <span v-for="(item,index) in spanTitle" @click="selectItem(item)">
                    {{item.name}}
               </span>
                <span v-for="(item,index) in spanTitle1" @click="selectItem(item)">
                    {{item.key}}
               </span>
            </p>    
        </div>


        <div id='bottom'>
            <div id="left">
                <p @click='indexTo=-2'>
                    国外电商
                </p>
                <p @click='indexTo=-1'>
                    国内电商
                </p>
                <p v-for="(item,index) in bottomLeft"  @click='indexTo=index'>
                    {{item.name}}
                </p>
            </div>
            <div id="right">
                <Left :indexTo='indexTo'></Left>
            </div>

        </div>
    </div>
</template>
<script>
import Left from './components/left'
    export default {
        data(){
            return{
                spanTitle:[],
                spanTitle1:[],

               bottomLeft:[],
                indexTo:-2,
                homeData:{},
            }
        },
        created(){

           var _this = this;
            this.$http.get('http://localhost:3000/api/search')
            .then(function(resp){
                _this.homeData = resp.data;
                // console.log(_this.homeData);
                _this.spanTitle=_this.homeData.tagList.splice(0,7);
                _this.spanTitle1=_this.homeData.tagList.splice(-6);


                _this.bottomLeft=resp.data.typeList;
                _this.$store.commit('initData',_this.homeData)
            })
            .catch(function(){

            })  
        },
        components:{
            Left
        },
        methods:{
            selectItem(item){
                if(item.key)    item={key:item.key};
                else    item={name:item.name};
                // 吧下标通过params传递过去
                this.$router.push({name:'commonTop',params:{commonTopItem:item}});
            }
        }

    }
</script>

<style lang="scss" scoped>
    #CategoryHome{

        #top{
             width: 100%;
             input{
                 margin-top: 20px;
                 width: 90%;
                 height: 20;
                 border-radius: 5px;
                 margin-left: 5%;
                 background: rgb(238,238,238);
             }
             #topP{
                margin-top: 20px;
                margin-bottom: 20px;

                 display: flex;
                 flex-direction: row;
                 flex-wrap: wrap;
                 flex-grow: 4;
                 align-content: center;
                 span{
                     font-size: 15px;
                     display: inline-block;
                     border: 1px solid gray;
                     text-align: center;
                     width: 15%;
                     margin-right:2%; 
                     margin-left: 5%;
                     margin-top: 2%;
                     border-radius: 5px;
                 }
             }
        }
        #bottom{
            display: flex;
            width: 100%;
            background: rgb(238,238,238);
            #left{
                background: #ffffff;
                overflow:scroll ;
                height: 290px;
                width: 15%;

                p{
                    width: 100%;
                    height: 30px;
                    margin-bottom: 10px;
                    background: rgb(238,238,238);
                    font-size: 10px;
                    text-align: center;
                    line-height: 30px;
                }

            }
            #right{
                width: 85%;
                background: #ffffff;
                margin-top: 10px;
            }

        }
    }
</style>
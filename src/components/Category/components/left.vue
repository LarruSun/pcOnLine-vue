<template>
    <div id="leftComponent"> 
        <!-- 国外组件 -->
        <ul v-if='this.indexTo==-2' id="foreignMall">
            <li v-for="(item,index) of leftData" >
                <p id='title'>
                    {{item.name}}
                </p> 
                <p id="imgs" v-for="(items,indexs) in leftDataList[index]">
                    <img :src="items.imageUrl" alt="未显示">
                    <span>{{items.name}}</span>
                </p>
            </li>
        </ul>
        <!-- 国内组件 -->
        <ul v-if='this.indexTo==-1' id="nativeMall">
            <li v-for="(item,index) of leftData">
                    <img :src='item.imageUrl'  :alt='index' :title="index"> 
                    <p id="nativeMallName">{{item.name}}</p>
                
            </li>
        </ul>
       <!-- 其他列表组件 -->
       <ul v-else id="typeList">
                <li v-for="(item,index) of leftData">
                    <img :src='item.iconImg3'  :alt='index' :title="index"> 
                    <p id="typeListName">{{item.name}}</p>
                
                </li>
        </ul>
    </div>
</template>



<script>
export default {
    props:['indexTo'],//用于接受传过来的下标
    data(){
        return{
            leftData:[],//总数据
            leftDataList:[]//用于存放国外的第二层数据
        }
    },
    created(){
        this.leftData=this.$store.state.foreignMall;
        for(var i=0 ;i<this.leftData.length;i++){
            this.leftDataList.push(this.leftData[i].list)
        };
    },

    watch:{
        indexTo(newValue,oldValue){
            if(newValue ==-2){
                this.leftData=this.$store.state.foreignMall;
                return;
            }else if(newValue==-1){
                this.leftData=this.$store.state.nativeMall;
                return;
            }else{
                this.leftData=this.$store.state.typeList
                this.leftData = this.leftData[this.indexTo].level2;
                return;
            }
            

        }
    }  


}

</script>

<style lang='scss' scoped>
    #leftComponent{

        width: 100%;
        overflow: scroll;
        height: 290px;
        // 国外样式
            #foreignMall{
                li{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    border-bottom:1px solid gray;
                    padding-bottom: 10px; 
                    #title{
                        width:100%;
                        height: 50px;
                        line-height: 50px;
                        text-indent: 10%;
                    }
                    #imgs{
                        width: 30%;
                        margin-left: 2%;
                        img{
                            width: 100%;
                            height: auto;
                        }
                        span{
                            display: inline-block;
                            width: 100%;
                            text-align: center;
                            margin-bottom: 10px;
                            margin-top: 10px;
                        }

                    }
                }
    
            }
        // 国内样式
        #nativeMall{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;    
            overflow: scroll;
            width: 100%;
            margin-top: 10px;
            height: 245px;
                li{
                    width: 30%;
                    margin: 0px 6.5px 30px 5.5px;
                    p{
                        width: 100%;
                        text-align: center;
                    }
                        img{
                            width: 100%;
                            height: auto;
                        }
                }
        }
        // 剩余列表样式
        #typeList{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;    
            overflow: scroll;
            width: 100%;
            margin-top: 10px;
            height: 245px;
                li{
                    width: 30%;
                    margin: 0px 6.5px 30px 5.5px;
                    p{
                        width: 100%;
                        text-align: center;
                    }
                        img{
                            width: 100%;
                            height: auto;
                        }
                    }
            }

    }

</style>



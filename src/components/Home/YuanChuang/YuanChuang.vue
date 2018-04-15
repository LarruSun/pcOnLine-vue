<template>
    <div id="YuanChuang">
        <ul>
            <li v-for="(item,index) in goodsList" :key="index">
                 <div class="coverImg">
                    <img :src="item.hdCover" alt="">
                 </div>
                 <div class="description">
                     <div class="cellLeft">
                         <span class="dayBackground">{{item.pubDate | formateDate("day")}}</span>
                         <span>{{item.pubDate | formateDate("month")}}</span>
                    </div>
                     <div class="cellRight">
                         <span>{{item.title}}</span>
                         <span>{{item.synopsis | formateDescription}}</span>
                     </div>
                 </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import filtersMixin from '@/components/minxins/Filters'
    export default {
        data(){
            return {
                goodsList: []
            }
        },
        mixins: [filtersMixin],
        created(){
            var _this = this;
            this.$http.get(this.baseApiUrl+"/api/home?sectionId=34")
            .then(function(resp){
                _this.goodsList = resp.data.data;
                console.log(resp);
            })
            .catch(function(error){
                console.log(error);
            })
        },
        filters: {
            formateDate(value,type){
                var date = new Date(value).toString();
                if(type=="month"){
                  return date.split(' ')[1];
                }else if(type=="day"){
                    return date.split(' ')[2];
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #YuanChuang {
        width: 100%;
        ul {
            width: 100%;
            display: flex;
            flex-direction: column;
            li {
                width: 100%;
                .coverImg {
                    max-height: 170px;
                    overflow: hidden;
                    img {
                        width: 100%;
                        height: auto;
                    }
                }
                .description {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    padding: 5px;
                    box-sizing: border-box;
                    .cellLeft {
                        width: 20%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        font-size: 20px;
                        .dayBackground {
                            background: -webkit-linear-gradient(45deg,white,gray,red,red);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                        }           
                    }
                    .cellRight {
                        width: 80%;
                        font-size: 20px;
                    }
                }
            }
        }
    }
</style>
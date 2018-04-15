<template>
    <div id="navBar">
        <ul>
            <li v-for="(item,index) in tabs" :key="index" @click="selectItem(item,index)">
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
// 精选,优惠,海淘,发现,原创
    export default {
        data(){
            return {
                tabs: [
                    {title: '精选',path:'/home/JingXuan'},
                    {title: '优惠',path: '/home/YouHui'},
                    {title: '海淘',path: '/home/HaiTao'},
                    {title: '发现',path: '/home/FaXian'},
                    {title: '原创',path: '/home/YuanChuang'}
                ]
            }
        },
        methods: {
            selectItem(item,index){
                this.$store.commit("selecteIndex",{selectedIndex:index,selectePath:item.path});
                this.$router.push(item.path);
            }
        }
    }
</script>
<style lang="scss" scoped>
    #navBar {
        width: 100%;
        height: 44px;
        ul {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            background:rgba(230,230,230,0.5);
            li {
                flex:1;
                display:flex;
                justify-content:center;
                align-items: center;
            }
        }
    }
</style>
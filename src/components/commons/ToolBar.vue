<template>
    <div id="ToolBar">
        <ul>
            <li v-for="(tab,index) in tabs" :key="index">
                <router-link :to="tab.path">{{tab.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                tabs: [
                    {
                        title: '首页',
                        path: '/home'
                    },
                    {
                        title: '分类',
                        path: '/category'
                    },
                    {
                        title: '我的',
                        path: '/profile'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    #ToolBar {
        width: 100%;
        height: 64px;
        background: rgba(220, 220, 220, .5);
        position: fixed;
        bottom:0;
        ul {
            width: 100%;
            height: 100%;
            display:flex;
            flex-direction:row;
            li {
                flex:1;
                display:flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>
<template>
    <div id="Sunplaza">
        <ul>
            <li v-for="(item,index) in sunplazaData" :key="index">
                <img :src="item.icon">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ["sunplazaData"],
        created(){
            console.log(this.sunplazaData);
        }
    }
</script>

<style lang="scss" scoped>
    #Sunplaza {
        width:100%;
        ul {
            width: 100%;
            display:flex;
            flex-wrap: wrap;
            li {
                width: 50%;
                img {
                    width:100%;
                    height:auto;
                }
            }
        }
    }
</style>
<template>
    <div id='Sunplazz'>
    
       <ul>
            <li v-for='item in sunplazaData'>
                <img :src='item.icon'>
            </li>
       </ul>
    
    
    </div>

</template>

<script>
    export default{
        props:['sunplazaData'],
        created(){
            
            console.log('---------------sunplazaData数据的获取---------------');
            console.log(this.sunplazaData);
            console.log('----------------------------------------------------');

          

        }

    }
</script>


<style lang="scss" scoped>
    #Sunplazz{
        width:100%;
        height:200px;
        img{
            width:50%;
            float:left;
        }
    }
</style>>

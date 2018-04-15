<template>
    <div id="Home">
       <ScrollAD :focusURL="focusURL"></ScrollAD>
       <NavBar></NavBar>
       <keep-alive>
            <router-view></router-view>
       </keep-alive>
    </div>
</template>
<script>
    import ScrollAD from '@/components/commons/ScrollAD'
    import NavBar from '@/components/Home/NavBar'
    export default {
        data(){
            return {
                focusURL: this.baseApiUrl+"/api/listFocus"
            }
        },
        components: {
            ScrollAD,
            NavBar
        },
        created(){
            var selectedIndex = this.$store.state.selectedIndex;
            var selectePath = this.$store.state.selectePath;
            this.$router.push(selectePath);
        }
    }
</script>

<style lang="scss" scoped>

</style>
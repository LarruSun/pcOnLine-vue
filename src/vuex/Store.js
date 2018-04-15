import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
    selectedIndex: 0,
    selectePath: '/home/JingXuan',
    typeList:[],
    foreignMall:[],
    nativeMall:[]

}
const mutations = {
    selecteIndex(state,playload){
        state.selectedIndex = playload.selectedIndex;
        state.selectePath = playload.selectePath;
    },
    initData(state,playload){
  
        state.typeList=playload.typeList;
        state.foreignMall=playload.foreignMall;
        state.nativeMall=playload.nativeMall;



     
    }
}
export default new Vuex.Store({
    state,
    mutations
})
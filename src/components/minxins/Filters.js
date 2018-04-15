var mixin = {
    filters: {
        formatepubDate(value){
            var date = new Date(value);
            var month = date.getMonth()+1;
            var day = date.getDate();
            var currentTime = new Date(); //获取当前时间
            //获取当前时间和上传时间的差
            var rs = currentTime-date;
            //将毫秒数转换成分钟
            var min = rs/1000/60;
            if(min<=30){
                return parseInt(min)+"分";
            }else{
                return month+"-"+day;
            }
        },
        formateDescription(value){
            if(value.length>=30){
                return value.slice(0,30)+"...";
            }else{
                return value;
            }
        }
    }
}
export default mixin;
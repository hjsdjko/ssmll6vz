(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-qichexinxi-detail"],{"201c":function(t,e,i){"use strict";var n={"mescroll-uni":i("f05e").default,"uni-popup":i("1c89").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("mescroll-uni",{attrs:{up:t.upOption,down:t.downOption,bottom:100},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"container"},[i("v-uni-view",[i("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":!0,autoplay:t.autoplaySwiper,circular:!1,"indicator-active-color":"rgba(13, 255, 0, 1)","indicator-color":"rgba(30, 144, 255, 1)",duration:5,interval:t.intervalSwiper,vertical:!0}},t._l(t.swiperList,(function(t,e){return i("v-uni-swiper-item",{key:e},[i("v-uni-image",{attrs:{mode:"aspectFill",src:t}})],1)})),1)],1),i("v-uni-view",{staticClass:"detail-content"},[i("v-uni-view",{staticClass:"price detail-list-item",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 2rpx 0",borderColor:"rgba(171, 174, 176, 1)",borderRadius:"0",borderWidth:"2rpx",borderStyle:"none none solid none",height:"68rpx"}},[i("v-uni-view",{staticClass:"text icon",style:{color:"rgba(255, 0, 0, 1)",textAlign:"left",fontSize:"28rpx"}},[1==t.storeupFlag?i("v-uni-view",{staticClass:"cuIcon-favorfill",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shoucang.apply(void 0,arguments)}}}):t._e(),0==t.storeupFlag?i("v-uni-view",{staticClass:"cuIcon-favor",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shoucang.apply(void 0,arguments)}}}):t._e()],1)],1),i("v-uni-view",{staticClass:"name shop-title",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 0px 0",borderColor:"rgba(171, 174, 176, 1)",backgroundColor:"rgba(255, 255, 255, 0.26)",color:"rgba(0, 0, 0, 1)",borderRadius:"0",borderWidth:"2rpx",fontSize:"32rpx",borderStyle:" none none solid none"}},[t._v("汽车型号："+t._s(t.detail.qichexinghao))]),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 2rpx 0",borderColor:"rgba(171, 174, 176, 1)",borderRadius:"0",borderWidth:"2rpx",borderStyle:"none none solid none",height:"68rpx"}},[i("v-uni-view",{staticClass:"lable",style:{width:"auto",fontSize:"28rpx",color:"rgba(6, 6, 6, 1)",textAlign:"left"}},[t._v("汽车类型：")]),i("v-uni-view",{staticClass:"text",style:{color:"rgba(0, 0, 0, 1)",textAlign:"left",fontSize:"28rpx"}},[t._v(t._s(t.detail.qicheleixing))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 2rpx 0",borderColor:"rgba(171, 174, 176, 1)",borderRadius:"0",borderWidth:"2rpx",borderStyle:"none none solid none",height:"68rpx"}},[i("v-uni-view",{staticClass:"lable",style:{width:"auto",fontSize:"28rpx",color:"rgba(6, 6, 6, 1)",textAlign:"left"}},[t._v("汽车品牌：")]),i("v-uni-view",{staticClass:"text",style:{color:"rgba(0, 0, 0, 1)",textAlign:"left",fontSize:"28rpx"}},[t._v(t._s(t.detail.qichepinpai))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 2rpx 0",borderColor:"rgba(171, 174, 176, 1)",borderRadius:"0",borderWidth:"2rpx",borderStyle:"none none solid none",height:"68rpx"}},[i("v-uni-view",{staticClass:"lable",style:{width:"auto",fontSize:"28rpx",color:"rgba(6, 6, 6, 1)",textAlign:"left"}},[t._v("汽车颜色：")]),i("v-uni-view",{staticClass:"text",style:{color:"rgba(0, 0, 0, 1)",textAlign:"left",fontSize:"28rpx"}},[t._v(t._s(t.detail.qicheyanse))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 2rpx 0",borderColor:"rgba(171, 174, 176, 1)",borderRadius:"0",borderWidth:"2rpx",borderStyle:"none none solid none",height:"68rpx"}},[i("v-uni-view",{staticClass:"lable",style:{width:"auto",fontSize:"28rpx",color:"rgba(6, 6, 6, 1)",textAlign:"left"}},[t._v("天窗：")]),i("v-uni-view",{staticClass:"text",style:{color:"rgba(0, 0, 0, 1)",textAlign:"left",fontSize:"28rpx"}},[t._v(t._s(t.detail.tianchuang))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 2rpx 0",borderColor:"rgba(171, 174, 176, 1)",borderRadius:"0",borderWidth:"2rpx",borderStyle:"none none solid none",height:"68rpx"}},[i("v-uni-view",{staticClass:"lable",style:{width:"auto",fontSize:"28rpx",color:"rgba(6, 6, 6, 1)",textAlign:"left"}},[t._v("换挡方式：")]),i("v-uni-view",{staticClass:"text",style:{color:"rgba(0, 0, 0, 1)",textAlign:"left",fontSize:"28rpx"}},[t._v(t._s(t.detail.huandangfangshi))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 2rpx 0",borderColor:"rgba(171, 174, 176, 1)",borderRadius:"0",borderWidth:"2rpx",borderStyle:"none none solid none",height:"68rpx"}},[i("v-uni-view",{staticClass:"lable",style:{width:"auto",fontSize:"28rpx",color:"rgba(6, 6, 6, 1)",textAlign:"left"}},[t._v("座位：")]),i("v-uni-view",{staticClass:"text",style:{color:"rgba(0, 0, 0, 1)",textAlign:"left",fontSize:"28rpx"}},[t._v(t._s(t.detail.zuowei))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 2rpx 0",borderColor:"rgba(171, 174, 176, 1)",borderRadius:"0",borderWidth:"2rpx",borderStyle:"none none solid none",height:"68rpx"}},[i("v-uni-view",{staticClass:"lable",style:{width:"auto",fontSize:"28rpx",color:"rgba(6, 6, 6, 1)",textAlign:"left"}},[t._v("汽车排量：")]),i("v-uni-view",{staticClass:"text",style:{color:"rgba(0, 0, 0, 1)",textAlign:"left",fontSize:"28rpx"}},[t._v(t._s(t.detail.qichepailiang))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 2rpx 0",borderColor:"rgba(171, 174, 176, 1)",borderRadius:"0",borderWidth:"2rpx",borderStyle:"none none solid none",height:"68rpx"}},[i("v-uni-view",{staticClass:"lable",style:{width:"auto",fontSize:"28rpx",color:"rgba(6, 6, 6, 1)",textAlign:"left"}},[t._v("上市年份：")]),i("v-uni-view",{staticClass:"text",style:{color:"rgba(0, 0, 0, 1)",textAlign:"left",fontSize:"28rpx"}},[t._v(t._s(t.detail.shangshinianfen))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 2rpx 0",borderColor:"rgba(171, 174, 176, 1)",borderRadius:"0",borderWidth:"2rpx",borderStyle:"none none solid none",height:"68rpx"}},[i("v-uni-view",{staticClass:"lable",style:{width:"auto",fontSize:"28rpx",color:"rgba(6, 6, 6, 1)",textAlign:"left"}},[t._v("价格：")]),i("v-uni-view",{staticClass:"text",style:{color:"rgba(0, 0, 0, 1)",textAlign:"left",fontSize:"28rpx"}},[t._v(t._s(t.detail.jiage))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 2rpx 0",borderColor:"rgba(171, 174, 176, 1)",borderRadius:"0",borderWidth:"2rpx",borderStyle:"none none solid none",height:"68rpx"}},[i("v-uni-view",{staticClass:"lable",style:{width:"auto",fontSize:"28rpx",color:"rgba(6, 6, 6, 1)",textAlign:"left"}},[t._v("点击次数：")]),i("v-uni-view",{staticClass:"text",style:{color:"rgba(0, 0, 0, 1)",textAlign:"left",fontSize:"28rpx"}},[t._v(t._s(t.detail.clicknum))])],1)],1),i("v-uni-view",{staticClass:"time-content",staticStyle:{height:"auto !important"},style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 2rpx 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"header",style:{color:"rgba(0, 0, 0, 1)",fontSize:"28rpx"}},[t._v("汽车详情")]),i("v-uni-view",{staticClass:"content",style:{color:"#333",fontSize:"28rpx"}},[i("v-uni-rich-text",{staticStyle:{"font-size":"33upx","line-height":"50upx","letter-spacing":"5upx"},attrs:{nodes:t.detail.qichexiangqing}})],1)],1),i("v-uni-view",{staticClass:"time-content",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"red",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",borderStyle:"solid"}},[i("v-uni-view",{staticClass:"comoment-header",style:{borderColor:"rgba(0,0,0,.2)",backgroundColor:"#fff",borderRadius:"0",borderStyle:"solid",borderWidth:"0 0 2rpx 0"}},[i("v-uni-view",{style:{color:"#333",fontSize:"28rpx"}},[t._v("评论")]),i("v-uni-view",{staticClass:"btn-comment-content",staticStyle:{display:"flex","align-items":"center"},style:{borderColor:"red",backgroundColor:"#fff",color:"#333",borderRadius:"0",borderWidth:"0",width:"auto",fontSize:"28rpx",borderStyle:"solid",isBtn:!0,height:"60rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onCommentTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cuIcon-add"}),t._v("添加评论")],1)],1),i("v-uni-view",{staticClass:"cu-list comment",staticStyle:{"margin-top":"20upx"}},t._l(t.commentList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cu-item comment-item",style:{borderColor:"rgba(0,0,0,.2)",backgroundColor:"#fff",borderRadius:"0",borderStyle:"dashed",borderWidth:"0 0 2rpx 0"}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"text-grey",style:{color:"rgba(0, 0, 0, 1)",textAlign:"left",fontSize:"28rpx"}},[t._v(t._s(e.nickname))]),i("v-uni-view",{staticClass:"text-gray text-content text-df content",style:{color:"rgba(255, 1, 1, 1)",textAlign:"left",fontSize:"24rpx"}},[t._v(t._s(e.content))]),i("v-uni-view",{staticClass:"margin-top-sm text-gray text-df",style:{color:"rgba(30, 144, 255, 1)",textAlign:"right",fontSize:"24rpx"}},[t._v(t._s(e.addtime))]),e.reply?i("v-uni-view",{staticClass:"text-gray text-content text-df content",style:{color:"rgba(255, 1, 1, 1)",textAlign:"left",fontSize:"24rpx"}},[t._v("回复:"+t._s(e.reply))]):t._e()],1)],1)})),1)],1),i("v-uni-view",{staticClass:"bottom-content cu-bar bg-white tabbar border shop"},[i("v-uni-view",{staticStyle:{"text-align":"left",display:"flex"}}),i("v-uni-view",{staticStyle:{"text-align":"right"}},[t.isAuth("qichexinxi","购买")?i("v-uni-button",{staticClass:"cu-btn bg-brown round shadow-blur",staticStyle:{"margin-right":"10upx","min-width":"180upx"},style:{width:"auto",borderRadius:"8rpx",height:"80rpx",fontSize:"28rpx",color:"#fff",backgroundColor:t.btnColor[6],borderColor:t.btnColor[6]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onAcrossTap("qichedingdan")}}},[t._v("购买")]):t._e()],1)],1)],1),i("uni-popup",{ref:"popup",staticClass:"popup-content",attrs:{type:"center"}},[i("v-uni-form",{staticClass:"popup-form"},[i("v-uni-view",{staticClass:"cu-form-group margin-top"},[i("v-uni-picker",{attrs:{value:t.sfshIndex,range:t.sfshOptions},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.sfshChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.detail.sfsh?t.detail.sfsh:"选择审核结果"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-textarea",{staticStyle:{width:"200px"},attrs:{placeholder:"审核回复"},model:{value:t.detail.shhf,callback:function(e){t.$set(t.detail,"shhf",e)},expression:"detail.shhf"}})],1),i("v-uni-view",{staticClass:"btn-content"},[i("v-uni-button",{staticClass:"cu-btn bg-cyan",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onCloseWinTap.apply(void 0,arguments)}}},[t._v("取消")]),i("v-uni-button",{staticClass:"cu-btn bg-red",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onFinishTap.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)],1)],1)},r=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}))},"3e1a":function(t,e,i){"use strict";i.r(e);var n=i("f96e"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},ad0f:function(t,e,i){"use strict";i.r(e);var n=i("201c"),a=i("3e1a");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("af55");var o,s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"40763cfa",null,!1,n["a"],o);e["default"]=l.exports},af55:function(t,e,i){"use strict";var n=i("d991"),a=i.n(n);a.a},ccfe:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-40763cfa]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}.swiper[data-v-40763cfa]{width:100%;height:%?450?%}.swiper uni-image[data-v-40763cfa]{width:100%}.detail-content[data-v-40763cfa]{font-size:%?28?%;color:#888;background:#fff;line-height:%?45?%}.detail-content .name[data-v-40763cfa]{font-size:%?38?%;font-weight:blod;padding-top:%?20?%}.detail-content .price[data-v-40763cfa]{font-size:%?33?%;color:red}.time-content[data-v-40763cfa]{background:#fff;padding:%?30?%;font-size:%?30?%;border-radius:%?20?%;margin-top:%?20?%}.time-content .header[data-v-40763cfa]{font-size:%?33?%;margin-bottom:%?20?%}.bottom-content[data-v-40763cfa]{position:fixed;bottom:0;left:0;width:100%}.comoment-header[data-v-40763cfa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?12?%}.comoment-header .btn-comment-content[data-v-40763cfa]{color:#dd514c;font-weight:700;padding:0 %?12?%}.comment-item[data-v-40763cfa]{margin-bottom:%?10?%;border-bottom:1px solid #eee;padding-bottom:%?20?%}.comment-item .content[data-v-40763cfa]{margin-left:%?20?%;margin-top:%?20?%}.icon[data-v-40763cfa]{width:%?50?%;height:%?50?%}.popup-content .popup-form[data-v-40763cfa]{background:#fff;margin-top:%?20?%}.popup-content .btn-content[data-v-40763cfa]{text-align:right;background:#fff}.popup-content .btn-content uni-button[data-v-40763cfa]{margin-left:%?20?%;margin-right:%?20?%;margin-bottom:%?20?%}.detail-list-item[data-v-40763cfa]{padding:0 %?24?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?68?%;border-bottom:%?2?% solid #efefef;background-color:#fff}.detail-list-item .lable[data-v-40763cfa]{font-size:%?28?%;color:#000}.detail-list-item .text[data-v-40763cfa]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?24?%;color:#f0f;text-align:left}.detail-list-item.favor .el-icon-star-on[data-v-40763cfa]{color:inherit;font-size:inherit}.detail-content .shop-title[data-v-40763cfa]{padding:%?20?% %?24?%;box-sizing:border-box;line-height:1.4}.priceFavor[data-v-40763cfa]{height:%?96?%!important}.priceFavor .text[data-v-40763cfa]{font-size:%?64?%!important;color:red!important}.priceFavor .icon[data-v-40763cfa]{font-size:%?56?%!important;text-align:right!important;color:red!important}',""]),t.exports=e},d991:function(t,e,i){var n=i("ccfe");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("30ed64a8",n,!0,{sourceMap:!1,shadowMode:!1})},f96e:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a481"),i("28a5"),i("55dd"),i("96cf");var a=n(i("3b8d")),r={data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],storeupFlag:0,count:0}},computed:{SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=e.id;case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onShow:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var i,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.init(),i=uni.getStorageSync("nowTable"),t.next=4,this.$api.session(i);case 4:n=t.sent,this.user=n.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),this.getStoreup(),a=uni.getStorageSync("discussqichexinxiCleanType"),a&&(uni.removeStorageSync("discussqichexinxiCleanType"),this.mescroll.num=1,this.upCallback(this.mescroll));case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),destroyed:function(){},methods:{onPayTap:function(){uni.setStorageSync("paytable","qichexinxi"),uni.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},getStoreup:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){var e,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={page:1,limit:1,refid:this.id,tablename:"qichexinxi",userid:this.user.id,type:1},t.next=3,this.$api.list("storeup",e);case 3:i=t.sent,this.storeupFlag=i.data.list.length;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),shoucang:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){var e,i,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this,i={page:1,limit:1,refid:e.detail.id,tablename:"qichexinxi",userid:e.user.id,type:1},t.next=4,e.$api.list("storeup",i);case 4:if(n=t.sent,1!=n.data.list.length){t.next=9;break}return r=n.data.list[0].id,uni.showModal({title:"提示",content:"是否取消",success:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!i.confirm){t.next=5;break}return t.next=3,e.$api.del("storeup",JSON.stringify([r]));case 3:e.$utils.msg("取消成功"),e.getStoreup();case 5:case"end":return t.stop()}}),t)})));function i(e){return t.apply(this,arguments)}return i}()}),t.abrupt("return");case 9:uni.showModal({title:"提示",content:"是否收藏",success:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!i.confirm){t.next=5;break}return t.next=3,e.$api.add("storeup",{userid:e.user.id,name:e.detail.qichexinghao,picture:e.swiperList[0],refid:e.detail.id,tablename:"qichexinxi"});case 3:e.$utils.msg("收藏成功"),e.getStoreup();case 5:case"end":return t.stop()}}),t)})));function i(e){return t.apply(this,arguments)}return i}()});case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onAcrossTap:function(t){uni.setStorageSync("crossTable","qichexinxi"),uni.setStorageSync("crossObj",this.detail),this.$utils.jump("../".concat(t,"/add-or-update?cross=true"))},init:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("qichexinxi",this.id);case 2:e=t.sent,this.detail=e.data,this.swiperList=this.detail.qichetupian?this.detail.qichetupian.split(","):[],this.detail.qichexiangqing=this.detail.qichexiangqing.replace(/img src/gi,'img style="width:100%;" src');case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.list("discussqichexinxi",{page:e.num,limit:e.size,refid:this.id});case 2:i=t.sent,1==e.num&&(this.commentList=[]),this.commentList=this.commentList.concat(i.data.list),0==i.data.list.length&&(this.hasNext=!1),e.endSuccess(e.size,this.hasNext);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(t){var e=this;uni.downloadFile({url:t,success:function(i){200===i.statusCode&&(e.$utils.msg("下载成功"),window.open(t))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){this.$utils.jump("../discussqichexinxi/add-or-update?refid=".concat(this.id))},onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.detail.sfsh){t.next=3;break}return this.$utils.msg("请选择审核状态"),t.abrupt("return");case 3:if(this.detail.shhf){t.next=6;break}return this.$utils.msg("请填写审核回复"),t.abrupt("return");case 6:return"通过"==this.detail.sfsh&&(this.detail.sfsh="是"),"不通过"==this.detail.sfsh&&(this.detail.sfsh="否"),t.next=10,this.$api.update("qichexinxi",this.detail);case 10:this.$utils.msg("审核成功"),this.$refs.popup.close();case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};e.default=r}}]);
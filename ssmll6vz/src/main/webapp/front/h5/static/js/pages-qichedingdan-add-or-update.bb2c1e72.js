(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-qichedingdan-add-or-update"],{"4e87":function(r,e,i){"use strict";var t=i("64bc"),a=i.n(t);a.a},"558a":function(r,e,i){"use strict";i.r(e);var t=i("cda7"),a=i.n(t);for(var o in t)"default"!==o&&function(r){i.d(e,r,(function(){return t[r]}))}(o);e["default"]=a.a},"600e":function(r,e,i){"use strict";i.r(e);var t=i("e280"),a=i("558a");for(var o in a)"default"!==o&&function(r){i.d(e,r,(function(){return a[r]}))}(o);i("4e87");var n,l=i("f0c5"),s=Object(l["a"])(a["default"],t["b"],t["c"],!1,null,"c786faba",null,!1,t["a"],n);e["default"]=s.exports},"64bc":function(r,e,i){var t=i("93f3");"string"===typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var a=i("4f06").default;a("466a6611",t,!0,{sourceMap:!1,shadowMode:!1})},"93f3":function(r,e,i){var t=i("24fb");e=t(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-c786faba]{padding:%?20?%}.content[data-v-c786faba]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-c786faba]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-c786faba]{width:%?180?%}.avator[data-v-c786faba]{width:%?150?%;height:%?60?%}.right-input[data-v-c786faba]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-c786faba]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-c786faba]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-c786faba]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-c786faba]{border:0}.cu-form-group uni-input[data-v-c786faba]{padding:0 %?30?%}.uni-input[data-v-c786faba]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-c786faba]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-c786faba]::after{line-height:%?88?%}.select .uni-input[data-v-c786faba]{line-height:%?88?%}.input .right-input[data-v-c786faba]{line-height:%?110?%}',""]),r.exports=e},cda7:function(r,e,i){"use strict";var t=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac6a"),i("96cf");var a=t(i("3b8d")),o=t(i("e2b1")),n={data:function(){return{ruleForm:{dingdanbianhao:this.getUUID(),qichexinghao:"",qicheleixing:"",qichepinpai:"",qicheyanse:"",qichetupian:"",tianchuang:"",huandangfangshi:"",zuowei:"",qichepailiang:"",jiage:"",zhanghao:"",xingming:"",dianhua:"",goumaishijian:"",ispay:"",userid:""},user:{},ro:{dingdanbianhao:!1,qichexinghao:!1,qicheleixing:!1,qichepinpai:!1,qicheyanse:!1,qichetupian:!1,tianchuang:!1,huandangfangshi:!1,zuowei:!1,qichepailiang:!1,jiage:!1,zhanghao:!1,xingming:!1,dianhua:!1,goumaishijian:!1,ispay:!1,userid:!1}}},components:{wPicker:o.default},computed:{},onLoad:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(e){var i,t,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return this.ruleForm.goumaishijian=this.$utils.getCurDateTime(),i=uni.getStorageSync("nowTable"),r.next=4,this.$api.session(i);case 4:if(t=r.sent,this.user=t.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ro.zhanghao=!0,this.ruleForm.xingming=this.user.xingming,this.ro.xingming=!0,this.ruleForm.dianhua=this.user.dianhua,this.ro.dianhua=!0,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=20;break}return this.ruleForm.id=e.id,r.next=18,this.$api.info("qichedingdan",this.ruleForm.id);case 18:t=r.sent,this.ruleForm=t.data;case 20:if(!e.cross){r.next=91;break}a=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(a);case 23:if((r.t1=r.t0()).done){r.next=91;break}if(o=r.t1.value,"dingdanbianhao"!=o){r.next=29;break}return this.ruleForm.dingdanbianhao=a[o],this.ro.dingdanbianhao=!0,r.abrupt("continue",23);case 29:if("qichexinghao"!=o){r.next=33;break}return this.ruleForm.qichexinghao=a[o],this.ro.qichexinghao=!0,r.abrupt("continue",23);case 33:if("qicheleixing"!=o){r.next=37;break}return this.ruleForm.qicheleixing=a[o],this.ro.qicheleixing=!0,r.abrupt("continue",23);case 37:if("qichepinpai"!=o){r.next=41;break}return this.ruleForm.qichepinpai=a[o],this.ro.qichepinpai=!0,r.abrupt("continue",23);case 41:if("qicheyanse"!=o){r.next=45;break}return this.ruleForm.qicheyanse=a[o],this.ro.qicheyanse=!0,r.abrupt("continue",23);case 45:if("qichetupian"!=o){r.next=49;break}return this.ruleForm.qichetupian=a[o],this.ro.qichetupian=!0,r.abrupt("continue",23);case 49:if("tianchuang"!=o){r.next=53;break}return this.ruleForm.tianchuang=a[o],this.ro.tianchuang=!0,r.abrupt("continue",23);case 53:if("huandangfangshi"!=o){r.next=57;break}return this.ruleForm.huandangfangshi=a[o],this.ro.huandangfangshi=!0,r.abrupt("continue",23);case 57:if("zuowei"!=o){r.next=61;break}return this.ruleForm.zuowei=a[o],this.ro.zuowei=!0,r.abrupt("continue",23);case 61:if("qichepailiang"!=o){r.next=65;break}return this.ruleForm.qichepailiang=a[o],this.ro.qichepailiang=!0,r.abrupt("continue",23);case 65:if("jiage"!=o){r.next=69;break}return this.ruleForm.jiage=a[o],this.ro.jiage=!0,r.abrupt("continue",23);case 69:if("zhanghao"!=o){r.next=73;break}return this.ruleForm.zhanghao=a[o],this.ro.zhanghao=!0,r.abrupt("continue",23);case 73:if("xingming"!=o){r.next=77;break}return this.ruleForm.xingming=a[o],this.ro.xingming=!0,r.abrupt("continue",23);case 77:if("dianhua"!=o){r.next=81;break}return this.ruleForm.dianhua=a[o],this.ro.dianhua=!0,r.abrupt("continue",23);case 81:if("goumaishijian"!=o){r.next=85;break}return this.ruleForm.goumaishijian=a[o],this.ro.goumaishijian=!0,r.abrupt("continue",23);case 85:if("userid"!=o){r.next=89;break}return this.ruleForm.userid=a[o],this.ro.userid=!0,r.abrupt("continue",23);case 89:r.next=23;break;case 91:this.styleChange();case 92:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},goumaishijianConfirm:function(r){console.log(r),this.ruleForm.goumaishijian=r.result,this.$forceUpdate()},qichetupianTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.qichetupian=r.$base.url+"upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.qichexinghao){r.next=3;break}return this.$utils.msg("汽车型号不能为空"),r.abrupt("return");case 3:if(this.ruleForm.qicheleixing){r.next=6;break}return this.$utils.msg("汽车类型不能为空"),r.abrupt("return");case 6:if(this.ruleForm.qichepinpai){r.next=9;break}return this.$utils.msg("汽车品牌不能为空"),r.abrupt("return");case 9:if(this.ruleForm.qicheyanse){r.next=12;break}return this.$utils.msg("汽车颜色不能为空"),r.abrupt("return");case 12:if(!this.ruleForm.id){r.next=17;break}return r.next=15,this.$api.update("qichedingdan",this.ruleForm);case 15:r.next=19;break;case 17:return r.next=19,this.$api.add("qichedingdan",this.ruleForm);case 19:this.$utils.msgBack("提交成功");case 20:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,a=e.getDate();return"start"===r?i-=60:"end"===r&&(i+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(i,"-").concat(t,"-").concat(a)},toggleTab:function(r){this.$refs[r].show()}}};e.default=n},e280:function(r,e,i){"use strict";var t={"w-picker":i("e2b1").default},a=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{staticClass:"app-update-pv"},[i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("订单编号")]),i("v-uni-view",{staticClass:"right-input",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"}},[r._v(r._s(r.ruleForm.dingdanbianhao))])],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("汽车型号")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.qichexinghao,placeholder:"汽车型号"},model:{value:r.ruleForm.qichexinghao,callback:function(e){r.$set(r.ruleForm,"qichexinghao",e)},expression:"ruleForm.qichexinghao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("汽车类型")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.qicheleixing,placeholder:"汽车类型"},model:{value:r.ruleForm.qicheleixing,callback:function(e){r.$set(r.ruleForm,"qicheleixing",e)},expression:"ruleForm.qicheleixing"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("汽车品牌")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.qichepinpai,placeholder:"汽车品牌"},model:{value:r.ruleForm.qichepinpai,callback:function(e){r.$set(r.ruleForm,"qichepinpai",e)},expression:"ruleForm.qichepinpai"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("汽车颜色")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.qicheyanse,placeholder:"汽车颜色"},model:{value:r.ruleForm.qicheyanse,callback:function(e){r.$set(r.ruleForm,"qicheyanse",e)},expression:"ruleForm.qicheyanse"}})],1),i("v-uni-view",{staticClass:"cu-form-group",class:"left"==r.left?"":"active",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.qichetupianTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("汽车图片")]),i("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[r.ruleForm.qichetupian?i("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:r.ruleForm.qichetupian,mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("天窗")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.tianchuang,placeholder:"天窗"},model:{value:r.ruleForm.tianchuang,callback:function(e){r.$set(r.ruleForm,"tianchuang",e)},expression:"ruleForm.tianchuang"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("换挡方式")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.huandangfangshi,placeholder:"换挡方式"},model:{value:r.ruleForm.huandangfangshi,callback:function(e){r.$set(r.ruleForm,"huandangfangshi",e)},expression:"ruleForm.huandangfangshi"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("座位")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.zuowei,placeholder:"座位"},model:{value:r.ruleForm.zuowei,callback:function(e){r.$set(r.ruleForm,"zuowei",e)},expression:"ruleForm.zuowei"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("汽车排量")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.qichepailiang,placeholder:"汽车排量"},model:{value:r.ruleForm.qichepailiang,callback:function(e){r.$set(r.ruleForm,"qichepailiang",e)},expression:"ruleForm.qichepailiang"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("价格")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.jiage,placeholder:"价格"},model:{value:r.ruleForm.jiage,callback:function(e){r.$set(r.ruleForm,"jiage",e)},expression:"ruleForm.jiage"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("账号")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.zhanghao,placeholder:"账号"},model:{value:r.ruleForm.zhanghao,callback:function(e){r.$set(r.ruleForm,"zhanghao",e)},expression:"ruleForm.zhanghao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("姓名")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.xingming,placeholder:"姓名"},model:{value:r.ruleForm.xingming,callback:function(e){r.$set(r.ruleForm,"xingming",e)},expression:"ruleForm.xingming"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("电话")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.dianhua,placeholder:"电话"},model:{value:r.ruleForm.dianhua,callback:function(e){r.$set(r.ruleForm,"dianhua",e)},expression:"ruleForm.dianhua"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("购买时间")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{placeholder:"购买时间"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.toggleTab("goumaishijian")}},model:{value:r.ruleForm.goumaishijian,callback:function(e){r.$set(r.ruleForm,"goumaishijian",e)},expression:"ruleForm.goumaishijian"}})],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"8rpx",color:"#fff",borderWidth:"2rpx",width:"160rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1),i("w-picker",{ref:"goumaishijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(e){arguments[0]=e=r.$handleEvent(e),r.goumaishijianConfirm.apply(void 0,arguments)}}})],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return t}))}}]);
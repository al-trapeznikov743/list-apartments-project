(this.webpackJsonplite_version=this.webpackJsonplite_version||[]).push([[0],{10:function(t,e,n){t.exports={header:"Header_header__3YJyF",tools:"Header_tools__2C3eG",top_search:"Header_top_search__38xbR"}},3:function(t,e,n){t.exports={list:"ListApartments_list__zlxD4",list_wrapper:"ListApartments_list_wrapper__27gOD",description:"ListApartments_description__3LNkh",description_list:"ListApartments_description_list__216VN",description_item:"ListApartments_description_item__22QWM",description_title:"ListApartments_description_title__1hKN7",icon:"ListApartments_icon__2pB7G",icon_activ:"ListApartments_icon_activ__15Bc2",img:"ListApartments_img__yqhqm"}},35:function(t,e,n){},61:function(t,e,n){},62:function(t,e,n){},63:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(0),s=n.n(i),a=n(7),r=n.n(a),o=(n(35),n(9)),u=n(5),l=n(26),d=n(11),p=n(4),j="SET_APARTMENT_LIKE",_="SET_LIST_APARTMENT",b="TOGGLE_IS_FETCHING",h="SET_CURRENT_PAGE",g="SET_TOTAL_COUNT",O={list:[],totalCount:null,currentPage:1,pageSize:12,isFetching:!1},f=Object(u.c)({rootReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return Object(p.a)(Object(p.a)({},t),{},{list:[].concat(Object(d.a)(t.list),[t.list[e.id-1].like=!t.list[e.id-1].like])});case _:return Object(p.a)(Object(p.a)({},t),{},{list:[].concat(Object(d.a)(t.list),Object(d.a)(e.list))});case h:return Object(p.a)(Object(p.a)({},t),{},{currentPage:e.pageNumber});case g:return Object(p.a)(Object(p.a)({},t),{},{totalCount:e.totalCount});case b:return Object(p.a)(Object(p.a)({},t),{},{isFetching:e.isFetching});default:return t}}}),m=Object(u.d)(f,Object(u.a)(l.a));window.state=m.getState();var v=m,x=n(10),L=n.n(x),N=function(){return Object(c.jsx)("div",{className:L.a.header,children:Object(c.jsx)("div",{className:L.a.tools,children:Object(c.jsx)("input",{placeholder:"Search",type:"text",className:L.a.top_search})})})},C=n(29),k=n(16),S=n.n(k),T=n(27),R=n(28).create({baseURL:"http://ec2-3-139-90-250.us-east-2.compute.amazonaws.com:8080/"}),A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;return R.get("api/apartments?page=".concat(t,"&count=").concat(e))},P=function(t){return{type:b,isFetching:t}},E=function(t){return{type:h,pageNumber:t}},F=n(3),w=n.n(F),y=n.p+"static/media/apartments.cb0af314.jpg",I=function(t){var e=t.postId,n=t.square,i=t.address,s=t.photo,a=t.cost;return Object(c.jsxs)("div",{className:w.a.list_wrapper,children:[Object(c.jsx)("img",{className:w.a.img,src:s||"",alt:"img"}),Object(c.jsxs)("div",{className:w.a.description,children:[Object(c.jsxs)("div",{className:w.a.description_list,children:[Object(c.jsxs)("span",{className:w.a.description_item,children:["\u041f\u043b\u043e\u0449\u0430\u0434\u044c: ",n," \u043a\u0432.\u043c"]}),Object(c.jsxs)("span",{className:w.a.description_item,children:["\u0410\u0434\u0440\u0435\u0441: ",i]}),Object(c.jsxs)("span",{className:w.a.description_item,children:["\u0426\u0435\u043d\u0430: ",a]})]}),Object(c.jsx)("div",{className:w.a.description_title,children:Object(c.jsx)("span",{children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438"})}),Object(c.jsx)("div",{children:Object(c.jsx)("span",{onClick:function(){t.setLike(e)},children:Object(c.jsx)("i",{className:"fas fa-heart ".concat(t.like?w.a.icon_activ:w.a.icon)})})})]})]})},z=function(t){return Object(c.jsxs)("div",{className:w.a.list,children:[t.list.map((function(e){return Object(c.jsx)(I,{postId:e.id,square:e.square,address:e.address,photo:y,cost:e.cost,like:e.like,setLike:t.setLike},e.id)})),Object(c.jsx)("div",{ref:t.onPageChangedRef})]})},G=Object(o.b)((function(t){return{list:t.rootReducer.list,totalCount:t.rootReducer.totalCount,pageSize:t.rootReducer.pageSize,isFetching:t.rootReducer.isFetching,currentPage:t.rootReducer.currentPage}}),{setLike:function(t){return{type:j,id:t}},getList:function(t,e){return function(){var n=Object(T.a)(S.a.mark((function n(c){var i;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(P(!0)),c(E(t)),n.next=4,A(t,e);case 4:i=n.sent,console.log(i),c(P(!1)),c((a=i.data.data,{type:_,list:a})),c((s=i.data.totalCount,{type:g,totalCount:s}));case 9:case"end":return n.stop()}var s,a}),n)})));return function(t){return n.apply(this,arguments)}}()}})((function(t){for(var e=Object(i.useState)(!0),n=Object(C.a)(e,2),s=n[0],a=n[1],r=Math.ceil(t.totalCount/t.pageSize),o=[],u=0;u<r;u++)o.push(u);var l=o[o.length-1],d=t.isFetching,p=function(e){if(!d&&!s&&e[0].intersectionRatio>0){var n=t.currentPage+1;if(n>l+1)return;t.getList(n,t.pageSize)}},j=Object(i.useRef)(),_={root:null,rootMargin:"250px",threshold:.1},b=Object(i.useCallback)((function(t){j.current&&j.current.disconnect(),j.current=new IntersectionObserver(p,_),t&&j.current.observe(t)}));return Object(i.useEffect)((function(){t.getList(t.currentPage,t.pageSize).then((function(){a(!1)}))}),[]),Object(c.jsx)(z,{list:t.list,setLike:t.setLike,currentPage:t.currentPage,totalCount:t.totalCount,onPageChangedRef:b})}));n(61),n(62),n(63);var M=function(){return Object(c.jsx)(o.a,{store:v,children:Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(N,{}),Object(c.jsx)(G,{})]})})},q=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),s(t),a(t)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(M,{})}),document.getElementById("root")),q()}},[[64,1,2]]]);
//# sourceMappingURL=main.fee10e7d.chunk.js.map
import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{p as i,q as e,r,z as c,I as _,J as m,L as x,H as p,x as h,F as v,W as y,B as g,K as f,S as b,s as k}from"./framework.d7d875d2.js";import{p as B}from"./common.044324df.js";const F={class:"tab"},$=["onClick"],C=i({__name:"Tab",props:{data:{type:Array,required:!0},active:{type:String,required:!0}},emits:["update:active"],setup(s,{emit:a}){const t=u=>{a("update:active",u)};return(u,l)=>(e(),r(_,null,[c("ul",F,[(e(!0),r(_,null,m(s.data,o=>(e(),r("li",{key:o,class:p(o===s.active?"active":""),onClick:n=>t(o)},h(o),11,$))),128))]),x(u.$slots,"default",{},void 0,!0)],64))}});var A=d(C,[["__scopeId","data-v-a90b4ea8"]]);const I=["title"],L=["src","alt"],T=i({__name:"ImgList",props:{data:{type:Array,defualt:()=>[]}},setup(s){const a=s,t=v(!1);y(()=>{B(a.data.map(l=>l.url))});const u=()=>{t.value=!t.value};return(l,o)=>(e(),r(_,null,[c("i",{class:p(`fa fa-${t.value?"th":"list"} toggle-btn`),onClick:u},null,2),c("ul",{class:p(`img-list ${t.value?"":"small"}`)},[(e(!0),r(_,null,m(s.data,n=>(e(),r("li",{key:n.url,title:n.text},[c("img",{src:n.url,alt:n.text},null,8,L)],8,I))),128))],2)],64))}});var D=d(T,[["__scopeId","data-v-695a4903"]]);const j=i({__name:"Arknights",setup(s){const a=[{url:"https://s1.xptou.com/2022/09/29/633501799dfa8.jpg",text:"\u7AEF\u5348-2022"},{url:"https://s1.xptou.com/2022/09/29/6335017932a9d.jpg",text:"\u65B0\u6625\u795D\u798F-\u963F\u7C73\u5A05"},{url:"https://s1.xptou.com/2022/09/29/6335017965b49.jpg",text:"\u65B0\u6625\u795D\u798F-\u51EF\u5C14\u897F"},{url:"https://s1.xptou.com/2022/09/29/63350179671fc.jpg",text:"\u65B0\u6625\u795D\u798F-\u514B\u6D1B\u65AF"}];return(t,u)=>(e(),g(D,{data:a}))}}),G={class:"collect"},S=i({__name:"index",setup(s){const a=["Arknights"],t=v(a[0]);return(u,l)=>(e(),r("div",G,[f(A,{data:a,active:t.value,"onUpdate:active":l[0]||(l[0]=o=>t.value=o)},{default:b(()=>[t.value==="Arknights"?(e(),g(j,{key:0})):k("",!0)]),_:1},8,["active"])]))}}),z='{"title":"Game","description":"Game","frontmatter":{"title":"Game","description":"Game","date":"2022-09-23T00:00:00.000Z","page":true,"sidebar":true,"header":true,"comment":true,"postInfo":false,"postFooter":false},"relativePath":"pages/collect.md","lastUpdated":1664436483014}',q={},U=Object.assign(q,{__name:"collect",setup(s){return(a,t)=>(e(),r("div",null,[f(S)]))}});export{z as __pageData,U as default};

import{Ba as x,Bb as S,Ca as h,Cb as D,Db as i,Eb as r,Fb as Q,Gb as O,H as C,Jb as d,Lb as q,Tb as p,Ub as w,V as _,Vb as l,Wa as a,Zb as s,a as f,b as y,eb as I,ga as c,qa as g,ra as v,vb as P,z as b}from"./chunk-ZLFU4CEU.js";var m=class n{product=h.required();onIncrementQuantity=x();incrementQuantity(){this.onIncrementQuantity.emit(this.product().quantity+1)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=c({type:n,selectors:[["app-product-card"]],inputs:{product:[1,"product"]},outputs:{onIncrementQuantity:"onIncrementQuantity"},standalone:!0,features:[s],decls:7,vars:3,consts:[[1,"bg-slate-200","w-full","rounded-xl","h-40","flex","justify-center","items-center","flex-col"],[1,"font-bold","text-sm","my-2"],[1,"bg-blue-500","p-2","px-2","rounded","text-white","hover:bg-blue-600","transition-all",3,"click"]],template:function(t,o){t&1&&(i(0,"div",0)(1,"span"),p(2),r(),i(3,"h2",1),p(4),r(),i(5,"button",2),d("click",function(){return o.incrementQuantity()}),p(6),r()()),t&2&&(a(2),w(o.product().name),a(2),l("#",o.product().id,""),a(2),l(" Cantidad ",o.product().quantity," "))}})};var N=(n,e)=>e.id;function $(n,e){if(n&1){let t=O();i(0,"app-product-card",4),d("onIncrementQuantity",function(u){let F=g(t).$implicit,T=q();return v(T.updataProduct(F,u))}),r()}if(n&2){let t=e.$implicit;P("product",t)}}var E=class n{products=I([{id:1,name:"Producto 1",quantity:0},{id:2,name:"Producto 2",quantity:0}]);intervalSubscription=b(1e3).pipe(_(()=>{this.products.update(e=>[...e,{id:e.length+1,name:`Producto ${e.length+1}`,quantity:0}])}),C(7)).subscribe();ngOnDestroy(){this.intervalSubscription.unsubscribe()}updataProduct(e,t){this.products.update(o=>o.map(u=>u.id===e.id?y(f({},u),{quantity:t}):u))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=c({type:n,selectors:[["app-input-output"]],standalone:!0,features:[s],decls:6,vars:0,consts:[[1,"text-3xl"],[1,"my-2"],[1,"grid","grid-cols-1","sm:grid-cols-3","gap-2"],[3,"product"],[3,"onIncrementQuantity","product"]],template:function(t,o){t&1&&(i(0,"h1",0),p(1,"Listado de productos"),r(),Q(2,"hr",1),i(3,"div",2),S(4,$,1,1,"app-product-card",3,N),r()),t&2&&(a(4),D(o.products()))},dependencies:[m]})};export{E as InputOutputComponent};

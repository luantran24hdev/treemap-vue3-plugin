import{ref as n,computed as t,openBlock as e,createElementBlock as r,normalizeClass as i,normalizeStyle as o,unref as u,createCommentVNode as a,createElementVNode as h}from"vue";function c(n){var t=0,e=n.children,r=e&&e.length;if(r)for(;--r>=0;)t+=e[r].value;else t=1;n.value=t}function f(n,t){n instanceof Map?(n=[void 0,n],void 0===t&&(t=d)):void 0===t&&(t=l);for(var e,r,i,o,u,a=new v(n),h=[a];e=h.pop();)if((i=t(e.data))&&(u=(i=Array.from(i)).length))for(e.children=i,o=u-1;o>=0;--o)h.push(r=i[o]=new v(i[o])),r.parent=e,r.depth=e.depth+1;return a.eachBefore(p)}function l(n){return n.children}function d(n){return Array.isArray(n)?n[1]:null}function s(n){void 0!==n.data.value&&(n.value=n.data.value),n.data=n.data.data}function p(n){var t=0;do{n.height=t}while((n=n.parent)&&n.height<++t)}function v(n){this.data=n,this.depth=this.height=0,this.parent=null}function g(n){if("function"!=typeof n)throw new Error;return n}function y(){return 0}function m(n){return function(){return n}}function x(n){n.x0=Math.round(n.x0),n.y0=Math.round(n.y0),n.x1=Math.round(n.x1),n.y1=Math.round(n.y1)}function w(n,t,e,r,i){for(var o,u=n.children,a=-1,h=u.length,c=n.value&&(r-t)/n.value;++a<h;)(o=u[a]).y0=e,o.y1=i,o.x0=t,o.x1=t+=o.value*c}function k(n,t,e,r,i){for(var o,u=n.children,a=-1,h=u.length,c=n.value&&(i-e)/n.value;++a<h;)(o=u[a]).x0=t,o.x1=r,o.y0=e,o.y1=e+=o.value*c}v.prototype=f.prototype={constructor:v,count:function(){return this.eachAfter(c)},each:function(n,t){let e=-1;for(const r of this)n.call(t,r,++e,this);return this},eachAfter:function(n,t){for(var e,r,i,o=this,u=[o],a=[],h=-1;o=u.pop();)if(a.push(o),e=o.children)for(r=0,i=e.length;r<i;++r)u.push(e[r]);for(;o=a.pop();)n.call(t,o,++h,this);return this},eachBefore:function(n,t){for(var e,r,i=this,o=[i],u=-1;i=o.pop();)if(n.call(t,i,++u,this),e=i.children)for(r=e.length-1;r>=0;--r)o.push(e[r]);return this},find:function(n,t){let e=-1;for(const r of this)if(n.call(t,r,++e,this))return r},sum:function(n){return this.eachAfter((function(t){for(var e=+n(t.data)||0,r=t.children,i=r&&r.length;--i>=0;)e+=r[i].value;t.value=e}))},sort:function(n){return this.eachBefore((function(t){t.children&&t.children.sort(n)}))},path:function(n){for(var t=this,e=function(n,t){if(n===t)return n;var e=n.ancestors(),r=t.ancestors(),i=null;n=e.pop(),t=r.pop();for(;n===t;)i=n,n=e.pop(),t=r.pop();return i}(t,n),r=[t];t!==e;)t=t.parent,r.push(t);for(var i=r.length;n!==e;)r.splice(i,0,n),n=n.parent;return r},ancestors:function(){for(var n=this,t=[n];n=n.parent;)t.push(n);return t},descendants:function(){return Array.from(this)},leaves:function(){var n=[];return this.eachBefore((function(t){t.children||n.push(t)})),n},links:function(){var n=this,t=[];return n.each((function(e){e!==n&&t.push({source:e.parent,target:e})})),t},copy:function(){return f(this).eachBefore(s)},[Symbol.iterator]:function*(){var n,t,e,r,i=this,o=[i];do{for(n=o.reverse(),o=[];i=n.pop();)if(yield i,t=i.children)for(e=0,r=t.length;e<r;++e)o.push(t[e])}while(o.length)}};var B=function n(t){function e(n,e,r,i,o){!function(n,t,e,r,i,o){for(var u,a,h,c,f,l,d,s,p,v,g,y=[],m=t.children,x=0,B=0,M=m.length,b=t.value;x<M;){h=i-e,c=o-r;do{f=m[B++].value}while(!f&&B<M);for(l=d=f,g=f*f*(v=Math.max(c/h,h/c)/(b*n)),p=Math.max(d/g,g/l);B<M;++B){if(f+=a=m[B].value,a<l&&(l=a),a>d&&(d=a),g=f*f*v,(s=Math.max(d/g,g/l))>p){f-=a;break}p=s}y.push(u={value:f,dice:h<c,children:m.slice(x,B)}),u.dice?w(u,e,r,i,b?r+=c*f/b:o):k(u,e,r,b?e+=h*f/b:i,o),b-=f,x=B}}(t,n,e,r,i,o)}return e.ratio=function(t){return n((t=+t)>1?t:1)},e}((1+Math.sqrt(5))/2);const M=h("h1",null,null,-1),b=["viewBox"],_={key:0};var A={__name:"TreemapView",props:["width","height","background","data","margin","color"],setup(h){const c=h,l=n({top:10,right:10,bottom:50,left:50}),d=n(400),s=n(400),p=n("black"),v=n("white"),w=t((()=>c.width||s.value)),k=t((()=>c.height||d.value)),A=t((()=>c.background||v.value));t((()=>c.margin||l.value)),t((()=>c.color||p.value));const T=t((()=>c.data?f({name:"root",children:c.data}):null)),I=t((()=>function(){var n=B,t=!1,e=1,r=1,i=[0],o=y,u=y,a=y,h=y,c=y;function f(n){return n.x0=n.y0=0,n.x1=e,n.y1=r,n.eachBefore(l),i=[0],t&&n.eachBefore(x),n}function l(t){var e=i[t.depth],r=t.x0+e,f=t.y0+e,l=t.x1-e,d=t.y1-e;l<r&&(r=l=(r+l)/2),d<f&&(f=d=(f+d)/2),t.x0=r,t.y0=f,t.x1=l,t.y1=d,t.children&&(e=i[t.depth+1]=o(t)/2,r+=c(t)-e,f+=u(t)-e,(l-=a(t)-e)<r&&(r=l=(r+l)/2),(d-=h(t)-e)<f&&(f=d=(f+d)/2),n(t,r,f,l,d))}return f.round=function(n){return arguments.length?(t=!!n,f):t},f.size=function(n){return arguments.length?(e=+n[0],r=+n[1],f):[e,r]},f.tile=function(t){return arguments.length?(n=g(t),f):n},f.padding=function(n){return arguments.length?f.paddingInner(n).paddingOuter(n):f.paddingInner()},f.paddingInner=function(n){return arguments.length?(o="function"==typeof n?n:m(+n),f):o},f.paddingOuter=function(n){return arguments.length?f.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n):f.paddingTop()},f.paddingTop=function(n){return arguments.length?(u="function"==typeof n?n:m(+n),f):u},f.paddingRight=function(n){return arguments.length?(a="function"==typeof n?n:m(+n),f):a},f.paddingBottom=function(n){return arguments.length?(h="function"==typeof n?n:m(+n),f):h},f.paddingLeft=function(n){return arguments.length?(c="function"==typeof n?n:m(+n),f):c},f}().size([w.value,k.value]).padding(3).paddingOuter(10))),O=t((()=>T.value?I.value(T.value.sum((n=>n.value))).descendants():null));return(n,t)=>(e(),r("div",{class:i("gf_simplestack_container")},[M,(e(),r("svg",{ref:"svg",xmlns:"http://www.w3.org/2000/svg",style:o({background:u(A)}),version:"1.2",baseProfile:"tiny",width:"100%",height:"100%",viewBox:`0 0 ${u(w)} ${u(k)}`,"stroke-linecap":"round","stroke-linejoin":"round",class:i("gf_simplestack_svg")},[u(O)?(e(),r("g",_)):a("v-if",!0)],14,b))],2))},__file:"src/TreemapView.vue"},T={install:(n,t)=>{n.component("gf-treemap",A)}};export{T as default};

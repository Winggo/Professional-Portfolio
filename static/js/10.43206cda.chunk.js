(this["webpackJsonpwinggo.us"]=this["webpackJsonpwinggo.us"]||[]).push([[10],{82:function(t,e,n){"use strict";var r=n(0),i=n.n(r),o=n(10),s=n.n(o),a=n(83);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){c(t,e,n[e])}))}return t}function f(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d={cursor:"pointer"},p=function(t){var e=t.index,n=t.onClick,r=t.photo,o=t.margin,s=t.direction,a=t.top,c=t.left,f=t.key,l={margin:o,display:"block"};"column"===s&&(l.position="absolute",l.left=c,l.top=a);return i.a.createElement("img",u({key:f,style:n?h({},l,d):l},r,{onClick:n?function(t){n(t,{photo:r,index:e})}:null}))},v=s.a.shape({key:s.a.string,src:s.a.string.isRequired,width:s.a.number.isRequired,height:s.a.number.isRequired,alt:s.a.string,title:s.a.string,srcSet:s.a.oneOfType([s.a.string,s.a.array]),sizes:s.a.oneOfType([s.a.string,s.a.array])});p.propTypes={index:s.a.number.isRequired,onClick:s.a.func,photo:v.isRequired,margin:s.a.number,top:function(t){if("column"===t.direction&&"number"!==typeof t.top)return new Error("top is a required number when direction is set to `column`")},left:function(t){if("column"===t.direction&&"number"!==typeof t.left)return new Error("left is a required number when direction is set to `column`")},direction:s.a.string};var b=function(t,e){return e||(e=0),Number(Math.round(t+"e"+e)+"e-"+e)},g=function(t){var e=t.width,n=t.height;return b(e/n,2)};function m(t){this.content=[],this.scoreFunction=t}m.prototype={push:function(t){this.content.push(t),this.bubbleUp(this.content.length-1)},pop:function(){var t=this.content[0],e=this.content.pop();return this.content.length>0&&(this.content[0]=e,this.sinkDown(0)),t},remove:function(t){for(var e=this.content.length,n=0;n<e;n++)if(this.content[n]==t){var r=this.content.pop();if(n==e-1)break;this.content[n]=r,this.bubbleUp(n),this.sinkDown(n);break}},size:function(){return this.content.length},bubbleUp:function(t){for(var e=this.content[t],n=this.scoreFunction(e);t>0;){var r=Math.floor((t+1)/2)-1,i=this.content[r];if(n>=this.scoreFunction(i))break;this.content[r]=e,this.content[t]=i,t=r}},sinkDown:function(t){for(var e=this.content.length,n=this.content[t],r=this.scoreFunction(n);;){var i=2*(t+1),o=i-1,s=null;if(o<e){var a=this.content[o],c=this.scoreFunction(a);c<r&&(s=o)}if(i<e){var u=this.content[i];this.scoreFunction(u)<(null==s?r:c)&&(s=i)}if(null==s)break;this.content[t]=this.content[s],this.content[s]=n,t=s}}};var y=function(t,e,n){return function(t,e){for(var n=[],r=e;r;)n.push(r),t[r],r=t[r];return n.reverse()}(function(t,e,n){var r={},i={},o={};o[e]=0;var s=new m((function(t){return t.weight}));for(s.push({id:e,weight:0});s.size();){var a=s.pop(),c=a.id;if(!i[c]){var u=t(c)||{};for(var h in i[c]=1,u){var f=a.weight+u[h];("undefined"===typeof o[h]||o[h]>f)&&(o[h]=f,s.push({id:h,weight:f}),r[h]=c)}}}if("undefined"===typeof o[n])throw new Error("There is no path from ".concat(e," to ").concat(n));return r}(t,e,n),n)},w=function(t,e,n){return(e-t.length*(2*n))/t.reduce((function(t,e){return t+g(e)}),0)},_=function(t,e,n,r,i,o){var s=t.slice(e,n),a=w(s,r,o);return Math.pow(Math.abs(a-i),2)},O=function(t){var e=t.containerWidth,n=t.limitNodeSearch,r=t.targetRowHeight,i=t.margin,o=t.photos,s=function(t,e,n,r,i){return function(o){var s={};s[+(o=+o)]=0;for(var a=o+1;a<n.length+1&&!(a-o>r);++a)s[a.toString()]=_(n,o,a,e,t,i);return s}}(r,e,o,n,i),a=y(s,"0",o.length);a=a.map((function(t){return+t}));for(var c=1;c<a.length;++c)for(var u=o.slice(a[c-1],a[c]),h=w(u,e,i),f=a[c-1];f<a[c];++f)o[f].width=b(h*g(o[f]),1),o[f].height=h;return o},E=i.a.memo((function(t){var e=t.photos,n=t.onClick,o=t.direction,s=t.margin,c=t.limitNodeSearch,u=t.targetRowHeight,d=t.columns,v=t.renderImage,g=l(Object(r.useState)(0),2),m=g[0],y=g[1],w=Object(r.useRef)(null);Object(r.useLayoutEffect)((function(){var t=null,e=new a.a((function(e){var n=e[0].contentRect.width;m!==n&&(t=window.requestAnimationFrame((function(){y(Math.floor(n))})))}));return e.observe(w.current),function(){e.disconnect(),window.cancelAnimationFrame(t)}}));var _=function(t,r){var i=r.index;n(t,{index:i,photo:e[i],previous:e[i-1]||null,next:e[i+1]||null})};if(!m)return i.a.createElement("div",{ref:w},"\xa0");var E,k,M=m-1;"row"===o&&("function"===typeof c&&(c=c(m)),"function"===typeof u&&(u=u(m)),void 0===c&&(c=2,m>=450&&(c=function(t){var e=t.targetRowHeight,n=t.containerWidth;return b(n/e/1.5)+8}({containerWidth:m,targetRowHeight:u}))),E={display:"flex",flexWrap:"wrap",flexDirection:"row"},k=O({containerWidth:M,limitNodeSearch:c,targetRowHeight:u,margin:s,photos:e})),"column"===o&&("function"===typeof d&&(d=d(m)),void 0===d&&(d=1,m>=500&&(d=2),m>=900&&(d=3),m>=1500&&(d=4)),E={position:"relative"},k=function(t){for(var e=t.photos,n=t.columns,r=t.containerWidth,i=t.margin,o=(r-2*i*n)/n,s=e.map((function(t){var e=t.height/t.width*o;return h({},t,{width:b(o,1),height:b(e,1)})})),a=[],c=[],u=0;u<n;u++)a[u]=b(u*(o+2*i),1),c[u]=0;return s.map((function(t){var e=c.reduce((function(t,e,n){return t=e<c[t]?n:t}),0);t.top=c[e],t.left=a[e],c[e]=c[e]+t.height+2*i;var n=c.reduce((function(t,e,n){return t=e>c[t]?n:t}),0);return t.containerHeight=c[n],t}))}({containerWidth:M,columns:d,margin:s,photos:e}),E.height=k[k.length-1].containerHeight);var R=v||p;return i.a.createElement("div",{className:"react-photo-gallery--gallery"},i.a.createElement("div",{ref:w,style:E},k.map((function(t,e){var r=t.left,i=t.top,a=t.containerHeight,c=f(t,["left","top","containerHeight"]);return R({left:r,top:i,key:t.key||t.src,containerHeight:a,index:e,margin:s,direction:o,onClick:n?_:null,photo:c})}))))}));E.propTypes={photos:s.a.arrayOf(v).isRequired,direction:s.a.string,onClick:s.a.func,columns:s.a.oneOfType([s.a.func,s.a.number]),targetRowHeight:s.a.oneOfType([s.a.func,s.a.number]),limitNodeSearch:s.a.oneOfType([s.a.func,s.a.number]),margin:s.a.number,renderImage:s.a.func},E.defaultProps={margin:2,direction:"row",targetRowHeight:300},e.a=E},83:function(t,e,n){"use strict";(function(t){var n=function(){if("undefined"!==typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return(function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}())}(),r="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,i="undefined"!==typeof t&&t.Math===Math?t:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),o="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)},s=2;var a=20,c=["top","right","bottom","left","width","height","size","weight"],u="undefined"!==typeof MutationObserver,h=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function a(){n&&(n=!1,t()),r&&u()}function c(){o(a)}function u(){var t=Date.now();if(n){if(t-i<s)return;r=!0}else n=!0,r=!1,setTimeout(c,e);i=t}return u}(this.refresh.bind(this),a)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){r&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),u?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){r&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;c.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),f=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},l=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||i},d=y(0,0,0,0);function p(t){return parseFloat(t)||0}function v(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+p(t["border-"+n+"-width"])}),0)}function b(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return d;var r=l(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=p(o)}return e}(r),o=i.left+i.right,s=i.top+i.bottom,a=p(r.width),c=p(r.height);if("border-box"===r.boxSizing&&(Math.round(a+o)!==e&&(a-=v(r,"left","right")+o),Math.round(c+s)!==n&&(c-=v(r,"top","bottom")+s)),!function(t){return t===l(t).document.documentElement}(t)){var u=Math.round(a+o)-e,h=Math.round(c+s)-n;1!==Math.abs(u)&&(a-=u),1!==Math.abs(h)&&(c-=h)}return y(i.left,i.top,a,c)}var g="undefined"!==typeof SVGGraphicsElement?function(t){return t instanceof l(t).SVGGraphicsElement}:function(t){return t instanceof l(t).SVGElement&&"function"===typeof t.getBBox};function m(t){return r?g(t)?function(t){var e=t.getBBox();return y(0,0,e.width,e.height)}(t):b(t):d}function y(t,e,n,r){return{x:t,y:e,width:n,height:r}}var w=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=y(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=m(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),_=function(t,e){var n=function(t){var e=t.x,n=t.y,r=t.width,i=t.height,o="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(o.prototype);return f(s,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),s}(e);f(this,{target:t,contentRect:n})},O=function(){function t(t,e,r){if(this.activeObservations_=[],this.observations_=new n,"function"!==typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=r}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new w(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new _(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),E="undefined"!==typeof WeakMap?new WeakMap:new n,k=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=h.getInstance(),r=new O(e,n,this);E.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){k.prototype[t]=function(){var e;return(e=E.get(this))[t].apply(e,arguments)}}));var M="undefined"!==typeof i.ResizeObserver?i.ResizeObserver:k;e.a=M}).call(this,n(41))}}]);
//# sourceMappingURL=10.43206cda.chunk.js.map
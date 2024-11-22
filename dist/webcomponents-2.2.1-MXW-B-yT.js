/*! webcomponents release: 2.2.1 */
function t(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),i.push.apply(i,e)}return i}function n(n){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?t(Object(e),!0).forEach((function(t){u(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):t(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t,n,i){return n&&function(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}(t.prototype,n),t}function u(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function f(t,n){return f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},f(t,n)}function c(t,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function s(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,e=o(t);if(n){var r=o(this).constructor;i=Reflect.construct(e,arguments,r)}else i=e.apply(this,arguments);return c(this,i)}}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,n,i){var e=function(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=o(t)););return t}(t,n);if(e){var r=Object.getOwnPropertyDescriptor(e,n);return r.get?r.get.call(arguments.length<3?t:i):r.value}},a.apply(this,arguments)}var h={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perSwipe:"",touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",waitForTransition:!0,throttle:10,direction:"ltr",peek:0,cloningRatio:1,breakpoints:{},classes:{swipeable:"glide--swipeable",dragging:"glide--dragging",direction:{ltr:"glide--ltr",rtl:"glide--rtl"},type:{slider:"glide--slider",carousel:"glide--carousel"},slide:{clone:"glide__slide--clone",active:"glide__slide--active"},arrow:{disabled:"glide__arrow--disabled"},nav:{active:"glide__bullet--active"}}};function v(t){console.error("[Glide warn]: ".concat(t))}function l(t){return parseInt(t)}function d(t){return"string"==typeof t}function p(t){var n=i(t);return"function"===n||"object"===n&&!!t}function m(t){return"function"==typeof t}function b(t){return void 0===t}function y(t){return t.constructor===Array}function g(t,n,i){Object.defineProperty(t,n,i)}function w(t,i){var e=Object.assign({},t,i);if(i.hasOwnProperty("classes")){e.classes=Object.assign({},t.classes,i.classes);["direction","type","slide","arrow","nav"].forEach((function(r){i.classes.hasOwnProperty(r)&&(e.classes[r]=n(n({},t.classes[r]),i.classes[r]))}))}return i.hasOwnProperty("breakpoints")&&(e.breakpoints=Object.assign({},t.breakpoints,i.breakpoints)),e}var k=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,t),this.events=n,this.hop=n.hasOwnProperty}return r(t,[{key:"on",value:function(t,n){if(!y(t)){this.hop.call(this.events,t)||(this.events[t]=[]);var i=this.events[t].push(n)-1;return{remove:function(){delete this.events[t][i]}}}for(var e=0;e<t.length;e++)this.on(t[e],n)}},{key:"emit",value:function(t,n){if(y(t))for(var i=0;i<t.length;i++)this.emit(t[i],n);else this.hop.call(this.events,t)&&this.events[t].forEach((function(t){t(n||{})}))}}]),t}(),j=function(){function t(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e(this,t),this._c={},this._t=[],this._e=new k,this.disabled=!1,this.selector=n,this.settings=w(h,i),this.index=this.settings.startAt}return r(t,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),p(t)?this._c=function(t,n,i){var e={};for(var r in n)m(n[r])?e[r]=n[r](t,e,i):v("Extension must be a function");for(var u in e)m(e[u].mount)&&e[u].mount();return e}(this,t,this._e):v("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return y(t)?this._t=t:v("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.settings=w(this.settings,t),t.hasOwnProperty("startAt")&&(this.index=t.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t&&(this.settings.autoplay=t),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,n){return this._e.on(t,n),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){p(t)?this._o=t:v("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(t){this._i=l(t)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),t}();function O(){return(new Date).getTime()}function S(t,n){var i,e,r,u,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},f=0,c=function(){f=!1===o.leading?0:O(),i=null,u=t.apply(e,r),i||(e=r=null)},s=function(){var s=O();f||!1!==o.leading||(f=s);var a=n-(s-f);return e=this,r=arguments,a<=0||a>n?(i&&(clearTimeout(i),i=null),f=s,u=t.apply(e,r),i||(e=r=null)):i||!1===o.trailing||(i=setTimeout(c,a)),u};return s.cancel=function(){clearTimeout(i),f=0,i=e=r=null},s}var A={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function x(t){if(t&&t.parentNode){for(var n=t.parentNode.firstChild,i=[];n;n=n.nextSibling)1===n.nodeType&&n!==t&&i.push(n);return i}return[]}function M(t){return Array.prototype.slice.call(t)}var R=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,t),this.listeners=n}return r(t,[{key:"on",value:function(t,n,i){var e=arguments.length>3&&void 0!==arguments[3]&&arguments[3];d(t)&&(t=[t]);for(var r=0;r<t.length;r++)this.listeners[t[r]]=i,n.addEventListener(t[r],this.listeners[t[r]],e)}},{key:"off",value:function(t,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];d(t)&&(t=[t]);for(var e=0;e<t.length;e++)n.removeEventListener(t[e],this.listeners[t[e]],i)}},{key:"destroy",value:function(){delete this.listeners}}]),t}();var T=["ltr","rtl"],z={">":"<","<":">","=":"="};function C(t,n){return{modify:function(t){return n.Direction.is("rtl")?-t:t}}}function B(t,n){return{modify:function(t){var i=Math.floor(t/n.Sizes.slideWidth);return t+n.Gaps.value*i}}}function E(t,n){return{modify:function(t){return t+n.Clones.grow/2}}}function _(t,n){return{modify:function(i){if(t.settings.focusAt>=0){var e=n.Peek.value;return p(e)?i-e.before:i-e}return i}}}function D(t,n){return{modify:function(i){var e=n.Gaps.value,r=n.Sizes.width,u=t.settings.focusAt,o=n.Sizes.slideWidth;return"center"===u?i-(r/2-o/2):i-o*u-e*u}}}var I=!1;try{var L=Object.defineProperty({},"passive",{get:function(){I=!0}});window.addEventListener("testPassive",null,L),window.removeEventListener("testPassive",null,L)}catch(t){}var P=I,F=["touchstart","mousedown"],G=["touchmove","mousemove"],H=["touchend","touchcancel","mouseup","mouseleave"],W=["mousedown","mousemove","mouseup","mouseleave"];var Y='[data-glide-el^="controls"]',K="".concat(Y,' [data-glide-dir*="<"]'),V="".concat(Y,' [data-glide-dir*=">"]');function q(t){return p(t)?(n=t,Object.keys(n).sort().reduce((function(t,i){return t[i]=n[i],t[i],t}),{})):(v("Breakpoints option must be an object"),{});var n}var J={Html:function(t,n,i){var e={mount:function(){this.root=t.selector,this.track=this.root.querySelector('[data-glide-el="track"]'),this.collectSlides()},collectSlides:function(){this.slides=M(this.wrapper.children).filter((function(n){return!n.classList.contains(t.settings.classes.slide.clone)}))}};return g(e,"root",{get:function(){return e._r},set:function(t){d(t)&&(t=document.querySelector(t)),null!==t?e._r=t:v("Root element must be a existing Html node")}}),g(e,"track",{get:function(){return e._t},set:function(t){e._t=t}}),g(e,"wrapper",{get:function(){return e.track.children[0]}}),i.on("update",(function(){e.collectSlides()})),e},Translate:function(t,n,i){var e={set:function(i){var e=function(t,n,i){var e=[B,E,_,D].concat(t._t,[C]);return{mutate:function(r){for(var u=0;u<e.length;u++){var o=e[u];m(o)&&m(o().modify)?r=o(t,n,i).modify(r):v("Transformer should be a function that returns an object with `modify()` method")}return r}}}(t,n).mutate(i),r="translate3d(".concat(-1*e,"px, 0px, 0px)");n.Html.wrapper.style.mozTransform=r,n.Html.wrapper.style.webkitTransform=r,n.Html.wrapper.style.transform=r},remove:function(){n.Html.wrapper.style.transform=""},getStartIndex:function(){var i=n.Sizes.length,e=t.index,r=t.settings.perView;return n.Run.isOffset(">")||n.Run.isOffset("|>")?i+(e-r):(e+r)%i},getTravelDistance:function(){var i=n.Sizes.slideWidth*t.settings.perView;return n.Run.isOffset(">")||n.Run.isOffset("|>")?-1*i:i}};return i.on("move",(function(r){if(!t.isType("carousel")||!n.Run.isOffset())return e.set(r.movement);n.Transition.after((function(){i.emit("translate.jump"),e.set(n.Sizes.slideWidth*t.index)}));var u=n.Sizes.slideWidth*n.Translate.getStartIndex();return e.set(u-n.Translate.getTravelDistance())})),i.on("destroy",(function(){e.remove()})),e},Transition:function(t,n,i){var e=!1,r={compose:function(n){var i=t.settings;return e?"".concat(n," 0ms ").concat(i.animationTimingFunc):"".concat(n," ").concat(this.duration,"ms ").concat(i.animationTimingFunc)},set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";n.Html.wrapper.style.transition=this.compose(t)},remove:function(){n.Html.wrapper.style.transition=""},after:function(t){setTimeout((function(){t()}),this.duration)},enable:function(){e=!1,this.set()},disable:function(){e=!0,this.set()}};return g(r,"duration",{get:function(){var i=t.settings;return t.isType("slider")&&n.Run.offset?i.rewindDuration:i.animationDuration}}),i.on("move",(function(){r.set()})),i.on(["build.before","resize","translate.jump"],(function(){r.disable()})),i.on("run",(function(){r.enable()})),i.on("destroy",(function(){r.remove()})),r},Direction:function(t,n,i){var e={mount:function(){this.value=t.settings.direction},resolve:function(t){var n=t.slice(0,1);return this.is("rtl")?t.split(n).join(z[n]):t},is:function(t){return this.value===t},addClass:function(){n.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function(){n.Html.root.classList.remove(t.settings.classes.direction[this.value])}};return g(e,"value",{get:function(){return e._v},set:function(t){T.indexOf(t)>-1?e._v=t:v("Direction value must be `ltr` or `rtl`")}}),i.on(["destroy","update"],(function(){e.removeClass()})),i.on("update",(function(){e.mount()})),i.on(["build.before","update"],(function(){e.addClass()})),e},Peek:function(t,n,i){var e={mount:function(){this.value=t.settings.peek}};return g(e,"value",{get:function(){return e._v},set:function(t){p(t)?(t.before=l(t.before),t.after=l(t.after)):t=l(t),e._v=t}}),g(e,"reductor",{get:function(){var n=e.value,i=t.settings.perView;return p(n)?n.before/i+n.after/i:2*n/i}}),i.on(["resize","update"],(function(){e.mount()})),e},Sizes:function(t,n,i){var e={setupSlides:function(){for(var t="".concat(this.slideWidth,"px"),i=n.Html.slides,e=0;e<i.length;e++)i[e].style.width=t},setupWrapper:function(){n.Html.wrapper.style.width="".concat(this.wrapperSize,"px")},remove:function(){for(var t=n.Html.slides,i=0;i<t.length;i++)t[i].style.width="";n.Html.wrapper.style.width=""}};return g(e,"length",{get:function(){return n.Html.slides.length}}),g(e,"width",{get:function(){return n.Html.track.offsetWidth}}),g(e,"wrapperSize",{get:function(){return e.slideWidth*e.length+n.Gaps.grow+n.Clones.grow}}),g(e,"slideWidth",{get:function(){return e.width/t.settings.perView-n.Peek.reductor-n.Gaps.reductor}}),i.on(["build.before","resize","update"],(function(){e.setupSlides(),e.setupWrapper()})),i.on("destroy",(function(){e.remove()})),e},Gaps:function(t,n,i){var e={apply:function(t){for(var i=0,e=t.length;i<e;i++){var r=t[i].style,u=n.Direction.value;r[A[u][0]]=0!==i?"".concat(this.value/2,"px"):"",i!==t.length-1?r[A[u][1]]="".concat(this.value/2,"px"):r[A[u][1]]=""}},remove:function(t){for(var n=0,i=t.length;n<i;n++){var e=t[n].style;e.marginLeft="",e.marginRight=""}}};return g(e,"value",{get:function(){return l(t.settings.gap)}}),g(e,"grow",{get:function(){return e.value*n.Sizes.length}}),g(e,"reductor",{get:function(){var n=t.settings.perView;return e.value*(n-1)/n}}),i.on(["build.after","update"],S((function(){e.apply(n.Html.wrapper.children)}),30)),i.on("destroy",(function(){e.remove(n.Html.wrapper.children)})),e},Move:function(t,n,i){var e={mount:function(){this._o=0},make:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=e,i.emit("move",{movement:this.value}),n.Transition.after((function(){i.emit("move.after",{movement:t.value})}))}};return g(e,"offset",{get:function(){return e._o},set:function(t){e._o=b(t)?0:l(t)}}),g(e,"translate",{get:function(){return n.Sizes.slideWidth*t.index}}),g(e,"value",{get:function(){var t=this.offset,i=this.translate;return n.Direction.is("rtl")?i+t:i-t}}),i.on(["build.before","run"],(function(){e.make()})),e},Clones:function(t,n,i){var e={mount:function(){this.items=[],t.isType("carousel")&&(this.items=this.collect())},collect:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=n.Html.slides,r=t.settings,u=r.perView,o=r.classes,f=r.cloningRatio;if(e.length>0)for(var c=u+ +!!t.settings.peek+Math.round(u/2),s=e.slice(0,c).reverse(),a=e.slice(-1*c),h=0;h<Math.max(f,Math.floor(u/e.length));h++){for(var v=0;v<s.length;v++){var l=s[v].cloneNode(!0);l.classList.add(o.slide.clone),i.push(l)}for(var d=0;d<a.length;d++){var p=a[d].cloneNode(!0);p.classList.add(o.slide.clone),i.unshift(p)}}return i},append:function(){for(var t=this.items,i=n.Html,e=i.wrapper,r=i.slides,u=Math.floor(t.length/2),o=t.slice(0,u).reverse(),f=t.slice(-1*u).reverse(),c="".concat(n.Sizes.slideWidth,"px"),s=0;s<f.length;s++)e.appendChild(f[s]);for(var a=0;a<o.length;a++)e.insertBefore(o[a],r[0]);for(var h=0;h<t.length;h++)t[h].style.width=c},remove:function(){for(var t=this.items,i=0;i<t.length;i++)n.Html.wrapper.removeChild(t[i])}};return g(e,"grow",{get:function(){return(n.Sizes.slideWidth+n.Gaps.value)*e.items.length}}),i.on("update",(function(){e.remove(),e.mount(),e.append()})),i.on("build.before",(function(){t.isType("carousel")&&e.append()})),i.on("destroy",(function(){e.remove()})),e},Resize:function(t,n,i){var e=new R,r={mount:function(){this.bind()},bind:function(){e.on("resize",window,S((function(){i.emit("resize")}),t.settings.throttle))},unbind:function(){e.off("resize",window)}};return i.on("destroy",(function(){r.unbind(),e.destroy()})),r},Build:function(t,n,i){var e={mount:function(){i.emit("build.before"),this.typeClass(),this.activeClass(),i.emit("build.after")},typeClass:function(){n.Html.root.classList.add(t.settings.classes.type[t.settings.type])},activeClass:function(){var i=t.settings.classes,e=n.Html.slides[t.index];e&&(e.classList.add(i.slide.active),x(e).forEach((function(t){t.classList.remove(i.slide.active)})))},removeClasses:function(){var i=t.settings.classes,e=i.type,r=i.slide;n.Html.root.classList.remove(e[t.settings.type]),n.Html.slides.forEach((function(t){t.classList.remove(r.active)}))}};return i.on(["destroy","update"],(function(){e.removeClasses()})),i.on(["resize","update"],(function(){e.mount()})),i.on("move.after",(function(){e.activeClass()})),e},Run:function(t,n,i){var e={mount:function(){this._o=!1},make:function(e){var r=this;t.disabled||(!t.settings.waitForTransition||t.disable(),this.move=e,i.emit("run.before",this.move),this.calculate(),i.emit("run",this.move),n.Transition.after((function(){r.isStart()&&i.emit("run.start",r.move),r.isEnd()&&i.emit("run.end",r.move),r.isOffset()&&(r._o=!1,i.emit("run.offset",r.move)),i.emit("run.after",r.move),t.enable()})))},calculate:function(){var n=this.move,i=this.length,r=n.steps,u=n.direction,o=1;if("="===u)return t.settings.bound&&l(r)>i?void(t.index=i):void(t.index=r);if(">"!==u||">"!==r)if("<"!==u||"<"!==r){if("|"===u&&(o=t.settings.perView||1),">"===u||"|"===u&&">"===r){var f=function(n){var i=t.index;if(t.isType("carousel"))return i+n;return i+(n-i%n)}(o);return f>i&&(this._o=!0),void(t.index=function(n,i){var r=e.length;if(n<=r)return n;if(t.isType("carousel"))return n-(r+1);if(t.settings.rewind)return e.isBound()&&!e.isEnd()?r:0;if(e.isBound())return r;return Math.floor(r/i)*i}(f,o))}if("<"===u||"|"===u&&"<"===r){var c=function(n){var i=t.index;if(t.isType("carousel"))return i-n;var e=Math.ceil(i/n);return(e-1)*n}(o);return c<0&&(this._o=!0),void(t.index=function(n,i){var r=e.length;if(n>=0)return n;if(t.isType("carousel"))return n+(r+1);if(t.settings.rewind)return e.isBound()&&e.isStart()?r:Math.floor(r/i)*i;return 0}(c,o))}v("Invalid direction pattern [".concat(u).concat(r,"] has been used"))}else t.index=0;else t.index=i},isStart:function(){return t.index<=0},isEnd:function(){return t.index>=this.length},isOffset:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return t?!!this._o&&("|>"===t?"|"===this.move.direction&&">"===this.move.steps:"|<"===t?"|"===this.move.direction&&"<"===this.move.steps:this.move.direction===t):this._o},isBound:function(){return t.isType("slider")&&"center"!==t.settings.focusAt&&t.settings.bound}};return g(e,"move",{get:function(){return this._m},set:function(t){var n=t.substr(1);this._m={direction:t.substr(0,1),steps:n?l(n)?l(n):n:0}}}),g(e,"length",{get:function(){var i=t.settings,e=n.Html.slides.length;return this.isBound()?e-1-(l(i.perView)-1)+l(i.focusAt):e-1}}),g(e,"offset",{get:function(){return this._o}}),e},Swipe:function(t,n,i){var e=new R,r=0,u=0,o=0,f=!1,c=!!P&&{passive:!0},s={mount:function(){this.bindSwipeStart()},start:function(n){if(!f&&!t.disabled){this.disable();var e=this.touches(n);r=null,u=l(e.pageX),o=l(e.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),i.emit("swipe.start")}},move:function(e){if(!t.disabled){var f=t.settings,c=f.touchAngle,s=f.touchRatio,a=f.classes,h=this.touches(e),v=l(h.pageX)-u,d=l(h.pageY)-o,p=Math.abs(v<<2),m=Math.abs(d<<2),b=Math.sqrt(p+m),y=Math.sqrt(m);if(!(180*(r=Math.asin(y/b))/Math.PI<c))return!1;e.stopPropagation(),n.Move.make(v*parseFloat(s)),n.Html.root.classList.add(a.dragging),i.emit("swipe.move")}},end:function(e){if(!t.disabled){var o=t.settings,f=o.perSwipe,c=o.touchAngle,s=o.classes,a=this.touches(e),h=this.threshold(e),v=a.pageX-u,l=180*r/Math.PI;this.enable(),v>h&&l<c?n.Run.make(n.Direction.resolve("".concat(f,"<"))):v<-h&&l<c?n.Run.make(n.Direction.resolve("".concat(f,">"))):n.Move.make(),n.Html.root.classList.remove(s.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),i.emit("swipe.end")}},bindSwipeStart:function(){var i=this,r=t.settings,u=r.swipeThreshold,o=r.dragThreshold;u&&e.on(F[0],n.Html.wrapper,(function(t){i.start(t)}),c),o&&e.on(F[1],n.Html.wrapper,(function(t){i.start(t)}),c)},unbindSwipeStart:function(){e.off(F[0],n.Html.wrapper,c),e.off(F[1],n.Html.wrapper,c)},bindSwipeMove:function(){var i=this;e.on(G,n.Html.wrapper,S((function(t){i.move(t)}),t.settings.throttle),c)},unbindSwipeMove:function(){e.off(G,n.Html.wrapper,c)},bindSwipeEnd:function(){var t=this;e.on(H,n.Html.wrapper,(function(n){t.end(n)}))},unbindSwipeEnd:function(){e.off(H,n.Html.wrapper)},touches:function(t){return W.indexOf(t.type)>-1?t:t.touches[0]||t.changedTouches[0]},threshold:function(n){var i=t.settings;return W.indexOf(n.type)>-1?i.dragThreshold:i.swipeThreshold},enable:function(){return f=!1,n.Transition.enable(),this},disable:function(){return f=!0,n.Transition.disable(),this}};return i.on("build.after",(function(){n.Html.root.classList.add(t.settings.classes.swipeable)})),i.on("destroy",(function(){s.unbindSwipeStart(),s.unbindSwipeMove(),s.unbindSwipeEnd(),e.destroy()})),s},Images:function(t,n,i){var e=new R,r={mount:function(){this.bind()},bind:function(){e.on("dragstart",n.Html.wrapper,this.dragstart)},unbind:function(){e.off("dragstart",n.Html.wrapper)},dragstart:function(t){t.preventDefault()}};return i.on("destroy",(function(){r.unbind(),e.destroy()})),r},Anchors:function(t,n,i){var e=new R,r=!1,u=!1,o={mount:function(){this._a=n.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){e.on("click",n.Html.wrapper,this.click)},unbind:function(){e.off("click",n.Html.wrapper)},click:function(t){u&&(t.stopPropagation(),t.preventDefault())},detach:function(){if(u=!0,!r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!1;r=!0}return this},attach:function(){if(u=!1,r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!0;r=!1}return this}};return g(o,"items",{get:function(){return o._a}}),i.on("swipe.move",(function(){o.detach()})),i.on("swipe.end",(function(){n.Transition.after((function(){o.attach()}))})),i.on("destroy",(function(){o.attach(),o.unbind(),e.destroy()})),o},Controls:function(t,n,i){var e=new R,r=!!P&&{passive:!0},u={mount:function(){this._n=n.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._c=n.Html.root.querySelectorAll(Y),this._arrowControls={previous:n.Html.root.querySelectorAll(K),next:n.Html.root.querySelectorAll(V)},this.addBindings()},setActive:function(){for(var t=0;t<this._n.length;t++)this.addClass(this._n[t].children)},removeActive:function(){for(var t=0;t<this._n.length;t++)this.removeClass(this._n[t].children)},addClass:function(n){var i=t.settings,e=n[t.index];e&&(e.classList.add(i.classes.nav.active),x(e).forEach((function(t){t.classList.remove(i.classes.nav.active)})))},removeClass:function(n){var i=n[t.index];null==i||i.classList.remove(t.settings.classes.nav.active)},setArrowState:function(){if(!t.settings.rewind){var i=u._arrowControls.next,e=u._arrowControls.previous;this.resetArrowState(i,e),0===t.index&&this.disableArrow(e),t.index===n.Run.length&&this.disableArrow(i)}},resetArrowState:function(){for(var n=t.settings,i=arguments.length,e=new Array(i),r=0;r<i;r++)e[r]=arguments[r];e.forEach((function(t){M(t).forEach((function(t){t.classList.remove(n.classes.arrow.disabled)}))}))},disableArrow:function(){for(var n=t.settings,i=arguments.length,e=new Array(i),r=0;r<i;r++)e[r]=arguments[r];e.forEach((function(t){M(t).forEach((function(t){t.classList.add(n.classes.arrow.disabled)}))}))},addBindings:function(){for(var t=0;t<this._c.length;t++)this.bind(this._c[t].children)},removeBindings:function(){for(var t=0;t<this._c.length;t++)this.unbind(this._c[t].children)},bind:function(t){for(var n=0;n<t.length;n++)e.on("click",t[n],this.click),e.on("touchstart",t[n],this.click,r)},unbind:function(t){for(var n=0;n<t.length;n++)e.off(["click","touchstart"],t[n])},click:function(t){P||"touchstart"!==t.type||t.preventDefault();var i=t.currentTarget.getAttribute("data-glide-dir");n.Run.make(n.Direction.resolve(i))}};return g(u,"items",{get:function(){return u._c}}),i.on(["mount.after","move.after"],(function(){u.setActive()})),i.on(["mount.after","run"],(function(){u.setArrowState()})),i.on("destroy",(function(){u.removeBindings(),u.removeActive(),e.destroy()})),u},Keyboard:function(t,n,i){var e=new R,r={mount:function(){t.settings.keyboard&&this.bind()},bind:function(){e.on("keyup",document,this.press)},unbind:function(){e.off("keyup",document)},press:function(i){var e=t.settings.perSwipe;["ArrowRight","ArrowLeft"].includes(i.code)&&n.Run.make(n.Direction.resolve("".concat(e).concat({ArrowRight:">",ArrowLeft:"<"}[i.code])))}};return i.on(["destroy","update"],(function(){r.unbind()})),i.on("update",(function(){r.mount()})),i.on("destroy",(function(){e.destroy()})),r},Autoplay:function(t,n,i){var e=new R,r={mount:function(){this.enable(),this.start(),t.settings.hoverpause&&this.bind()},enable:function(){this._e=!0},disable:function(){this._e=!1},start:function(){var e=this;this._e&&(this.enable(),t.settings.autoplay&&b(this._i)&&(this._i=setInterval((function(){e.stop(),n.Run.make(">"),e.start(),i.emit("autoplay")}),this.time)))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var t=this;e.on("mouseover",n.Html.root,(function(){t._e&&t.stop()})),e.on("mouseout",n.Html.root,(function(){t._e&&t.start()}))},unbind:function(){e.off(["mouseover","mouseout"],n.Html.root)}};return g(r,"time",{get:function(){var i=n.Html.slides[t.index].getAttribute("data-glide-autoplay");return l(i||t.settings.autoplay)}}),i.on(["destroy","update"],(function(){r.unbind()})),i.on(["run.before","swipe.start","update"],(function(){r.stop()})),i.on(["pause","destroy"],(function(){r.disable(),r.stop()})),i.on(["run.after","swipe.end"],(function(){r.start()})),i.on(["play"],(function(){r.enable(),r.start()})),i.on("update",(function(){r.mount()})),i.on("destroy",(function(){e.destroy()})),r},Breakpoints:function(t,n,i){var e=new R,r=t.settings,u=q(r.breakpoints),o=Object.assign({},r),f={match:function(t){if(void 0!==window.matchMedia)for(var n in t)if(t.hasOwnProperty(n)&&window.matchMedia("(max-width: ".concat(n,"px)")).matches)return t[n];return o}};return Object.assign(r,f.match(u)),e.on("resize",window,S((function(){t.settings=w(r,f.match(u))}),t.settings.throttle)),i.on("update",(function(){u=q(u),o=Object.assign({},r)})),i.on("destroy",(function(){e.off("resize",window)})),f}},N=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(n,j);var t=s(n);function n(){return e(this,n),t.apply(this,arguments)}return r(n,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a(o(n.prototype),"mount",this).call(this,Object.assign({},J,t))}}]),n}();export{N as default};

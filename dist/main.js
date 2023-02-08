(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,":root{\n    --lightest-color: rgb(229, 241, 241);\n    --hover-color: rgb(200, 228, 228);\n    --header-color: rgb(124, 104, 196);\n}\n\nbody, html{\n    margin:0px;\n    height:100%;\n    background-color: rgb(65, 65, 85);\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    background-color: var(--lightest-color);\n    margin: 30px 60px;\n    height:90%;\n}\n\n.header{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--header-color);\n    height: 50px;\n    width: 100%;\n    }\n\n.header img{\n    width: 30px;\n    height:auto;\n    margin-top: 4px;\n    margin-right: 15px;\n    }\n\n.header>h1>img{\n    width:35px;\n    height:30px;\n}\n\nbutton{\n    background-color: transparent;\n    border:none;\n    padding: 0px;\n    margin:0px;\n    display:flex;\n    justify-content: flex-start;\n    align-items: center;\n    }\n\nbutton:hover{\n    cursor:grab;\n}\n\n.main{\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    width: 100%;\n    height: 100%;\n    color:var(--header-color);\n}\n\n.side-menu{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    background-color: var(--lightest-color);\n    border-right: 2px solid;\n    border-color: var(--header-color);\n    width: 20%;\n    height:100%;\n    padding: 0px 10px 0px 10px;\n}\n\n.side-menu>div, .side-menu li{\n    border-radius: 5px;\n     }\n\n.side-menu>div:hover, .side-menu li:hover{\n    background-color: var(--hover-color);\n}\n\nul{\n    list-style: none;\n}\n\nli{\n    padding-left:5px;\n}\n\n.all-tasks-line, .project-line{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width:100%;\n    margin-top:10px;\n}\n\n.side-menu img{\n    width:35px;\n    height:auto;\n    margin-right:5px;\n    padding:0px;\n}\n    \n.side-menu>div>button>img:hover{\n    transform: rotate(360deg) scale(1.2);\n    transition: 0.5s;\n}\n\n.all-tasks-menu img{\n    width:20px;\n    height:20px;\n    margin-right:10px;\n    margin-bottom: 3px;\n}\n   \nh1{\n    color: var(--lightest-color);\n    margin-left:15px;\n}\n\nh2{\n    margin-left: 7px;\n}\n\nh3{\n    font-weight: 500;\n}\n\nhr{\n    color: var(--header-color);\n    width:99%;\n    margin: 0px;\n}\n\n.task-display{\n    height:100%;\n}",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.nc=void 0,(()=>{var n={};t.r(n);var e=t(379),r=t.n(e),o=t(795),a=t.n(o),i=t(569),s=t.n(i),c=t(565),l=t.n(c),d=t(216),p=t.n(d),u=t(589),f=t.n(u),h=t(426),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),r()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals,function(n){console.log(n[0]);for(let e=0;e<n.length;e++)for(prop in n[e])console.log(n[e][prop])}(n.default)})()})();
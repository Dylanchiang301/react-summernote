!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=12)}({0:function(e,t){e.exports=$},12:function(e,t,n){var o,r,l;r=[n(0)],void 0===(l="function"==typeof(o=function(e){e.extend(!0,e.summernote.lang,{"zh-TW":{template:{template:"模版",insert:"插入模版"}},"en-US":{template:{template:"Template",insert:"Insert Template"}}}),e.extend(e.summernote.options,{template:{}}),e.extend(e.summernote.plugins,{template:function(t){var n=e.summernote.ui,o=t.options.langInfo.template,r=t.options.template,l={label:o.template,tooltip:o.insert,list:{}};for(var a in l)!1===r.hasOwnProperty(a)&&(r[a]=l[a]);t.memo("button.template",(function(){return n.buttonGroup([n.button({className:"dropdown-toggle",contents:'<span class="template"/> '+r.label+' <span class="caret"></span>',tooltip:r.tooltip,data:{toggle:"dropdown"}}),n.dropdown({className:"dropdown-template",items:Object.keys(r.list),click:function(n){n.preventDefault();var o=e(n.target).data("value"),l=r.list[o].get(0);t.invoke("editor.insertNode",l)}})]).render()}))}})})?o.apply(t,r):o)||(e.exports=l)}});
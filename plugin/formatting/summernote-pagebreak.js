!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=9)}({0:function(e,t){e.exports=$},9:function(e,t,n){var o,a,r;a=[n(0)],void 0===(r="function"==typeof(o=function(e){e.extend(!0,e.summernote.lang,{"en-US":{pagebreak:{tooltip:"Page Break"}},"zh-TW":{pagebreak:{tooltip:"分頁符號"}}}),e.extend(e.summernote.options,{pagebreak:{icon:'<i class="note-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path d="M 4,5.5 4,1 l 9,0 0,4.5 -0.750612,0 0,-3.74939 -7.498776,0 0,3.75061 L 4,5.50122 Z M 13,7.75061 13,13 4,13 4,7.75061 l 0.750612,0 0,4.5 7.5,0 0,-4.5 0.749388,0 z m -6,-1.5 1.5,0 L 8.5,7 7,7 7,6.25061 Z m -2.249388,0 1.5,0 0,0.74939 -1.5,0 0,-0.74939 z m 4.5,0 1.5,0 0,0.74939 -1.5,0 0,-0.74939 z m 2.249388,0 1.5,0 L 13,7 11.5,7 11.5,6.25061 Z M 1,4.37469 3.250612,6.62531 1,8.87469 l 0,-4.5 z"/></svg></i>',css:'@media all{.note-editable .page-break{position:relative;display:block;width:100%;height:1px;background-color:#ddd;margin:15px 0;}.note-editable .page-break:after{content:"Page-Break";position:absolute;width:100%;height:20px;top:-10px;color:#ddd;-webkit-text-shadow:0 0 5px #fff,0 0 5px #fff,0 0 5px #fff,0 0 5px #fff;-moz-text-shadow:0 0 5px #fff,0 0 5px #fff,0 0 5px #fff,0 0 5px #fff;text-shadow:0 0 5px #fff,0 0 5px #fff,0 0 5px #fff,0 0 5px #fff;text-align:center;}}@media print{.note-editable .page-break{display:block;page-break-before:always;}}'}}),e.extend(e.summernote.plugins,{pagebreak:function(t){var n=e.summernote.ui,o=t.options,a=o.langInfo,r=t.layoutInfo.editable,i=this;0==e("#summernote-pagebreak-style").length&&(this.css=e("<style>").html(o.pagebreak.css),this.css.attr("id","summernote-pagebreak-style"),e("head").append(this.css)),this.wrapCommand=function(e){return function(){t.invoke("beforeCommand"),e.apply(this,arguments),t.invoke("afterCommand")}},this.destroy=function(){this.css&&e(this.css).remove()},t.memo("button.pagebreak",(function(){return n.button({contents:o.pagebreak.icon,tooltip:a.pagebreak.tooltip,container:"body",click:i.wrapCommand((function(t){if(t.preventDefault(),getSelection().rangeCount>0){var n=getSelection().getRangeAt(0).commonAncestorContainer.parentNode;e(n).hasClass("note-editable")&&(n=getSelection().getRangeAt(0).commonAncestorContainer),e(n).hasClass("page-break")||e(n).next("div.page-break").length<1&&e('<div class="page-break"></div><p><br></p>').insertAfter(n)}else"page-break"!==r.find("div").last().attr("class")&&r.append('<div class="page-break"></div><p><br></p>')}))}).render()}))}})})?o.apply(t,a):o)||(e.exports=r)}});
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}([function(e,t){e.exports=$},,,,function(e,t,n){var o,s,a;s=[n(0)],void 0===(a="function"==typeof(o=function(e){e.extend(!0,e.summernote.lang,{"zh-TW":{addClass:{style:"套用 CSS class"}},"en-US":{addClass:{style:"toggle CSS class"}}}),e.extend(e.summernote.plugins,{addclass:function(t){var n=this;void 0===t.options.addclass&&(t.options.addclass={}),void 0===t.options.addclass.classTags&&(t.options.addclass.classTags=["jumbotron","lead","img-rounded","img-circle","img-responsive","btn","btn btn-success","btn btn-danger","text-muted","text-primary","text-warning","text-danger","text-success","table-bordered","table-responsive","alert","alert alert-success","alert alert-info","alert alert-warning","alert alert-danger","visible-sm","hidden-xs","hidden-md","hidden-lg","hidden-print"]);var o=e.summernote.ui;this.wrapCommand=function(e){return function(){t.invoke("beforeCommand"),e.apply(this,arguments),t.invoke("afterCommand")}};var s=t.options.langInfo;t.memo("button.addclass",(function(){return o.buttonGroup([o.button({className:"dropdown-toggle",contents:'<i class="text-primary">CSS3</i>',tooltip:s.addClass.style,data:{toggle:"dropdown"}}),o.dropdown({className:"dropdown-style scrollable-menu",items:t.options.addclass.classTags,template:function(e){"string"==typeof e&&(e={tag:"div",title:e,value:e});var t=e.tag,n=e.title;return"<"+t+" "+(e.style?' style="'+e.style+'" ':"")+(e.value?' class="'+e.value+'" ':"")+">"+n+"</"+t+">"},click:n.wrapCommand((function(n,o,s){n.preventDefault(),s=s||e(n.target).closest("[data-value]").data("value");var a=e(t.invoke("restoreTarget"));0==a.length&&(a=e(document.getSelection().focusNode.parentElement,".note-editable")),void 0!==t.options.addclass&&void 0!==t.options.addclass.debug&&t.options.addclass.debug&&console.debug(t.invoke("restoreTarget"),a,"toggling class: "+s,window.getSelection()),a.toggleClass(s)}))})]).render()})),this.events={"summernote.init":function(e,t){},"summernote.keyup":function(e,t){}},this.initialize=function(){var t,n,o;0==e("#summernote-addClass-style").length&&(this.css=(t=".scrollable-menu {height: auto; max-height: 200px; max-width:300px; overflow-x: hidden;}",n="summernote-addClass-style",(o=document.createElement("style")).innerHTML=t,o.setAttribute("id",n),document.head.appendChild(o),o))},this.destroy=function(){this.css&&e(this.css).remove()}}})})?o.apply(t,s):o)||(e.exports=a)}]);
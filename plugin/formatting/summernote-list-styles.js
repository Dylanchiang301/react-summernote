!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=10)}({0:function(e,t){e.exports=$},10:function(e,t,n){var o,l,i;l=[n(0)],void 0===(i="function"==typeof(o=function(e){e.extend(!0,e.summernote.lang,{"en-US":{listStyleTypes:{tooltip:"List Styles",labelsListStyleTypes:["Numbered","Lower Alpha","Upper Alpha","Lower Roman","Upper Roman","Disc","Circle","Square"]}},"zh-TW":{listStyleTypes:{tooltip:"清單樣式",labelsListStyleTypes:["數字","小寫字母","大寫字母","小寫羅馬數字","大寫羅馬數字","實心圓形","空心圓形","實心方形"]}}}),e.extend(e.summernote.options,{listStyleTypes:{styles:["decimal","lower-alpha","upper-alpha","lower-roman","upper-roman","disc","circle","square"]}}),e.extend(e.summernote.plugins,{listStyles:function(t){for(var n=this,o=e.summernote.ui,l=t.options,i=l.langInfo,s=l.listStyleTypes.styles,r=i.listStyleTypes.labelsListStyleTypes,a=t.modules,u="",c=0;c<s.length;c++)u+='<li><div class="list-style-item" data-value='+s[c]+">",u+='<i class="note-icon-menu-check float-left"></i>',u+='<ol><li style="list-style-type: '+s[c]+';">',u+=r[c]+"</li></ol></div></li>";t.memo("button.listStyles",(function(){return o.buttonGroup([o.button({className:"dropdown-toggle list-styles more",contents:"",tooltip:i.listStyleTypes.tooltip,data:{toggle:"dropdown"},callback:function(e){e.click((function(t){t.preventDefault(),n.updateListStyleMenuState(e)}))}}),o.dropdownCheck({className:"dropdown-list-styles",checkClassName:l.icons.menuCheck,contents:u,callback:function(t){t.find("div").each((function(){e(this).click((function(t){t.preventDefault(),n.updateStyleType(e(this).data("value"))}))}))}})]).render()})),n.updateListStyleMenuState=function(o){t.invoke("editor.saveRange");var l=n.getParentList(),i=!!l&&l.css("list-style-type"),s=o.next().find("div"),r=!1;s.each((function(){var t=e(this).data("value");i==t?(e(this).addClass("checked"),r=!0):e(this).removeClass("checked"),r||s.filter('[data-value=""]').addClass("checked")}))},n.updateStyleType=function(e){t.invoke("editor.restoreRange"),t.invoke("editor.focus"),t.invoke("beforeCommand"),n.getParentList().css("list-style-type",e),t.invoke("afterCommand")},n.getParentList=function(n){var o=e.summernote.dom,l=a.editor.getLastRange.call(a.editor);return l.commonAncestor(),o.ancestor(l.commonAncestor(),o.isList)||t.invoke("insertOrderedList"),window.getSelection?e(window.getSelection().focusNode).closest("div.note-editable ol, div.note-editable ul"):null},this.events={"summernote.init":function(t,n){var o=e.summernote.range;n.toolbar.on("mouseup",".note-btn",(function(t){e(t.currentTarget).find(".note-icon-unorderedlist, .note-icon-orderedlist").length&&setTimeout((function(){var t=o.create();e(t.sc).closest("ul,ol").css("list-style-type","")}),10)}))}}}})})?o.apply(t,l):o)||(e.exports=i)}});
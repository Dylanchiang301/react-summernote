!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o(o.s=1)}([function(t,e){t.exports=$},function(t,e,o){var n,r,i;function l(){l=function(t,e){return new o(t,void 0,e)};var t=RegExp.prototype,e=new WeakMap;function o(t,n,r){var i=new RegExp(t,n);return e.set(i,r||e.get(t)),c(i,o.prototype)}function n(t,o){var n=e.get(o);return Object.keys(n).reduce((function(e,o){var r=n[o];if("number"==typeof r)e[o]=t[r];else{for(var i=0;void 0===t[r[i]]&&i+1<r.length;)i++;e[o]=t[r[i]]}return e}),Object.create(null))}return a(o,RegExp),o.prototype.exec=function(e){var o=t.exec.call(this,e);if(o){o.groups=n(o,this);var r=o.indices;r&&(r.groups=n(r,this))}return o},o.prototype[Symbol.replace]=function(o,r){if("string"==typeof r){var i=e.get(this);return t[Symbol.replace].call(this,o,r.replace(/\$<([^>]+)>/g,(function(t,e){var o=i[e];return"$"+(Array.isArray(o)?o.join("$"):o)})))}if("function"==typeof r){var l=this;return t[Symbol.replace].call(this,o,(function(){var t=arguments;return"object"!=s(t[t.length-1])&&(t=[].slice.call(t)).push(n(t,l)),r.apply(this,t)}))}return t[Symbol.replace].call(this,o,r)},l.apply(this,arguments)}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}function c(t,e){return(c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r=[o(0)],void 0===(i="function"==typeof(n=function(t){t.extend(t.summernote.options,{commentPopover:{className:null,urlPattern:null,titleMaxLength:100,contentMaxLength:100}}),t.extend(t.summernote.plugins,{commentPopover:function(e){var o=t.summernote.range,n=t.summernote.dom,r=t.summernote.lists,i=this,a=t.summernote.ui,c=(e.layoutInfo.note,e.layoutInfo.editor,e.layoutInfo.editable),s=(e.layoutInfo.toolbar,e.layoutInfo.statusbar,e.modules,e.options),m=s.langInfo,d=s.commentPopover.titleMaxLength,u=s.commentPopover.contentMaxLength,p=s.commentPopover.className||"summernote-comment-popover",f=s.commentPopover.urlPattern||/https?:\/\/(?:[\w\u00a1-\uffff]+\.?)+(?::\d{2,5})?(?:\/[^\s]*)?/;this.events={"summernote.init":function(t,e){e.editor.one("mouseenter",(function(t){e.editingArea.find("a.".concat(p)).popover()}))}},this.initialize=function(){0==t("#summernote-comment-popover").length&&(this.css=t("<style>").html(".summernote-comment-popover:not([href]){color: #8ac193;}.summernote-comment-popover:not([href]):hover{color: #8ac193; text-decoration: underline}"),this.css.attr("id","summernote-comment-popover"),t(document.head).append(this.css));var e=d?'maxlength="'.concat(d,'"'):"",o=u?'maxlength="'.concat(u,'"'):"";this.$dialog=a.dialog({title:"".concat(m.commentPopover.addPopover),className:"summernote-comment-popover-dialog",fade:s.dialogsFade,body:['<div class="form-group summernote-comment-popover-form-group">','<label for="summernote-comment-popover-image-url-'.concat(s.id,'" class="note-form-label" >').concat(m.commentPopover.imgurl,"</label>"),'<input id="summernote-comment-popover-image-url-'.concat(s.id,'" class="summernote-comment-popover-image-url form-control note-form-control note-input" type="url" pattern="').concat(f.source,'" />'),'<div class="invalid-feedback">'.concat(m.commentPopover.invalidUrl,"</div>"),"</div>",'<div class="form-group summernote-comment-popover-form-group">','<label for="summernote-comment-popover-title-text-'.concat(s.id,'" class="note-form-label" >').concat(m.commentPopover.title,"</label>"),"<input ".concat(e,' id="summernote-comment-popover-title-text-').concat(s.id,'" class="summernote-comment-popover-title-text form-control note-form-control note-input" type="text" />'),'<div class="invalid-feedback">'.concat(m.commentPopover.invalidContent,"</div>"),"</div>",'<div class="form-group summernote-comment-popover-form-group">','<label for="summernote-comment-popover-content-text-'.concat(s.id,'" class="note-form-label" >').concat(m.commentPopover.content,"</label>"),"<textarea ".concat(o,' id="summernote-comment-popover-content-text-').concat(s.id,'" class="summernote-comment-popover-content-text form-control note-form-control note-input" rows="3"></textarea>'),'<div class="invalid-feedback">'.concat(m.commentPopover.invalidContent,"</div>"),"</div>"].join(""),footer:'<button href="#" class="btn btn-primary summernote-comment-popover-btn">'.concat(m.commentPopover.ok,"</button>")}).render().appendTo(s.container),this.$dialog.find(".modal-body").addClass("summernote-comment-popover-form-container")},this.destroy=function(){this.css&&t(this.css).remove(),a.hideDialog(this.$dialog),this.$dialog.remove()},this.wrapCommand=function(t){return function(){e.invoke("beforeCommand"),t.apply(this,arguments),e.invoke("afterCommand")}},e.memo("button.editPopover",(function(){return a.button({contents:'<i class="note-icon">'.concat('<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n                <path stroke="#000000" fill="#000000" d="m0.93829,4.45171l0,0c0,-1.05081 0.81745,-1.90267 1.82583,-1.90267l0.82992,0l0,0l3.98362,0l7.46929,0c0.48424,0 0.94865,0.20046 1.29106,0.55728c0.34241,0.35682 0.53477,0.84077 0.53477,1.34538l0,4.16198c-4.84747,-0.45484 -6.47103,1.94658 -6.43542,5.20509l-1.18444,0.08376l-3.66816,1.76357l0.10921,-1.67617l-2.92985,-0.0249c-1.00838,0 -1.82583,-0.85185 -1.82583,-1.90267l0,0l0,-2.854l0,0l0,-4.75666l0,0.00001z" id="svg_1"/>\n                <path stroke="#000000" fill="#000000" d="m0.93829,4.45171l0,0c0,-1.05081 0.81745,-1.90267 1.82583,-1.90267l0.82992,0l0,0l3.98362,0l7.46929,0c0.48424,0 0.94865,0.20046 1.29106,0.55728c0.34241,0.35682 0.53477,0.84077 0.53477,1.34538l0,4.16198c-4.84747,-0.45484 -6.47103,1.94658 -6.43542,5.20509l-1.18444,0.08376l-4.39442,1.8753l0.83547,-1.7879l-2.92985,-0.0249c-1.00838,0 -1.82583,-0.85185 -1.82583,-1.90267l0,0l0,-2.854l0,0l0,-4.75666l0,0.00001z" id="svg_1"/>\n                <rect fill="#ffffff" x="2.85232" y="10.54749" width="6" height="1.40909" id="svg_9" stroke="null"/>\n                <rect fill="#ffffff" x="2.85232" y="4.54749" width="12" height="1.40909" id="svg_11" stroke="null"/>\n                <rect fill="#ffffff" x="2.85232" y="7.54749" width="9.70833" height="1.40909" id="svg_12" stroke="null"/>\n                <path stroke="null" id="svg_2" d="m12.12231,13.33447l2.54791,0l0,-2.54791l2.61367,0l0,2.54791l2.54791,0l0,2.61367l-2.54791,0l0,2.54791l-2.61367,0l0,-2.54791l-2.54791,0l0,-2.61367z" fill="#000000"/>\n            </svg>',"</i>"),tooltip:m.commentPopover.addPopover,click:function(){i.showDialog()}}).render()})),e.memo("button.removePopover",(function(){return a.button({contents:'<i class="note-icon">'.concat('<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n                <path stroke="#000000" fill="#000000" d="m0.93829,4.45171l0,0c0,-1.05081 0.81745,-1.90267 1.82583,-1.90267l0.82992,0l0,0l3.98362,0l7.46929,0c0.48424,0 0.94865,0.20046 1.29106,0.55728c0.34241,0.35682 0.53477,0.84077 0.53477,1.34538l0,4.16198c-4.84747,-0.45484 -6.47103,1.94658 -6.43542,5.20509l-1.18444,0.08376l-4.39442,1.8753l0.83547,-1.7879l-2.92985,-0.0249c-1.00838,0 -1.82583,-0.85185 -1.82583,-1.90267l0,0l0,-2.854l0,0l0,-4.75666l0,0.00001z" id="svg_1"/>\n                <rect fill="#ffffff" x="2.85232" y="10.54749" width="6" height="1.40909" id="svg_9" stroke="null"/>\n                <rect fill="#ffffff" x="2.85232" y="4.54749" width="12" height="1.40909" id="svg_11" stroke="null"/>\n                <rect fill="#ffffff" x="2.85232" y="7.54749" width="9.70833" height="1.40909" id="svg_12" stroke="null"/>\n                <path stroke="null" id="svg_3" d="m12.45892,12.36059l1.80144,-1.80144l1.91364,1.91362l1.91364,-1.91362l1.80145,1.80144l-1.91364,1.91364l1.91364,1.91364l-1.80145,1.80145l-1.91364,-1.91364l-1.91364,1.91364l-1.80144,-1.80145l1.91362,-1.91364l-1.91362,-1.91364z" fill="#000000"/>\n            </svg>',"</i>"),tooltip:m.commentPopover.removePopover,click:function(){i.wrapCommand(i.removePopover())}}).render()})),this.showDialog=function(){o.create().select(),e.invoke("editor.setLastRange"),a.showDialog(i.$dialog);var n=i.$dialog.find(".modal-footer .summernote-comment-popover-btn");n.on("click",(function(t){t.preventDefault();var e=i.$dialog.find(".modal-body .summernote-comment-popover-image-url"),o=i.$dialog.find(".modal-body .summernote-comment-popover-title-text"),n=i.$dialog.find(".modal-body .summernote-comment-popover-content-text"),r=o.val(),l=n.val(),c=e.val(),s=!1;if(e[0].checkValidity()||(e.addClass("is-invalid"),s=!0,e.one("keydown change",(function(t){e.removeClass("is-invalid")}))),!r&&!l){s=!0;var m=i.$dialog.find(".modal-body").find(".summernote-comment-popover-title-text, .summernote-comment-popover-content-text");m.addClass("is-invalid"),m.one("keydown change",(function(t){m.removeClass("is-invalid"),m.off()}))}s||(a.hideDialog(i.$dialog),i.wrapCommand(i.addPopover(r,l,c)))}));var r=i.$dialog.find(".modal-body .summernote-comment-popover-content-text");r.on("paste",(function(e){var o=this;setTimeout((function(){t(o).val(t(o).val().replace(/[\r\n\v]+/g,""))}),1)})),r.on("keyup keypress",(function(t){13===t.keyCode&&t.preventDefault()})),a.onDialogShown(i.$dialog,(function(){var t=i.$dialog.find(".modal-body .summernote-comment-popover-image-url"),e=i.$dialog.find(".modal-body .summernote-comment-popover-title-text"),o=i.$dialog.find(".modal-body .summernote-comment-popover-content-text"),n=i.currentPopover();if(n){var r=n.attr("data-title"),l=i.decodeString(r);e.val(l);var a=n.attr("data-content"),c=i.getAttrContentText(a);o.val(c);var s=i.getAttrContentImg(a);t.val(s)}})),a.onDialogHidden(i.$dialog,(function(){e.invoke("editor.restoreRange"),n.off(),r.off()}))},this.encodeString=function(t){return t.replace(/[\u00A0-\u9999<>\&'"\/]/g,(function(t){return"&#"+t.charCodeAt(0)+";"}))},this.decodeString=function(t){return t.replace(/&#([0-9]+);/g,(function(t,e){return String.fromCharCode(parseInt(e))}))},this.getAttrContentText=function(t){var e,o;return this.decodeString(null===(e=t.match(l(/<div class="popover\x2Dcontent">(.*)<\/div>/,{content:1})))||void 0===e||null===(o=e.groups)||void 0===o?void 0:o.content)},this.getAttrContentImg=function(t){var e,o;return null===(e=t.match(l(/<img class="img\x2Dfluid popover\x2Dimage" src="(.*)" \/>/,{src:1})))||void 0===e||null===(o=e.groups)||void 0===o?void 0:o.src},this.formatAttrContent=function(t,e){var o=this.encodeString(t),n='<div class="popover-content">'.concat(o,"</div>");return f.test(e)&&(n='<img class="img-fluid popover-image" src="'.concat(e,'" />')+n),n},this.isEndInChild=function(t,e){for(;t;){if(t===e)return!0;t=t.nextSibling?t.nextSibling:t.firstChild}return!1},this.walkNodes=function(t,e,o){for(var n=t;n&&!o(n)&&n!==e&&!this.isEndInChild(n.firstChild,e);)n=n.nextSibling?n.nextSibling:n.parentNode},this.currentPopover=function(){var o=e.invoke("editor.getLastRange"),r=o.getEndPoint(),i=o.getStartPoint().node,l=r.node,a=null;return this.walkNodes(i,l,(function(e){var o=function(e){return n.isAnchor(e)&&t(e).hasClass(p)};return n.ancestor(e,o)?(a=t(n.ancestor(e,o)),!0):o(e)?(a=t(e),!0):!!t(e).find("a.".concat(p)).length&&(a=t(e).find("a.".concat(p)),!0)})),a},this.addPopover=function(i,l,a){var c=e.invoke("editor.getLastRange");if(c.isOnEditable()){var s=this.currentPopover();if(s){var m=this.encodeString(i),d=this.formatAttrContent(l,a);s.attr("data-title",m).attr("data-content",d)}else if(!c.isCollapsed()){if(c.isOnAnchor())var u=t(n.ancestor(c.sc,n.isAnchor));else{var f=(c=c.splitText()).getEndPoint(),v=c.getStartPoint().node,g=f.node,h=[];v=n.singleChildAncestor(v,n.isElement)||v,g=n.singleChildAncestor(g,n.isElement)||g;var y=!1;if(this.walkNodes(v,g,(function(t){if(n.isPurePara(t))h.push(t);else{if(!n.isInline(t))return y=!0,!0;h.push(t)}})),y)return;h=r.unique(h),(u=t(h)).wrapAll("<a>"),u=u.parent()}u.addClass(p).attr("tabindex","0").attr("data-toggle","popover").attr("data-html","true").attr("data-trigger","hover"),d=this.formatAttrContent(l,a),m=this.encodeString(i),u.attr("data-title",m).attr("data-content",d),u.popover(),c=o.createFromNode(u[0]),e.invoke("editor.setLastRange"),c.select()}}},this.removePopover=function(){var t=e.invoke("editor.getLastRange"),r=this.currentPopover();if(r&&r.length)if(r.popover("dispose"),r.attr("href")||r.attr("target"))r.removeClass(p).removeAttr("tabindex").removeAttr("data-toggle").removeAttr("data-trigger").removeAttr("data-title").removeAttr("data-content"),t=o.createFromNode(r[0]),e.invoke("editor.setLastRange",t),t.select();else{var i=r.contents();i.unwrap("a.".concat(p)),(t=e.invoke("editor.createRangeFromList",i)).select(),(n.ancestor(t.commonAncestor(),n.isElement)||c[0]).normalize(),t=o.create(),e.invoke("editor.setLastRange"),t.select()}}}}),t.extend(!0,t.summernote.lang,{"zh-TW":{commentPopover:{addPopover:"新增註解",removePopover:"刪除註解",imgurl:"圖片連結",title:"標題",content:"內容",ok:"確認",invalidUrl:"無效的連結",invalidContent:"無標題和內容"}},"en-US":{commentPopover:{addPopover:"Add Comment",removePopover:"Remove Comment",imgurl:"Image URL",title:"Title",content:"Content",ok:"OK",invalidUrl:"Invalid Url",invalidContent:"Invalid Title and Content"}}})})?n.apply(e,r):n)||(t.exports=i)}]);
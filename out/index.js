!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("MyLib",[],t):"object"==typeof exports?exports.MyLib=t():e.MyLib=t()}(self,(()=>(()=>{"use strict";var e={114:(e,t)=>{function r(e,t,r){e.width=t,e.height=r,e.style.width="".concat(t,"px"),e.style.height="".concat(r,"px")}Object.defineProperty(t,"__esModule",{value:!0}),t.canvas_fullscreen=t.canvas_create=t.canvas_resize=void 0,t.canvas_resize=r,t.canvas_create=function(e,t){void 0===e&&(e=300),void 0===t&&(t=150);var n=document.createElement("canvas");return r(n,e,t),n},t.canvas_fullscreen=function(e){window.onresize=function(){return r(e,document.body.clientWidth,document.body.clientHeight)},r(e,document.body.clientWidth,document.body.clientHeight)}},151:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.context_get_webgl2=void 0,t.context_get_webgl2=function(e){var t=e.getContext("webgl2");if(!t)throw new Error;return t}},524:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(114),t),o(r(151),t),o(r(675),t),o(r(522),t),o(r(69),t)},675:function(e,t){var r=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function c(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}u((n=n.apply(e,t||[])).next())}))},n=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,n=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}};function o(e){return r(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return[4,fetch(e)];case 1:return[4,t.sent().text()];case 2:return[2,t.sent()]}}))}))}function i(e,t,r){var n=e.createShader(r);if(!n)throw new Error("Could not create shader of type: ".concat(r));if(e.shaderSource(n,t),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS))throw new Error("".concat(e.getShaderInfoLog(n)));return n}Object.defineProperty(t,"__esModule",{value:!0}),t.program_uniform_location=t.program_create=void 0,t.program_create=function(e,t,a){return r(this,void 0,void 0,(function(){var r,c,u,f,l;return n(this,(function(n){switch(n.label){case 0:if(!(r=e.createProgram()))throw new Error("Could not create shader program");return[4,o(t)];case 1:return c=n.sent(),[4,o(a)];case 2:if(u=n.sent(),f=i(e,c,e.VERTEX_SHADER),l=i(e,u,e.FRAGMENT_SHADER),e.attachShader(r,f),e.attachShader(r,l),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw new Error("".concat(e.getProgramInfoLog(r)));return e.deleteShader(f),e.deleteShader(l),[2,r]}}))}))},t.program_uniform_location=function(e,t,r){var n=e.getUniformLocation(t,r);if(!n)throw new Error("Could not find uniform location for name: ".concat(r));return n}},522:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.vao_create=void 0,t.vao_create=function(e,t,r,n){var o=e.createVertexArray();if(!o)throw new Error("Could not create vertex array object");return e.bindVertexArray(o),e.useProgram(t),n.forEach((function(n){var o=n.buffer_index,i=n.location,a=n.size,c=n.stride,u=n.offset;e.bindBuffer(r[o][0],r[o][1]);var f=e.getAttribLocation(t,i);e.vertexAttribPointer(f,a,e.FLOAT,!1,c,u),e.enableVertexAttribArray(f)})),r.filter((function(t){return t[0]===e.ELEMENT_ARRAY_BUFFER})).forEach((function(t){e.bindBuffer(t[0],t[1])})),e.bindVertexArray(null),o}},69:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.vbo_create=void 0,t.vbo_create=function(e,t,r,n){void 0===n&&(n=WebGLRenderingContext.STATIC_DRAW);var o=e.createBuffer();if(!o)throw new Error("Could not create buffer");return e.bindBuffer(t,o),e.bufferData(t,r,n),[t,o]}},156:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(524),t),o(r(639),t)},639:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(880),t)},880:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})}},t={};return function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}(156)})()));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVNnRixHQUdwRS9FLEVBQU9ELE9BQ2YsQ0NuQjBCZ0YsQ0FBb0IsSSIsInNvdXJjZXMiOlsid2VicGFjazovL015TGliL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9ncmFwaGljcy9jYW52YXMudHMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvZ3JhcGhpY3MvY29udGV4dC50cyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9ncmFwaGljcy9pbmRleC50cyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9ncmFwaGljcy9zaGFkZXIudHMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvZ3JhcGhpY3MvdmFvLnRzIiwid2VicGFjazovL015TGliLy4vc3JjL2dyYXBoaWNzL3Ziby50cyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9tYXRoL2luZGV4LnRzIiwid2VicGFjazovL015TGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL015TGliL3dlYnBhY2svc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIk15TGliXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk15TGliXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk15TGliXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsImV4cG9ydCBmdW5jdGlvbiBjYW52YXNfcmVzaXplKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICBjYW52YXMuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW52YXNfY3JlYXRlKHdpZHRoOiBudW1iZXIgPSAzMDAsIGhlaWdodDogbnVtYmVyID0gMTUwKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzX3Jlc2l6ZShjYW52YXMsIHdpZHRoLCBoZWlnaHQpO1xuICAgIHJldHVybiBjYW52YXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW52YXNfZnVsbHNjcmVlbihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4gY2FudmFzX3Jlc2l6ZShjYW52YXMsIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KTtcbiAgICBjYW52YXNfcmVzaXplKGNhbnZhcywgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbnRleHRfZ2V0X3dlYmdsMihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCB7XG4gICAgY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsMlwiKTtcbiAgICBpZiAoIWdsKSB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICByZXR1cm4gZ2w7XG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9jYW52YXNcIlxuZXhwb3J0ICogZnJvbSBcIi4vY29udGV4dFwiXG5leHBvcnQgKiBmcm9tIFwiLi9zaGFkZXJcIlxuZXhwb3J0ICogZnJvbSBcIi4vdmFvXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Zib1wiIiwidHlwZSBTaGFkZXJUeXBlID0gV2ViR0xSZW5kZXJpbmdDb250ZXh0W1wiVkVSVEVYX1NIQURFUlwiXSB8IFdlYkdMUmVuZGVyaW5nQ29udGV4dFtcIkZSQUdNRU5UX1NIQURFUlwiXTtcblxuYXN5bmMgZnVuY3Rpb24gbG9hZF9maWxlKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIHJldHVybiBhd2FpdCByZXMudGV4dCgpO1xufVxuXG5mdW5jdGlvbiBzaGFkZXJfY29tcGlsZV9mcm9tX3NvdXJjZShcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuICAgIHNvdXJjZTogc3RyaW5nLFxuICAgIHR5cGU6IFNoYWRlclR5cGVcbik6IFdlYkdMU2hhZGVyIHtcbiAgICBjb25zdCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7XG4gICAgaWYgKCFzaGFkZXIpIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGNyZWF0ZSBzaGFkZXIgb2YgdHlwZTogJHt0eXBlfWApO1xuXG4gICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcbiAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkgdGhyb3cgbmV3IEVycm9yKGAke2dsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKX1gKTtcbiAgICByZXR1cm4gc2hhZGVyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvZ3JhbV9jcmVhdGUoXG4gICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCxcbiAgICB2ZXJ0ZXhfc291cmNlX3VybDogc3RyaW5nLFxuICAgIGZyYWdtZW50X3NvdXJjZV91cmw6IHN0cmluZ1xuKTogUHJvbWlzZTxXZWJHTFByb2dyYW0+IHtcbiAgICBjb25zdCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICAgIGlmICghcHJvZ3JhbSkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBzaGFkZXIgcHJvZ3JhbVwiKTtcbiAgICBjb25zdCB2ZXJ0ZXhfc291cmNlID0gYXdhaXQgbG9hZF9maWxlKHZlcnRleF9zb3VyY2VfdXJsKTtcbiAgICBjb25zdCBmcmFnbWVudF9zb3VyY2UgPSBhd2FpdCBsb2FkX2ZpbGUoZnJhZ21lbnRfc291cmNlX3VybCk7XG4gICAgY29uc3QgdmVydGV4X3NoYWRlciA9IHNoYWRlcl9jb21waWxlX2Zyb21fc291cmNlKGdsLCB2ZXJ0ZXhfc291cmNlLCBnbC5WRVJURVhfU0hBREVSKTtcbiAgICBjb25zdCBmcmFnbWVudF9zaGFkZXIgPSBzaGFkZXJfY29tcGlsZV9mcm9tX3NvdXJjZShnbCwgZnJhZ21lbnRfc291cmNlLCBnbC5GUkFHTUVOVF9TSEFERVIpO1xuXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleF9zaGFkZXIpO1xuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudF9zaGFkZXIpO1xuICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Z2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSl9YCk7XG4gICAgfVxuXG4gICAgZ2wuZGVsZXRlU2hhZGVyKHZlcnRleF9zaGFkZXIpO1xuICAgIGdsLmRlbGV0ZVNoYWRlcihmcmFnbWVudF9zaGFkZXIpO1xuICAgIHJldHVybiBwcm9ncmFtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvZ3JhbV91bmlmb3JtX2xvY2F0aW9uKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIHByb2dyYW06IFdlYkdMUHJvZ3JhbSwgbmFtZTogc3RyaW5nKTogV2ViR0xVbmlmb3JtTG9jYXRpb24ge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpO1xuICAgIGlmICghbG9jYXRpb24pIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgdW5pZm9ybSBsb2NhdGlvbiBmb3IgbmFtZTogJHtuYW1lfWApO1xuICAgIHJldHVybiBsb2NhdGlvbjtcbn1cbiIsImltcG9ydCB7IFRhcmdldCB9IGZyb20gXCIuL3Zib1wiO1xuXG5leHBvcnQgdHlwZSBBdHRyaWJ1dGUgPSB7XG4gICAgbG9jYXRpb246IHN0cmluZ1xuICAgIHNpemU6IG51bWJlclxuICAgIHN0cmlkZTogbnVtYmVyXG4gICAgb2Zmc2V0OiBudW1iZXJcbiAgICBidWZmZXJfaW5kZXg6IG51bWJlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFvX2NyZWF0ZShcbiAgICBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcbiAgICBwcm9ncmFtOiBXZWJHTFByb2dyYW0sXG4gICAgdmJvczogW1RhcmdldCwgV2ViR0xCdWZmZXJdW10sXG4gICAgYXR0cmlidXRlczogQXR0cmlidXRlW11cbik6IFdlYkdMVmVydGV4QXJyYXlPYmplY3Qge1xuICAgIGNvbnN0IHZhbyA9IGdsLmNyZWF0ZVZlcnRleEFycmF5KCk7XG4gICAgaWYgKCF2YW8pIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgdmVydGV4IGFycmF5IG9iamVjdFwiKTtcbiAgICBnbC5iaW5kVmVydGV4QXJyYXkodmFvKTtcbiAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKCh7IGJ1ZmZlcl9pbmRleCwgbG9jYXRpb24sIHNpemUsIHN0cmlkZSwgb2Zmc2V0IH0pID0+IHtcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcih2Ym9zW2J1ZmZlcl9pbmRleF1bMF0sIHZib3NbYnVmZmVyX2luZGV4XVsxXSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgbG9jYXRpb24pO1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGluZGV4LCBzaXplLCBnbC5GTE9BVCwgZmFsc2UsIHN0cmlkZSwgb2Zmc2V0KTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoaW5kZXgpO1xuICAgIH0pO1xuXG4gICAgdmJvcy5maWx0ZXIodmJvID0+IHZib1swXSA9PT0gZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIpXG4gICAgICAgIC5mb3JFYWNoKHZibyA9PiB7XG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKHZib1swXSwgdmJvWzFdKTtcbiAgICAgICAgfSk7XG5cbiAgICBnbC5iaW5kVmVydGV4QXJyYXkobnVsbCk7XG4gICAgcmV0dXJuIHZhbztcbn1cbiIsImV4cG9ydCB0eXBlIFRhcmdldCA9IFdlYkdMUmVuZGVyaW5nQ29udGV4dFtcIkFSUkFZX0JVRkZFUlwiXSB8IFdlYkdMUmVuZGVyaW5nQ29udGV4dFtcIkVMRU1FTlRfQVJSQVlfQlVGRkVSXCJdO1xuZXhwb3J0IHR5cGUgVXNhZ2UgPSBXZWJHTFJlbmRlcmluZ0NvbnRleHRbXCJTVEFUSUNfRFJBV1wiXSB8IFdlYkdMUmVuZGVyaW5nQ29udGV4dFtcIkRZTkFNSUNfRFJBV1wiXVxuXG5leHBvcnQgZnVuY3Rpb24gdmJvX2NyZWF0ZShcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuICAgIHRhcmdldDogVGFyZ2V0LFxuICAgIGRhdGE6IEFycmF5QnVmZmVyLFxuICAgIHVzYWdlOiBVc2FnZSA9IFdlYkdMUmVuZGVyaW5nQ29udGV4dFtcIlNUQVRJQ19EUkFXXCJdXG4pOiBbVGFyZ2V0LCBXZWJHTEJ1ZmZlcl0ge1xuICAgIGNvbnN0IHZibyA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIGlmICghdmJvKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIGJ1ZmZlclwiKTtcbiAgICBnbC5iaW5kQnVmZmVyKHRhcmdldCwgdmJvKTtcbiAgICBnbC5idWZmZXJEYXRhKHRhcmdldCwgZGF0YSwgdXNhZ2UpO1xuICAgIHJldHVybiBbdGFyZ2V0LCB2Ym9dO1xufVxuXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9ncmFwaGljc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9tYXRoXCIiLCJleHBvcnQgKiBmcm9tIFwiLi92ZWMzXCIiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1Nik7XG4iXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwic2VsZiIsImNhbnZhc19yZXNpemUiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2luZG93Iiwib25yZXNpemUiLCJib2R5IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJnbCIsImdldENvbnRleHQiLCJFcnJvciIsImxvYWRfZmlsZSIsInVybCIsImZldGNoIiwidGV4dCIsInNoYWRlcl9jb21waWxlX2Zyb21fc291cmNlIiwic291cmNlIiwidHlwZSIsInNoYWRlciIsImNyZWF0ZVNoYWRlciIsInNoYWRlclNvdXJjZSIsImNvbXBpbGVTaGFkZXIiLCJnZXRTaGFkZXJQYXJhbWV0ZXIiLCJDT01QSUxFX1NUQVRVUyIsImdldFNoYWRlckluZm9Mb2ciLCJ2ZXJ0ZXhfc291cmNlX3VybCIsImZyYWdtZW50X3NvdXJjZV91cmwiLCJwcm9ncmFtIiwiY3JlYXRlUHJvZ3JhbSIsInZlcnRleF9zb3VyY2UiLCJmcmFnbWVudF9zb3VyY2UiLCJ2ZXJ0ZXhfc2hhZGVyIiwiVkVSVEVYX1NIQURFUiIsImZyYWdtZW50X3NoYWRlciIsIkZSQUdNRU5UX1NIQURFUiIsImF0dGFjaFNoYWRlciIsImxpbmtQcm9ncmFtIiwiZ2V0UHJvZ3JhbVBhcmFtZXRlciIsIkxJTktfU1RBVFVTIiwiZ2V0UHJvZ3JhbUluZm9Mb2ciLCJkZWxldGVTaGFkZXIiLCJuYW1lIiwibG9jYXRpb24iLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJ2Ym9zIiwiYXR0cmlidXRlcyIsInZhbyIsImNyZWF0ZVZlcnRleEFycmF5IiwiYmluZFZlcnRleEFycmF5IiwidXNlUHJvZ3JhbSIsImZvckVhY2giLCJidWZmZXJfaW5kZXgiLCJzaXplIiwic3RyaWRlIiwib2Zmc2V0IiwiYmluZEJ1ZmZlciIsImluZGV4IiwiZ2V0QXR0cmliTG9jYXRpb24iLCJ2ZXJ0ZXhBdHRyaWJQb2ludGVyIiwiRkxPQVQiLCJlbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSIsImZpbHRlciIsInZibyIsIkVMRU1FTlRfQVJSQVlfQlVGRkVSIiwidGFyZ2V0IiwiZGF0YSIsInVzYWdlIiwiV2ViR0xSZW5kZXJpbmdDb250ZXh0IiwiY3JlYXRlQnVmZmVyIiwiYnVmZmVyRGF0YSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==
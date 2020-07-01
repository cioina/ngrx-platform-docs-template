function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var c,a=e[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(s){i=!0,o=s}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(e);if(t){var i=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"+1zh":function(e,t,n){"use strict";n.r(t),n.d(t,"TocModule",(function(){return w}));var r=n("ofXK"),i=n("NFeN"),o=n("XNiG"),c=n("itXk"),a=n("7Hc7"),s=n("1G5W"),l=n("HDdC"),u=n("Y7HM"),d=function(e){_inherits(n,e);var t=_createSuper(n);function n(e){var r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.a;return _classCallCheck(this,n),(r=t.call(this)).source=e,r.delayTime=i,r.scheduler=o,(!Object(u.a)(i)||i<0)&&(r.delayTime=0),o&&"function"==typeof o.schedule||(r.scheduler=a.a),r}return _createClass(n,[{key:"_subscribe",value:function(e){return this.scheduler.schedule(n.dispatch,this.delayTime,{source:this.source,subscriber:e})}}],[{key:"create",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.a;return new n(e,t,r)}},{key:"dispatch",value:function(e){var t=e.source,n=e.subscriber;return this.add(t.subscribe(n))}}]),n}(l.a),f=function(){function e(t,n){_classCallCheck(this,e),this.scheduler=t,this.delay=n}return _createClass(e,[{key:"call",value:function(e,t){return new d(t,this.delay,this.scheduler).subscribe(e)}}]),e}(),p=n("JX91"),b=n("fXoL"),y=n("Faly"),h=n("TNhP"),v=["tocItem"];function m(e,t){1&e&&(b.Sb(0,"div",7),b.Bc(1," Contents "),b.Rb())}function g(e,t){if(1&e){var n=b.Tb();b.Sb(0,"button",8),b.Zb("click",(function(){return b.sc(n),b.dc(2).toggle(!1)})),b.Bc(1," Contents "),b.Ob(2,"mat-icon",9),b.Rb()}if(2&e){var r=b.dc(2);b.Bb("aria-pressed",!r.isCollapsed),b.Ab(2),b.Eb("collapsed",r.isCollapsed)}}function _(e,t){if(1&e&&(b.Sb(0,"li",11,12),b.Ob(2,"a",13),b.Rb()),2&e){var n=b.dc(),r=n.$implicit,i=n.index,o=b.dc(2);b.Cb(r.level),b.Eb("secondary","EmbeddedExpandable"===o.type&&i>=o.primaryMax)("active",i===o.activeIndex),b.kc("title",r.title),b.Ab(2),b.jc("href",r.href,b.uc)("innerHTML",r.content,b.tc)}}function C(e,t){if(1&e&&(b.Qb(0),b.zc(1,_,3,10,"li",10),b.Pb()),2&e){var n=t.$implicit,r=b.dc(2);b.Ab(1),b.jc("ngIf","Floating"===r.type||"h1"!==n.level)}}function E(e,t){if(1&e){var n=b.Tb();b.Sb(0,"button",14),b.Zb("click",(function(){return b.sc(n),b.dc(2).toggle()})),b.Rb()}if(2&e){var r=b.dc(2);b.Eb("collapsed",r.isCollapsed),b.Bb("aria-pressed",!r.isCollapsed)}}function O(e,t){if(1&e&&(b.Sb(0,"div",1),b.zc(1,m,2,0,"div",2),b.zc(2,g,3,3,"button",3),b.Sb(3,"ul",4),b.zc(4,C,2,1,"ng-container",5),b.Rb(),b.zc(5,E,1,3,"button",6),b.Rb()),2&e){var n=b.dc();b.Eb("collapsed",n.isCollapsed),b.Ab(1),b.jc("ngIf","EmbeddedSimple"===n.type),b.Ab(1),b.jc("ngIf","EmbeddedExpandable"===n.type),b.Ab(1),b.Eb("embedded","Floating"!==n.type),b.Ab(1),b.jc("ngForOf",n.tocList),b.Ab(1),b.jc("ngIf","EmbeddedExpandable"===n.type)}}var k,I,T=((I=function(){function e(t,n,r){_classCallCheck(this,e),this.scrollService=t,this.tocService=r,this.activeIndex=null,this.type="None",this.isCollapsed=!0,this.isEmbedded=!1,this.onDestroy=new o.a,this.primaryMax=4,this.isEmbedded=-1!==n.nativeElement.className.indexOf("embedded")}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.tocService.tocList.pipe(Object(s.a)(this.onDestroy)).subscribe((function(t){e.tocList=t;var n,r=(n=function(e){return"h1"!==e.level},e.tocList.reduce((function(e,t){return n(t)?e+1:e}),0));e.type=r>0?e.isEmbedded?r>e.primaryMax?"EmbeddedExpandable":"EmbeddedSimple":"Floating":"None"}))}},{key:"ngAfterViewInit",value:function(){var e=this;this.isEmbedded||Object(c.a)(this.tocService.activeItemIndex.pipe(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){return n.lift(new f(e,t))}}(a.a)),this.items.changes.pipe(Object(p.a)(this.items))).pipe(Object(s.a)(this.onDestroy)).subscribe((function(t){var n=_slicedToArray(t,2),r=n[0],i=n[1];if(e.activeIndex=r,!(null===r||r>=i.length)){var o=i.toArray()[r].nativeElement,c=o.offsetParent,a=o.getBoundingClientRect(),s=c.getBoundingClientRect();a.top>=s.top&&a.bottom<=s.bottom||(c.scrollTop+=a.top-s.top-c.clientHeight/2)}}))}},{key:"ngOnDestroy",value:function(){this.onDestroy.next()}},{key:"toggle",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.isCollapsed=!this.isCollapsed,e&&this.isCollapsed&&this.toTop()}},{key:"toTop",value:function(){this.scrollService.scrollToTop()}}]),e}()).\u0275fac=function(e){return new(e||I)(b.Nb(y.a),b.Nb(b.l),b.Nb(h.a))},I.\u0275cmp=b.Hb({type:I,selectors:[["aio-toc"]],viewQuery:function(e,t){var n;1&e&&b.Gc(v,!0),2&e&&b.oc(n=b.ac())&&(t.items=n)},decls:1,vars:1,consts:[["class","toc-inner no-print",3,"collapsed",4,"ngIf"],[1,"toc-inner","no-print"],["class","toc-heading embedded",4,"ngIf"],["type","button","class","toc-heading embedded secondary","title","Expand/collapse contents","aria-label","Expand/collapse contents",3,"click",4,"ngIf"],[1,"toc-list"],[4,"ngFor","ngForOf"],["type","button","class","toc-more-items embedded material-icons","title","Expand/collapse contents","aria-label","Expand/collapse contents",3,"collapsed","click",4,"ngIf"],[1,"toc-heading","embedded"],["type","button","title","Expand/collapse contents","aria-label","Expand/collapse contents",1,"toc-heading","embedded","secondary",3,"click"],["svgIcon","keyboard_arrow_right",1,"rotating-icon"],[3,"title","class","secondary","active",4,"ngIf"],[3,"title"],["tocItem",""],[3,"href","innerHTML"],["type","button","title","Expand/collapse contents","aria-label","Expand/collapse contents",1,"toc-more-items","embedded","material-icons",3,"click"]],template:function(e,t){1&e&&b.zc(0,O,6,8,"div",0),2&e&&b.jc("ngIf","None"!==t.type)},directives:[r.k,r.j,i.a],encapsulation:2}),I),w=((k=function e(){_classCallCheck(this,e),this.customElementComponent=T}).\u0275mod=b.Lb({type:k}),k.\u0275inj=b.Kb({factory:function(e){return new(e||k)},imports:[[r.c,i.b]]}),k)}}]);
//# sourceMappingURL=toc-toc-module-es5.a4394628f642b93c81bb.js.map
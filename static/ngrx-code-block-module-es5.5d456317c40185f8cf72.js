!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"5Cu4":function(e,r,o){"use strict";o.r(r),o.d(r,"CodeBlockModule",(function(){return l}));var i,c,a=o("ofXK"),s=o("fXoL"),u=o("vVVL"),f=["codeContainer"],p=((c=function(){function e(n){t(this,e),this.pretty=n,this.code="",this.formattedCode=""}return n(e,[{key:"ngAfterContentInit",value:function(){var t=this;this.pretty.formatCode("effects"===this.code?"\nsearch$ = createEffect(() => \n  this.actions$.pipe(\n    ofType(BookActions.search),\n    exhaustMap(action =>\n      this.googleBooksService.search(action.query)\n    )\n  )\n);":"\n$ ng g store State --root --module app.module.ts\n create src/app/reducers/index.ts\n update src/app/app.module.ts\n").subscribe((function(e){t.codeContainer.nativeElement.innerHTML=e}))}}]),e}()).\u0275fac=function(t){return new(t||c)(s.Mb(u.a))},c.\u0275cmp=s.Gb({type:c,selectors:[["ngrx-code-block"]],viewQuery:function(t,e){var n;1&t&&s.wc(f,!0,s.l),2&t&&s.nc(n=s.Zb())&&(e.codeContainer=n.first)},inputs:{code:"code"},decls:3,vars:0,consts:[[1,"prettyprint-scroller"],[1,"prettyprint"],["codeContainer",""]],template:function(t,e){1&t&&(s.Rb(0,"div",0),s.Nb(1,"pre",1,2),s.Qb())},encapsulation:2}),c),l=((i=function e(){t(this,e),this.customElementComponent=p}).\u0275mod=s.Kb({type:i}),i.\u0275inj=s.Jb({factory:function(t){return new(t||i)},providers:[u.a],imports:[[a.c]]}),i)},vVVL:function(e,r,o){"use strict";o.d(r,"a",(function(){return p}));var i=o("Cfvw"),c=o("w1tV"),a=o("lJxs"),s=o("SxV6"),u=o("fXoL"),f=o("vHPH"),p=function(){var e=function(){function e(n){t(this,e),this.logger=n,this.prettyPrintOne=Object(i.a)(this.getPrettyPrintOne()).pipe(Object(c.a)())}return n(e,[{key:"getPrettyPrintOne",value:function(){var t=this,e=window.prettyPrintOne;return e?Promise.resolve(e):o.e(5).then(o.t.bind(null,"Ue1H",7)).then((function(){return window.prettyPrintOne}),(function(e){var n="Cannot get prettify.js from server: "+e.message;return t.logger.error(new Error(n)),function(){throw new Error(n)}}))}},{key:"formatCode",value:function(t,e,n){return this.prettyPrintOne.pipe(Object(a.a)((function(r){try{return r(t,e,n)}catch(i){var o="Could not format code that begins '".concat(t.substr(0,50),"...'.");throw console.error(o,i),new Error(o)}})),Object(s.a)())}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Vb(f.a))},e.\u0275prov=u.Ib({token:e,factory:e.\u0275fac}),e}()}}])}();
//# sourceMappingURL=ngrx-code-block-module-es5.5d456317c40185f8cf72.js.map
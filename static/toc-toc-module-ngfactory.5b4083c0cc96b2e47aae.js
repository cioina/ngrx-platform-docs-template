(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{s8K4:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=t("K9Ia"),o=t("dzgT"),i=t("KQya"),c=t("ny24"),r=t("mrSG"),s=t("6blF"),a=t("/21U"),d=function(n){function l(l,t,e){void 0===t&&(t=0),void 0===e&&(e=i.a);var u=n.call(this)||this;return u.source=l,u.delayTime=t,u.scheduler=e,(!Object(a.a)(t)||t<0)&&(u.delayTime=0),e&&"function"==typeof e.schedule||(u.scheduler=i.a),u}return r.c(l,n),l.create=function(n,t,e){return void 0===t&&(t=0),void 0===e&&(e=i.a),new l(n,t,e)},l.dispatch=function(n){return this.add(n.source.subscribe(n.subscriber))},l.prototype._subscribe=function(n){return this.scheduler.schedule(l.dispatch,this.delayTime,{source:this.source,subscriber:n})},l}(s.a),b=function(){function n(n,l){this.scheduler=n,this.delay=l}return n.prototype.call=function(n,l){return new d(l,this.delay,this.scheduler).subscribe(n)},n}(),p=t("p0Sj"),f=function(){function n(n,l,t){this.scrollService=n,this.tocService=t,this.activeIndex=null,this.type="None",this.isCollapsed=!0,this.isEmbedded=!1,this.onDestroy=new u.a,this.primaryMax=4,this.isEmbedded=-1!==l.nativeElement.className.indexOf("embedded")}return n.prototype.ngOnInit=function(){var n=this;this.tocService.tocList.pipe(Object(c.a)(this.onDestroy)).subscribe(function(l){n.tocList=l;var t,e=(t=function(n){return"h1"!==n.level},n.tocList.reduce(function(n,l){return t(l)?n+1:n},0));n.type=e>0?n.isEmbedded?e>n.primaryMax?"EmbeddedExpandable":"EmbeddedSimple":"Floating":"None"})},n.prototype.ngAfterViewInit=function(){var n,l,t=this;this.isEmbedded||Object(o.a)(this.tocService.activeItemIndex.pipe((n=i.a,void 0===l&&(l=0),function(t){return t.lift(new b(n,l))})),this.items.changes.pipe(Object(p.a)(this.items))).pipe(Object(c.a)(this.onDestroy)).subscribe(function(n){var l=n[0],e=n[1];if(t.activeIndex=l,!(null===l||l>=e.length)){var u=e.toArray()[l].nativeElement,o=u.offsetParent,i=u.getBoundingClientRect(),c=o.getBoundingClientRect();i.top>=c.top&&i.bottom<=c.bottom||(o.scrollTop+=i.top-c.top-o.clientHeight/2)}})},n.prototype.ngOnDestroy=function(){this.onDestroy.next()},n.prototype.toggle=function(n){void 0===n&&(n=!0),this.isCollapsed=!this.isCollapsed,n&&this.isCollapsed&&this.toTop()},n.prototype.toTop=function(){this.scrollService.scrollToTop()},n}(),m=function(){return function(){this.customElementComponent=f}}(),h=t("Mr+X"),y=t("SMsm"),v=t("Ip0R"),g=t("Faly"),E=t("TNhP"),x=e.sb({encapsulation:2,styles:[],data:{}});function I(n){return e.Pb(0,[(n()(),e.ub(0,0,null,null,1,"div",[["class","toc-heading embedded"]],null,null,null,null,null)),(n()(),e.Nb(-1,null,[" Contents "]))],null,null)}function j(n){return e.Pb(0,[(n()(),e.ub(0,0,null,null,3,"button",[["aria-label","Expand/collapse contents"],["class","toc-heading embedded secondary"],["title","Expand/collapse contents"],["type","button"]],[[1,"aria-pressed",0]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.toggle(!1)&&e),e},null,null)),(n()(),e.Nb(-1,null,[" Contents "])),(n()(),e.ub(2,0,null,null,1,"mat-icon",[["class","rotating-icon mat-icon notranslate"],["role","img"],["svgIcon","keyboard_arrow_right"]],[[2,"collapsed",null],[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,h.b,h.a)),e.tb(3,9158656,null,0,y.b,[e.k,y.d,[8,null],[2,y.a]],{svgIcon:[0,"svgIcon"]},null)],function(n,l){n(l,3,0,"keyboard_arrow_right")},function(n,l){var t=l.component;n(l,0,0,!t.isCollapsed),n(l,2,0,t.isCollapsed,e.Gb(l,3).inline,"primary"!==e.Gb(l,3).color&&"accent"!==e.Gb(l,3).color&&"warn"!==e.Gb(l,3).color)})}function O(n){return e.Pb(0,[(n()(),e.ub(0,0,[[1,0],["tocItem",1]],null,1,"li",[],[[8,"title",0],[8,"className",0],[2,"secondary",null],[2,"active",null]],null,null,null,null)),(n()(),e.ub(1,0,null,null,0,"a",[],[[8,"href",4],[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){var t=l.component;n(l,0,0,e.yb(1,"",l.parent.context.$implicit.title,""),e.yb(1,"",l.parent.context.$implicit.level,""),"EmbeddedExpandable"===t.type&&l.parent.context.index>=t.primaryMax,l.parent.context.index===t.activeIndex),n(l,1,0,l.parent.context.$implicit.href,l.parent.context.$implicit.content)})}function k(n){return e.Pb(0,[(n()(),e.ub(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),e.jb(16777216,null,null,1,null,O)),e.tb(2,16384,null,0,v.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(n()(),e.jb(0,null,null,0))],function(n,l){n(l,2,0,"Floating"===l.component.type||"h1"!==l.context.$implicit.level)},null)}function C(n){return e.Pb(0,[(n()(),e.ub(0,0,null,null,0,"button",[["aria-label","Expand/collapse contents"],["class","toc-more-items embedded material-icons"],["title","Expand/collapse contents"],["type","button"]],[[2,"collapsed",null],[1,"aria-pressed",0]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.toggle()&&e),e},null,null))],null,function(n,l){var t=l.component;n(l,0,0,t.isCollapsed,!t.isCollapsed)})}function w(n){return e.Pb(0,[(n()(),e.ub(0,0,null,null,9,"div",[["class","toc-inner no-print"]],[[2,"collapsed",null]],null,null,null,null)),(n()(),e.jb(16777216,null,null,1,null,I)),e.tb(2,16384,null,0,v.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(n()(),e.jb(16777216,null,null,1,null,j)),e.tb(4,16384,null,0,v.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(n()(),e.ub(5,0,null,null,2,"ul",[["class","toc-list"]],[[2,"embedded",null]],null,null,null,null)),(n()(),e.jb(16777216,null,null,1,null,k)),e.tb(7,278528,null,0,v.j,[e.R,e.O,e.t],{ngForOf:[0,"ngForOf"]},null),(n()(),e.jb(16777216,null,null,1,null,C)),e.tb(9,16384,null,0,v.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,"EmbeddedSimple"===t.type),n(l,4,0,"EmbeddedExpandable"===t.type),n(l,7,0,t.tocList),n(l,9,0,"EmbeddedExpandable"===t.type)},function(n,l){var t=l.component;n(l,0,0,t.isCollapsed),n(l,5,0,"Floating"!==t.type)})}function T(n){return e.Pb(0,[e.Lb(671088640,1,{items:1}),(n()(),e.jb(16777216,null,null,1,null,w)),e.tb(2,16384,null,0,v.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,"None"!==l.component.type)},null)}function P(n){return e.Pb(0,[(n()(),e.ub(0,0,null,null,1,"aio-toc",[],null,null,null,T,x)),e.tb(1,4440064,null,0,f,[g.a,e.k,E.a],null,null)],function(n,l){n(l,1,0)},null)}var S=e.qb("aio-toc",f,P,{},{},[]),F=t("Fzqc"),N=t("Wf4p"),R=t("ZYjt");t.d(l,"TocModuleNgFactory",function(){return M});var M=e.rb(m,[],function(n){return e.Db([e.Eb(512,e.j,e.cb,[[8,[S]],[3,e.j],e.y]),e.Eb(4608,v.m,v.l,[e.v,[2,v.B]]),e.Eb(1073742336,v.c,v.c,[]),e.Eb(1073742336,F.a,F.a,[]),e.Eb(1073742336,N.c,N.c,[[2,N.a],[2,R.f]]),e.Eb(1073742336,y.c,y.c,[]),e.Eb(1073742336,m,m,[])])})}}]);
//# sourceMappingURL=toc-toc-module-ngfactory.5b4083c0cc96b2e47aae.js.map
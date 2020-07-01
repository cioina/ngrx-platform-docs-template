(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{dth9:function(t,e,i){"use strict";i.r(e),i.d(e,"ApiListModule",(function(){return C}));var s=i("ofXK"),a=i("tk/3"),c=i("PCNd"),n=i("jtHE"),r=i("itXk"),o=i("fXoL"),l=i("XNiG"),u=i("1G5W"),h=i("vkgz"),p=i("jn67"),b=i("vHPH");let f=(()=>{class t{constructor(t,e){this.http=t,this.logger=e,this.apiBase=p.b+"api/",this.apiListJsonDefault="api-list.json",this.firstTime=!0,this.onDestroy=new l.a,this.sectionsSubject=new n.a(1),this._sections=this.sectionsSubject.pipe(Object(u.a)(this.onDestroy))}get sections(){return this.firstTime&&(this.firstTime=!1,this.fetchSections(),this._sections.subscribe(t=>this.logger.log("ApiService got API sections"))),this._sections.pipe(Object(h.a)(t=>{t.forEach(t=>{t.deprecated=!!t.items&&t.items.every(t=>"deprecated"===t.stability)})}))}ngOnDestroy(){this.onDestroy.next()}fetchSections(t){const e=this.apiBase+(t||this.apiListJsonDefault);this.http.get(e).pipe(Object(u.a)(this.onDestroy),Object(h.a)(()=>this.logger.log("Got API sections from "+e))).subscribe(t=>this.sectionsSubject.next(t),t=>{throw this.logger.error(t),t})}}return t.\u0275fac=function(e){return new(e||t)(o.Wb(a.a),o.Wb(b.a))},t.\u0275prov=o.Jb({token:t,factory:t.\u0275fac}),t})();var y=i("/lUL"),d=i("x4lQ");const S=["filter"];function v(t,e){if(1&t&&(o.Sb(0,"h2"),o.Sb(1,"a",11),o.Bc(2),o.Rb(),o.Rb()),2&t){const t=o.dc().$implicit;o.Ab(1),o.Eb("deprecated-api-item",t.deprecated),o.jc("href",t.path,o.uc),o.Ab(1),o.Dc("@ngrx/",t.title,"")}}function g(t,e){if(1&t&&(o.Qb(0),o.Sb(1,"li",13),o.Sb(2,"a",11),o.Ob(3,"span"),o.Bc(4),o.Rb(),o.Rb(),o.Pb()),2&t){const t=e.$implicit;o.Ab(2),o.Eb("deprecated-api-item","deprecated"===t.stability),o.jc("href",t.path,o.uc),o.Ab(1),o.Db("symbol ",t.docType,""),o.Ab(1),o.Dc(" ",t.title," ")}}function m(t,e){if(1&t&&(o.Sb(0,"ul",12),o.zc(1,g,5,7,"ng-container",8),o.Rb()),2&t){const t=o.dc().$implicit;o.Ab(1),o.jc("ngForOf",t.items)}}function j(t,e){if(1&t&&(o.Sb(0,"div"),o.zc(1,v,3,4,"h2",9),o.zc(2,m,2,1,"ul",10),o.Rb()),2&t){const t=e.$implicit;o.Ab(1),o.jc("ngIf",t.items),o.Ab(1),o.jc("ngIf",null==t.items?null:t.items.length)}}class w{constructor(){this.query="",this.status="all",this.type="all"}}let A=(()=>{class t{constructor(t,e){this.apiService=t,this.locationService=e,this.showStatusMenu=!1,this.showTypeMenu=!1,this.criteriaSubject=new n.a(1),this.searchCriteria=new w,this.types=[{value:"all",title:"All"},{value:"class",title:"Class"},{value:"const",title:"Const"},{value:"decorator",title:"Decorator"},{value:"directive",title:"Directive"},{value:"enum",title:"Enum"},{value:"function",title:"Function"},{value:"interface",title:"Interface"},{value:"pipe",title:"Pipe"},{value:"ngmodule",title:"NgModule"},{value:"type-alias",title:"Type alias"},{value:"package",title:"Package"}],this.statuses=[{value:"all",title:"All"},{value:"deprecated",title:"Deprecated"},{value:"security-risk",title:"Security Risk"}]}ngOnInit(){this.filteredSections=Object(r.a)(this.apiService.sections,this.criteriaSubject,(t,e)=>t.map(t=>Object.assign(Object.assign({},t),{items:this.filterSection(t,e)}))),this.initializeSearchCriteria()}setQuery(t){this.setSearchCriteria({query:(t||"").toLowerCase().trim()})}setStatus(t){this.toggleStatusMenu(),this.status=t,this.setSearchCriteria({status:t.value})}setType(t){this.toggleTypeMenu(),this.type=t,this.setSearchCriteria({type:t.value})}toggleStatusMenu(){this.showStatusMenu=!this.showStatusMenu}toggleTypeMenu(){this.showTypeMenu=!this.showTypeMenu}filterSection(t,{query:e,status:i,type:s}){const a=t.items.filter(a=>("all"===s||s===a.docType)&&("all"===i||i===a.stability||"security-risk"===i&&a.securityRisk)&&(!e||-1!==t.name.indexOf(e)||-1!==a.name.indexOf(e)));return a.length?a:"package"!==s||e&&-1===t.name.indexOf(e)?null:[]}initializeSearchCriteria(){const{query:t,status:e,type:i}=this.locationService.search(),s=(t||"").toLowerCase();this.queryEl.nativeElement.value=s,this.status=this.statuses.find(t=>t.value===e)||this.statuses[0],this.type=this.types.find(t=>t.value===i)||this.types[0],this.searchCriteria={query:s,status:this.status.value,type:this.type.value},this.criteriaSubject.next(this.searchCriteria)}setLocationSearch(){const{query:t,status:e,type:i}=this.searchCriteria;this.locationService.setSearch("API Search",{query:t||void 0,status:"all"!==e?e:void 0,type:"all"!==i?i:void 0})}setSearchCriteria(t){this.criteriaSubject.next(Object.assign(this.searchCriteria,t)),this.setLocationSearch()}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(f),o.Nb(y.a))},t.\u0275cmp=o.Hb({type:t,selectors:[["aio-api-list"]],viewQuery:function(t,e){var i;1&t&&o.xc(S,!0),2&t&&o.oc(i=o.ac())&&(e.queryEl=i.first)},decls:11,vars:9,consts:[[1,"l-flex-wrap","api-filter"],["label","Type:",3,"options","selected","showSymbol","change"],["label","Status:",3,"options","selected","disabled","change"],[1,"form-search"],["placeholder","Filter",3,"input"],["filter",""],[1,"material-icons"],[1,"api-list-container","l-content-small","docs-content"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","api-list",4,"ngIf"],[3,"href"],[1,"api-list"],[1,"api-item"]],template:function(t,e){1&t&&(o.Sb(0,"div",0),o.Sb(1,"aio-select",1),o.Zb("change",(function(t){return e.setType(t.option)})),o.Rb(),o.Sb(2,"aio-select",2),o.Zb("change",(function(t){return e.setStatus(t.option)})),o.Rb(),o.Sb(3,"div",3),o.Sb(4,"input",4,5),o.Zb("input",(function(t){return e.setQuery(t.target.value)})),o.Rb(),o.Sb(6,"i",6),o.Bc(7,"search"),o.Rb(),o.Rb(),o.Rb(),o.Sb(8,"article",7),o.zc(9,j,3,2,"div",8),o.ec(10,"async"),o.Rb()),2&t&&(o.Ab(1),o.jc("options",e.types)("selected",e.type)("showSymbol",!0),o.Ab(1),o.jc("options",e.statuses)("selected",e.status)("disabled","package"===e.type.value),o.Ab(7),o.jc("ngForOf",o.fc(10,7,e.filteredSections)))},directives:[d.a,s.j,s.k],pipes:[s.b],encapsulation:2}),t})(),C=(()=>{class t{constructor(){this.customElementComponent=A}}return t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({factory:function(e){return new(e||t)},providers:[f],imports:[[s.c,c.a,a.b]]}),t})()}}]);
//# sourceMappingURL=api-api-list-module-es2015.f9c91e3d6a2b4c6092e6.js.map
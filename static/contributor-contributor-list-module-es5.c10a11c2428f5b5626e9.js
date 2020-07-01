function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{fPy6:function(t,n,e){"use strict";e.r(n),e.d(n,"ContributorListModule",(function(){return F}));var r,c=e("ofXK"),o=e("fXoL"),i=e("lJxs"),s=e("qZ0a"),a=e("jn67"),u=e("tk/3"),b=a.a+"contributors.json",f=["Core","Contributor"],p=((r=function(){function t(n){_classCallCheck(this,t),this.http=n,this.contributors=this.getContributors()}return _createClass(t,[{key:"getContributors",value:function(){var t=this.http.get(b).pipe(Object(i.a)((function(t){var n={};return Object.keys(t).forEach((function(e){var r=t[e],c=r.group,o=n[c];o?o.push(r):n[c]=[r]})),n})),Object(i.a)((function(t){return Object.keys(t).map((function(n){var e=f.indexOf(n);return{name:n,order:-1===e?f.length:e,contributors:t[n].sort(l)}})).sort(d)})),Object(s.a)());return t.connect(),t}}]),t}()).\u0275fac=function(t){return new(t||r)(o.Wb(u.a))},r.\u0275prov=o.Jb({token:r,factory:r.\u0275fac}),r);function l(t,n){return t.name.toUpperCase()>n.name.toUpperCase()?1:-1}function d(t,n){return t.order===n.order?t.name>n.name?1:-1:t.order>n.order?1:-1}var v=e("/lUL");function g(t,n){1&t&&(o.Sb(0,"a",7),o.Bc(1," View Bio "),o.Rb())}function h(t,n){if(1&t){var e=o.Tb();o.Sb(0,"a",8),o.Zb("click",(function(t){return o.sc(e),t.stopPropagation()})),o.Ob(1,"span",9),o.Rb()}if(2&t){var r=o.dc();o.lc("href","https://twitter.com/",r.person.twitter,"",o.uc)}}function m(t,n){if(1&t){var e=o.Tb();o.Sb(0,"a",8),o.Zb("click",(function(t){return o.sc(e),t.stopPropagation()})),o.Ob(1,"span",10),o.Rb()}if(2&t){var r=o.dc();o.kc("href",r.person.website,o.uc)}}function k(t,n){if(1&t){var e=o.Tb();o.Sb(0,"div",11),o.Zb("click",(function(){o.sc(e);var t=o.dc();return t.flipCard(t.person)})),o.Sb(1,"h3"),o.Bc(2),o.Rb(),o.Sb(3,"p",12),o.Bc(4),o.Rb(),o.Rb()}if(2&t){var r=o.dc();o.Ab(2),o.Cc(r.person.name),o.Ab(2),o.Cc(r.person.bio)}}var C,w=function(t){return{flipped:t}},S=((C=function(){function t(){_classCallCheck(this,t),this.noPicture="_no-one.png",this.pictureBase=a.a+"images/bios/"}return _createClass(t,[{key:"flipCard",value:function(t){t.isFlipped=!t.isFlipped}}]),t}()).\u0275fac=function(t){return new(t||C)},C.\u0275cmp=o.Hb({type:C,selectors:[["aio-contributor"]],inputs:{person:"person"},decls:10,vars:10,consts:[[1,"contributor-card",3,"ngClass"],[1,"card-front",3,"click"],[1,"contributor-image"],[1,"contributor-info"],["mat-button","",4,"ngIf"],["mat-button","","class","icon","target","_blank",3,"href","click",4,"ngIf"],["class","card-back",3,"click",4,"ngIf"],["mat-button",""],["mat-button","","target","_blank",1,"icon",3,"href","click"],[1,"fa","fa-twitter","fa-2x"],[1,"fa","fa-link","fa-2x"],[1,"card-back",3,"click"],[1,"contributor-bio"]],template:function(t,n){1&t&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Zb("click",(function(){return n.flipCard(n.person)})),o.Sb(2,"h3"),o.Bc(3),o.Rb(),o.Sb(4,"div",2),o.Sb(5,"div",3),o.zc(6,g,2,0,"a",4),o.zc(7,h,2,1,"a",5),o.zc(8,m,2,1,"a",5),o.Rb(),o.Rb(),o.Rb(),o.zc(9,k,5,2,"div",6),o.Rb()),2&t&&(o.jc("ngClass",o.mc(8,w,n.person.isFlipped)),o.Ab(3),o.Cc(n.person.name),o.Ab(1),o.yc("background-image","url("+n.pictureBase+(n.person.picture||n.noPicture)+")"),o.Ab(2),o.jc("ngIf",n.person.bio),o.Ab(1),o.jc("ngIf",n.person.twitter),o.Ab(1),o.jc("ngIf",n.person.website),o.Ab(1),o.jc("ngIf",n.person.isFlipped))},directives:[c.i,c.k],encapsulation:2}),C);function j(t,n){if(1&t){var e=o.Tb();o.Sb(0,"a",3),o.Zb("click",(function(){o.sc(e);var t=n.$implicit;return o.dc().selectGroup(t)})),o.Bc(1),o.Rb()}if(2&t){var r=n.$implicit,c=o.dc();o.Eb("selected",r==c.selectedGroup.name),o.Ab(1),o.Cc(r)}}function y(t,n){1&t&&o.Ob(0,"aio-contributor",7),2&t&&o.jc("person",n.$implicit)}function O(t,n){if(1&t&&(o.Sb(0,"section",4),o.Sb(1,"div",5),o.zc(2,y,1,1,"aio-contributor",6),o.Rb(),o.Rb()),2&t){var e=o.dc();o.Ab(2),o.jc("ngForOf",e.selectedGroup.contributors)}}var R,_,A=((_=function(){function t(n,e){_classCallCheck(this,t),this.contributorService=n,this.locationService=e}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this,n=this.locationService.search().group||"";this.contributorService.contributors.subscribe((function(e){t.groups=e,t.groupNames=e.map((function(t){return t.name})),t.selectGroup(n)}))}},{key:"selectGroup",value:function(t){t=t.toLowerCase(),this.selectedGroup=this.groups.find((function(n){return n.name.toLowerCase()===t}))||this.groups[0],this.locationService.setSearch("",{group:this.selectedGroup.name})}}]),t}()).\u0275fac=function(t){return new(t||_)(o.Nb(p),o.Nb(v.a))},_.\u0275cmp=o.Hb({type:_,selectors:[["aio-contributor-list"]],decls:3,vars:2,consts:[[1,"flex-center","group-buttons"],["class","button mat-button filter-button",3,"selected","click",4,"ngFor","ngForOf"],["class","grid-fluid",4,"ngIf"],[1,"button","mat-button","filter-button",3,"click"],[1,"grid-fluid"],[1,"contributor-group"],[3,"person",4,"ngFor","ngForOf"],[3,"person"]],template:function(t,n){1&t&&(o.Sb(0,"div",0),o.zc(1,j,2,3,"a",1),o.Rb(),o.zc(2,O,3,1,"section",2)),2&t&&(o.Ab(1),o.jc("ngForOf",n.groupNames),o.Ab(1),o.jc("ngIf",n.selectedGroup))},directives:[c.j,c.k,S],encapsulation:2}),_),F=((R=function t(){_classCallCheck(this,t),this.customElementComponent=A}).\u0275mod=o.Lb({type:R}),R.\u0275inj=o.Kb({factory:function(t){return new(t||R)},providers:[p],imports:[[c.c]]}),R)}}]);
//# sourceMappingURL=contributor-contributor-list-module-es5.c10a11c2428f5b5626e9.js.map
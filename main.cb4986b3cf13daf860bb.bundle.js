webpackJsonp([1],{0:function(n,l,e){n.exports=e("cDNt")},cDNt:function(n,l,e){"use strict";function t(n){return o._24(0,[o._21(402653184,1,{video:0}),(n()(),o._7(1,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),o._23(2,null,["\n  ","\n"])),(n()(),o._23(-1,null,["\n"])),(n()(),o._7(4,0,null,null,5,"input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var t=!0,u=n.component;if("input"===l){t=!1!==o._19(n,5)._handleInput(e.target.value)&&t}if("blur"===l){t=!1!==o._19(n,5).onTouched()&&t}if("compositionstart"===l){t=!1!==o._19(n,5)._compositionStart()&&t}if("compositionend"===l){t=!1!==o._19(n,5)._compositionEnd(e.target.value)&&t}if("ngModelChange"===l){t=!1!==(u.targetpeer=e)&&t}return t},null,null)),o._5(5,16384,null,0,a.b,[o.G,o.k,[2,a.a]],null,null),o._20(1024,null,a.d,function(n){return[n]},[a.b]),o._5(7,671744,null,0,a.g,[[8,null],[8,null],[8,null],[2,a.d]],{model:[0,"model"]},{update:"ngModelChange"}),o._20(2048,null,a.e,null,[a.g]),o._5(9,16384,null,0,a.f,[a.e],null,null),(n()(),o._23(-1,null,["\n"])),(n()(),o._7(11,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,e){var t=!0,u=n.component;if("click"===l){t=!1!==u.connect()&&t}return t},null,null)),(n()(),o._23(-1,null,["Connect"])),(n()(),o._23(-1,null,["\n"])),(n()(),o._7(14,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,e){var t=!0,u=n.component;if("click"===l){t=!1!==u.message()&&t}return t},null,null)),(n()(),o._23(-1,null,["Send message"])),(n()(),o._23(-1,null,["\n\n"])),(n()(),o._7(17,0,[[1,0],["video",1]],null,0,"video",[],null,null,null,null,null))],function(n,l){n(l,7,0,l.component.targetpeer)},function(n,l){n(l,2,0,l.component.title),n(l,4,0,o._19(l,9).ngClassUntouched,o._19(l,9).ngClassTouched,o._19(l,9).ngClassPristine,o._19(l,9).ngClassDirty,o._19(l,9).ngClassValid,o._19(l,9).ngClassInvalid,o._19(l,9).ngClassPending)})}function u(n){return o._24(0,[(n()(),o._7(0,0,null,null,1,"app-root",[],null,null,null,t,d)),o._5(1,4243456,null,0,r,[],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var o=e("/oeL"),i={production:!0},c=function(){function n(){}return n}(),r=function(){function n(){this.title="Basic video chat",this.n=navigator}return n.prototype.ngAfterViewInit=function(){var n=this,l=this.video;this.n.mediaDevices.getUserMedia({video:!0,audio:!0}).then(function(e){n.peer=new SimplePeer({initiator:"#init"===location.hash,trickle:!1,stream:e}),n.peer.on("signal",function(l){console.log(JSON.stringify(l)),n.targetpeer=l}),n.peer.on("data",function(n){console.log("Received message:"+n)}),n.peer.on("stream",function(n){l.srcObject=n,l.play()})}).catch(function(n){console.log(n)})},n.prototype.connect=function(){this.peer.signal(JSON.parse(this.targetpeer))},n.prototype.message=function(){this.peer.send("hello world")},n}(),_=[""],a=e("bm2B"),s=[_],d=o._4({encapsulation:0,styles:s,data:{}}),p=o._2("app-root",r,u,{},{},[]),g=e("qbdv"),f=e("fc+i"),h=o._3(c,[r],function(n){return o._17([o._18(512,o.i,o._0,[[8,[p]],[3,o.i],o.x]),o._18(5120,o.v,o._16,[[3,o.v]]),o._18(4608,g.d,g.c,[o.v]),o._18(4608,o.h,o.h,[]),o._18(5120,o.a,o._8,[]),o._18(5120,o.t,o._13,[]),o._18(5120,o.u,o._14,[]),o._18(4608,f.b,f.s,[g.b]),o._18(6144,o.J,null,[f.b]),o._18(4608,f.e,f.f,[]),o._18(5120,f.c,function(n,l,e,t){return[new f.k(n),new f.o(l),new f.n(e,t)]},[g.b,g.b,g.b,f.e]),o._18(4608,f.d,f.d,[f.c,o.z]),o._18(135680,f.m,f.m,[g.b]),o._18(4608,f.l,f.l,[f.d,f.m]),o._18(6144,o.H,null,[f.l]),o._18(6144,f.p,null,[f.m]),o._18(4608,o.O,o.O,[o.z]),o._18(4608,f.g,f.g,[g.b]),o._18(4608,f.i,f.i,[g.b]),o._18(4608,a.i,a.i,[]),o._18(512,g.a,g.a,[]),o._18(1024,o.l,f.q,[]),o._18(1024,o.b,function(n,l){return[f.r(n,l)]},[[2,f.h],[2,o.y]]),o._18(512,o.c,o.c,[[2,o.b]]),o._18(131584,o._6,o._6,[o.z,o._1,o.r,o.l,o.i,o.c]),o._18(2048,o.e,null,[o._6]),o._18(512,o.d,o.d,[o.e]),o._18(512,f.a,f.a,[[3,f.a]]),o._18(512,a.h,a.h,[]),o._18(512,a.c,a.c,[]),o._18(512,c,c,[])])});i.production&&Object(o.U)(),Object(f.j)().bootstrapModuleFactory(h).catch(function(n){return console.log(n)})},gFIY:function(n,l){function e(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id="gFIY"}},[0]);
(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],d=0,h=[];d<r.length;d++)o=r[d],a[o]&&h.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var i={},a={app:0},n=[];function o(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"feefef8c"}[t]+".js"}function r(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.e=function(t){var e=[],s=a[t];if(0!==s)if(s)e.push(s[2]);else{var i=new Promise(function(e,i){s=a[t]=[e,i]});e.push(s[2]=i);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=o(t),n=function(e){c.onerror=c.onload=null,clearTimeout(l);var s=a[t];if(0!==s){if(s){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+i+": "+n+")");o.type=i,o.request=n,s[1](o)}a[t]=void 0}};var l=setTimeout(function(){n({type:"timeout",target:c})},12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/sunnetwork/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"359c":function(t,e,s){t.exports=s.p+"img/github.13ca6c90.png"},"3f48":function(t,e,s){},"405c":function(t,e){t.exports="data:image/png;base64,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"},4145:function(t,e,s){t.exports=s.p+"img/demo2.56808a35.png"},4174:function(t,e,s){"use strict";var i=s("46cb"),a=s.n(i);a.a},"46cb":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),a=s("5c96"),n=s.n(a),o=(s("0fae"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("|\n    "),s("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),s("router-view")],1)}),r=[],c=(s("5c0b"),s("2877")),l={},d=Object(c["a"])(l,o,r,!1,null,null,null),u=d.exports,h=s("8c4f"),v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("NavBar"),s("Main"),s("FooterBar")],1)},p=[],f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navBar"},[i("ul",[i("section",[i("li",{staticStyle:{float:"left"}},[i("a",{attrs:{href:t.$store.state.homeUrl}},[i("img",{attrs:{src:s("a295"),alt:"Tron"}})])]),i("li",{staticClass:"nav-menu"},[i("div",{on:{click:t.demos}},[i("a",[t._v("Resources")])])]),i("li",{staticClass:"nav-menu"},[i("a",{attrs:{href:t.$store.state.docUrl}},[t._v("Documents")])]),i("li",{staticClass:"nav-menu"},[i("a",{attrs:{href:t.$store.state.testNetsUrl}},[t._v("TestNets")])]),i("li",{staticClass:"nav-menu"},[i("a",{attrs:{href:t.$store.state.mainNetsUrl}},[t._v("MainNets")])])])])])},m=[],g={name:"NavBar",methods:{mainNet:function(){this.$message("Coming soon")},demos:function(){var t=document.getElementById("demos");t.scrollIntoView({behavior:"smooth"})}}},C=g,w=(s("4174"),Object(c["a"])(C,f,m,!1,null,"3e4ee749",null)),b=w.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[t._m(0),i("div",{staticClass:"block introduce-1"},[i("section",[i("el-row",{attrs:{gutter:10}},[i("el-col",{attrs:{span:12,xs:24}},[i("div",{staticClass:"introduce-1-img"},[i("img",{attrs:{src:s("c47a"),alt:"sidechainl"}})])]),i("el-col",{attrs:{span:12,xs:24}},[i("div",{staticClass:"introduce-1-right"},[i("div",{staticClass:"introduce-1-right-content"},[i("div",{staticClass:"introduce-1-right-title"},[t._v("Compatible with TRON Protocol")]),i("div",{staticClass:"introduce-1-right-desc"},[t._v("The sidechain uses the DPoS consensus, the same as the mainchain. It supports smart contract and almost all of the functionalities of the mainchain. TRON users can easily adapt to the sidechain, and developers can quickly migrate or develop new DApps on the sidechain.")]),i("div",{staticClass:"introduce-1-right-title"},[t._v("Highly Customizable")]),i("div",{staticClass:"introduce-1-right-desc"},[t._v("DAppChain is committed to provide all ecosystem participants with a highly flexible, well-configured, and highly customized network of multiple sidechains. This is also one of the characteristics of each sidechain in DAppChain that is different from the main chain.")])])])])],1)],1)]),i("div",{staticClass:"block introduce-2"},[i("section",[i("el-row",{attrs:{gutter:10}},[i("el-col",{attrs:{span:12,xs:24}},[i("div",{staticClass:"introduce-2-left"},[i("div",{staticClass:"introduce-2-left-content"},[i("div",{staticClass:"introduce-2-left-title"},[t._v("Lower Resource Cost")]),i("div",{staticClass:"introduce-2-left-desc"},[t._v("The resource consumption on the sidechain can be much lower. For a same transaction, the cost of resources consumed is only a fraction of the cost on the mainchain. This is great news for DApps that have large transaction volume and it can help contract developers reduce their energy consumption.")]),i("div",{staticClass:"introduce-2-left-title"},[t._v("High Security")]),i("div",{staticClass:"introduce-2-left-desc"},[t._v("Oracle relay-chain and DPoS on a single sidechain can ensure the security of on-chain/cross-chain transactions for users. Ultimately, the consensus of mainchain(TRON-network) safeguards the security of all sidechains.")])])])]),i("el-col",{attrs:{span:12,xs:24}},[i("div",{staticClass:"introduce-2-img"},[i("img",{attrs:{src:s("adbd"),alt:"sidechainr"}})])])],1)],1)]),i("div",{staticClass:"block cards"},[i("section",[i("div",{staticClass:"cards-line"},[i("el-row",{attrs:{gutter:50}},[i("el-col",{attrs:{span:8,xs:24}},[i("div",{staticClass:"card-div",on:{click:t.gotoGithub}},[i("el-card",[i("div",{staticClass:"card-content"},[i("img",{attrs:{src:s("359c"),alt:"github"}}),i("div",{staticClass:"card-title"},[t._v("Github")]),i("div",{staticClass:"card-desc"},[t._v("Latest changes & version history.")])])])],1)]),i("el-col",{attrs:{span:8,xs:24}},[i("div",{staticClass:"card-div",on:{click:t.gotoDoc}},[i("el-card",[i("div",{staticClass:"card-content"},[i("img",{attrs:{src:s("405c"),alt:"doc"}}),i("div",{staticClass:"card-title"},[t._v("Documentation")]),i("div",{staticClass:"card-desc"},[t._v("Get more from our documentation.")])])])],1)]),i("el-col",{attrs:{span:8,xs:24}},[i("div",{staticClass:"card-div",on:{click:t.gotoTelegram}},[i("el-card",[i("div",{staticClass:"card-content"},[i("img",{attrs:{src:s("c2ea"),alt:"Telegram"}}),i("div",{staticClass:"card-title"},[t._v("Telegram")]),i("div",{staticClass:"card-desc"},[t._v("Join the community.")])])])],1)])],1)],1)])]),i("div",{staticClass:"block lower-priced"},[i("section",[t._m(1),i("div",{staticClass:"lower-desc"},[i("el-row",{attrs:{gutter:50}},[i("el-col",{attrs:{span:12,xs:24}},[i("div",{staticClass:"lower-left"},[i("div",{staticClass:"left-title"},[t._v("Same freezing more energy")]),i("b",{staticClass:"divider"}),i("div",{staticClass:"left-desc"},[t._v("On DAppChain, freezing 1 trx gets 10000 energy everyday, 100x of main-chain.")])])]),i("el-col",{attrs:{span:12,xs:24}},[i("div",{staticClass:"lower-right"},[i("div",{staticClass:"right-title"},[t._v("Main-chain")]),i("el-progress",{attrs:{percentage:10,color:"red"}}),i("div",{staticClass:"right-desc"},[t._v("100 free energy for 1 trx everyday")]),i("div",{staticClass:"right-title"},[t._v("DAppchain")]),i("el-progress",{attrs:{percentage:100,color:"red"}}),i("div",{staticClass:"right-desc"},[t._v("Get 100x free energy of main-chain")])],1)])],1)],1)])]),i("div",{staticClass:"block demos",attrs:{id:"demos"}},[i("section",[t._m(2),i("div",{staticClass:"demo-cards"},[i("el-row",{attrs:{gutter:50}},[i("el-col",{attrs:{span:12,xs:24}},[i("div",{staticClass:"demo-card",on:{click:t.gotoDemo1}},[i("el-card",{attrs:{"body-style":{padding:"0px"},shadow:"hover"}},[i("img",{attrs:{src:s("5c04"),alt:"demo1"}}),i("div",{staticStyle:{padding:"14px"}},[i("div",{staticClass:"title"},[t._v("Demo #1")]),i("div",{staticClass:"desc"},[t._v("A demo shows how to build a DApp on DAppChain and play it.")])])])],1)]),i("el-col",{attrs:{span:12,xs:24}},[i("div",{staticClass:"demo-card",on:{click:t.gotoDemo2}},[i("el-card",{attrs:{"body-style":{padding:"0px"},shadow:"hover"}},[i("img",{attrs:{src:s("4145"),alt:"demo2"}}),i("div",{staticStyle:{padding:"14px"}},[i("div",{staticClass:"title"},[t._v("Demo #2")]),i("div",{staticClass:"desc"},[t._v("Show how to interact with DAppChain both with js-sdk and java-sdk")])])])],1)])],1)],1),i("p",{staticClass:"demos-doc"},[i("el-button",{attrs:{type:"danger"},on:{click:t.gotoGithub}},[t._v("Get Started")])],1)])])])},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"block introduce-main"},[s("div",{staticClass:"main-footer"},[s("section",[s("p",{staticClass:"main-footer-title"},[t._v("DAppChain, sidechain of TRON")]),s("p",{staticClass:"main-footer-desc"},[t._v("DAppChain is TRON's sidechain project. The goal is to help DApps to operate on TRON with lower energy consumption, faster speed and enhanced safety, providing unlimited capacity for TRON's main network.")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lower-title"},[s("b",{staticClass:"divider"}),s("div",{staticClass:"divider-title"},[t._v("Lower Priced")]),s("b",{staticClass:"divider"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"demos-title"},[s("b",{staticClass:"divider"}),s("div",{staticClass:"divider-title"},[t._v("Demos")]),s("b",{staticClass:"divider"})])}],k={name:"Main",methods:{learnMore:function(){var t=document.getElementsByClassName("main-footer");t[0].scrollIntoView({behavior:"smooth"})},gotoDoc:function(){window.open(this.$store.state.docUrl)},gotoGithub:function(){window.open(this.$store.state.githubUrl)},gotoDiscord:function(){window.open(this.$store.state.discordUrl)},gotoTelegram:function(){window.open(this.$store.state.telegramUrl)},gotoDemo1:function(){window.open(this.$store.state.demo1Url)},gotoDemo2:function(){window.open(this.$store.state.demo2Url)}}},x=k,B=(s("f56f"),Object(c["a"])(x,A,y,!1,null,"c8f84766",null)),Z=B.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footerBar"},[s("section",[s("div",{staticClass:"container"},[s("el-row",{attrs:{gutter:100}},[s("el-col",{attrs:{span:8,xs:24}},[s("div",{staticClass:"content"},[s("div",{staticClass:"title"},[t._v("Developer Resources")]),s("div",{staticClass:"detail"},[s("ul",[s("li",[s("a",{attrs:{href:t.$store.state.docUrl}},[t._v("Developer Docs")])]),s("li",[s("div",{on:{click:t.mainNet}},[s("a",[t._v("DAppChain main-net")])])]),s("li",[s("a",{attrs:{href:t.$store.state.testNetsUrl}},[t._v("DAppChain test-net")])])])])])]),s("el-col",{attrs:{span:8,xs:24}},[s("div",{staticClass:"content"},[s("div",{staticClass:"title"},[t._v("TRON Foundation")]),s("div",{staticClass:"detail"},[s("ul",[s("li",[s("a",{attrs:{href:"#/"}},[t._v("Since the TRON Foundation was founded, it has upheld its original faith of decentralizing the internet, working hard to change the world with technology.")])]),s("li",[s("a",{staticClass:"donate",attrs:{href:t.$store.state.donateUrl}},[t._v("Donate to Support Development")])])])])])]),s("el-col",{attrs:{span:8,xs:24}},[s("div",{staticClass:"content"},[s("div",{staticClass:"title"},[t._v("Contact US")]),s("div",{staticClass:"detail"},[s("ul",[s("li",[s("a",{attrs:{href:t.$store.state.faqUrl}},[t._v("Join Gitter")])]),s("li",[s("a",{attrs:{href:t.$store.state.discordUrl}},[t._v("Join Discord")])]),s("li",[s("a",{attrs:{href:t.$store.state.telegramUrl}},[t._v("Join Telegram")])]),s("li",[s("a",{attrs:{href:t.$store.state.githubUrl}},[t._v("Join github")])])])])])])],1),s("div",{staticClass:"copyright"},[t._v("COPYRIGHT© 2017-2019 TRON FOUNDATION")])],1)])])},D=[],O={name:"FooterBar",methods:{mainNet:function(){this.$message("Coming soon")}}},S=O,G=(s("a091"),Object(c["a"])(S,N,D,!1,null,"3085544d",null)),U=G.exports,R={name:"Home",components:{NavBar:b,Main:Z,FooterBar:U}},M=R,I=Object(c["a"])(M,v,p,!1,null,null,null),q=I.exports;i["default"].use(h["a"]);var E=new h["a"]({routes:[{path:"/",name:"home",component:q},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]}),P=s("2f62");i["default"].use(P["a"]);var j=new P["a"].Store({state:{homeUrl:"/sunnetwork",mainNetsUrl:"https://dappchain.tronscan.org/",testNetsUrl:"/sunnetwork/doc/",docUrl:"/sunnetwork/doc/guide/",resourcesUrl:"https://github.com/tronprotocol/sun-network",githubUrl:"https://github.com/tronprotocol/sun-network",telegramUrl:"https://t.me/sun_network",demo1Url:"http://47.252.84.158:50053/static/#/home",demo2Url:"http://47.252.84.158:50052/static/#/home",donateUrl:"https://tron.network/donation?lng=en",faqUrl:"https://gitter.im/tronprotocol/sun-network",discordUrl:"https://discordapp.com/invite/Anun6b7"},mutations:{},actions:{}}),H=s("9483");Object(H["a"])("".concat("/sunnetwork/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),i["default"].config.productionTip=!1,i["default"].use(n.a),new i["default"]({router:E,store:j,render:function(t){return t(u)}}).$mount("#app")},"5c04":function(t,e,s){t.exports=s.p+"img/demo1.db5cf5e1.png"},"5c0b":function(t,e,s){"use strict";var i=s("5e27"),a=s.n(i);a.a},"5e27":function(t,e,s){},9758:function(t,e,s){},a091:function(t,e,s){"use strict";var i=s("9758"),a=s.n(i);a.a},a295:function(t,e,s){t.exports=s.p+"img/tronBanner.dbf7be66.png"},adbd:function(t,e,s){t.exports=s.p+"img/sidechainr.a132dce3.png"},c2ea:function(t,e,s){t.exports=s.p+"img/telegram.2b0d7de2.png"},c47a:function(t,e,s){t.exports=s.p+"img/sidechainl.95809b3e.png"},f56f:function(t,e,s){"use strict";var i=s("3f48"),a=s.n(i);a.a}});
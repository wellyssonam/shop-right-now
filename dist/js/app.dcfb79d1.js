(function(t){function a(a){for(var e,s,i=a[0],c=a[1],u=a[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);l&&l(a);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,a=0;a<o.length;a++){for(var r=o[a],e=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(e=!1)}e&&(o.splice(a--,1),t=i(i.s=r[0]))}return t}var e={},n={app:0},o=[];function s(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d0d0a08":"ac7da4b3"}[t]+".js"}function i(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var a=[],r=n[t];if(0!==r)if(r)a.push(r[2]);else{var e=new Promise((function(a,e){r=n[t]=[a,e]}));a.push(r[2]=e);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var u=new Error;o=function(a){c.onerror=c.onload=null,clearTimeout(d);var r=n[t];if(0!==r){if(r){var e=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;u.message="Loading chunk "+t+" failed.\n("+e+": "+o+")",u.name="ChunkLoadError",u.type=e,u.request=o,r[1](u)}n[t]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(a)},i.m=t,i.c=e,i.d=function(t,a,r){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)i.d(r,e,function(a){return t[a]}.bind(null,e));return r},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=a,c=c.slice();for(var d=0;d<c.length;d++)a(c[d]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,a,r){t.exports=r("56d7")},"0f71":function(t,a,r){"use strict";var e=r("cf3c"),n=r.n(e);n.a},"1e35":function(t,a,r){"use strict";var e=r("c3e4");a["a"]={list:function(){return e["a"].get("product")},insertProductCart:function(t){return e["a"].post("cart/add",t)},getCartProductList:function(){return e["a"].get("cart")},removeProductCart:function(t){return e["a"].delete("cart/remove/".concat(t))}}},"4cc7":function(t,a,r){t.exports=r.p+"img/flag-brazil.c35a96d8.png"},"4e11":function(t,a,r){"use strict";var e=r("a221"),n=r.n(e);n.a},"50e5":function(t,a,r){"use strict";var e=r("d0f6"),n=r.n(e);n.a},"56d7":function(t,a,r){"use strict";r.r(a);r("4de4"),r("b680"),r("ac1f"),r("5319"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var e=r("5f5b"),n=r("b1e0"),o=(r("2dd8"),r("f9e3"),r("2b0e")),s=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{attrs:{id:"app"}},[r("header",[r("NavBar")],1),r("b-container",[r("router-view")],1),r("footer",[t._v(t._s(t.$t("app.name")))]),r("Alert",{class:{display:t.alert.showAlert},attrs:{message:t.alert.message,variantColor:t.alert.variantColor,showAlert:!0}}),t.isPageLoading?r("div",{staticClass:"background-spinner"},[r("b-spinner",{attrs:{variant:"success",label:"Text Centered"}})],1):t._e()],1)},i=[],c=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{attrs:{id:"nav"}},[r("b-navbar",{attrs:{toggleable:"sm",type:"light",variant:"light"}},[r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-navbar-brand",[t._v(t._s(t.$t("app.name")))]),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[t.mmenuItems.showProducts?r("router-link",{attrs:{type:"button",to:"/",right:"","active-class":"active",exact:""}},[r("b-button",{attrs:{variant:"dark"}},[t._v(" "+t._s(t.$t("app.navbar.products"))+" ")])],1):t._e(),t.mmenuItems.showCart?r("router-link",{staticClass:"menu-item-cart",attrs:{to:"/shopping-list",right:"","active-class":"active"}},[r("b-button",{attrs:{variant:"dark"}},[t._v(" "+t._s(t.$t("app.navbar.cart"))+" "),r("b-badge",{attrs:{variant:"warning"}},[t._v(t._s(t.quantityProductsCart))])],1)],1):t._e(),r("b-button-group",{staticClass:"idiom"},[r("b-dropdown",{attrs:{right:"",text:t.$t("app.navbar.idioms"),variant:"dark"}},t._l(t.idioms,(function(a,e){return r("b-dropdown-item",{key:e,on:{click:function(r){return t.changeIdiom(a.alias)}}},[r("img",{attrs:{src:a.img,alt:"",width:"29px",height:"20px"}}),r("span",[t._v(t._s(a.name))])])})),1)],1)],1)],1)],1)],1)},u=[],d={name:"NavBar",computed:{quantityProductsCart:function(){return this.$store.state.products.length},mmenuItems:function(){return this.$store.state.menu}},data:function(){return{idioms:[]}},methods:{changeIdiom:function(t){this.$i18n.locale=t}},mounted:function(){this.idioms=[{name:this.$t("app.navbar.portuguese"),img:r("4cc7"),alias:"pt"},{name:this.$t("app.navbar.english"),img:r("f4c5"),alias:"en"}]}},l=d,p=(r("4e11"),r("2877")),v=Object(p["a"])(l,c,u,!1,null,null,null),f=v.exports,m=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"srn-alert"},[r("b-alert",{attrs:{variant:t.variantColor,show:t.showAlert}},[r("a",{staticClass:"alert-link",attrs:{href:"#"}},[t._v(t._s(t.message))])])],1)},g=[],h={props:{message:{type:String,default:"..."},variantColor:{type:String,default:"success"},showAlert:{type:Boolean,default:!1}}},b=h,C=Object(p["a"])(b,m,g,!1,null,null,null),y=C.exports,_={components:{NavBar:f,Alert:y},computed:{alert:function(){return this.$store.state.alert},isPageLoading:function(){return this.$store.state.pageLoading}}},P=_,w=(r("5c0b"),Object(p["a"])(P,s,i,!1,null,null,null)),A=w.exports,k=r("a925");o["default"].use(k["a"]);var L=new k["a"]({locale:"pt",fallbackLocale:"pt",messages:{en:{app:{name:"Shop Right Now",navbar:{products:"Products",cart:"Cart",idioms:"Idioms"},buttons:{add:"Add"},product:{warning:{error:{productList:"Erro ao listar produtos.",addProductCart:"Error adding product to cart."},success:{addProductCart:"Product was added to the cart.",productAlreadyAdded:"Product already added with that amount. Change the quantity to update the existing order.",updatedCartProduct:"Updated cart product.",productAddedCart:"product added to cart."}}},shoppingList:{warning:{error:{removeProductCart:"Error removing product from cart.",listCartProducts:"Error listing products in the cart."},success:{removeProductCart:"Product removed from cart."},emptyCart:"Empty Cart."}},card:{quantity:"Quantity",available:"Available",price:"Price",amount:"Amount",sku:"SKU",category:"Category",maker:"Maker",warning:{error:{},success:{},latestUnits:"Latest Units",outOfStock:"Out of Stock"}}}},pt:{app:{name:"Shop Right Now",navbar:{products:"Produtos",cart:"Carrinho",idioms:"Idiomas",portuguese:"Português",english:"Inglês"},buttons:{add:"Adicionar"},product:{warning:{error:{productList:"Erro ao listar produtos.",addProductCart:"Erro ao adicionar produto ao carrinho."},success:{addProductCart:"Produto foi adicionado ao carrinho.",productAlreadyAdded:"Produto já adicionado com essa quantidade. Altere a quantidade para atualizar o pedido já existente.",updatedCartProduct:"Produto do carrinho atualizado.",productAddedCart:"Produto adicionado ao carrinho."}}},shoppingList:{warning:{error:{removeProductCart:"Erro ao remover produto(s) do carrinho.",listCartProducts:"Erro ao listar produtos do carrinho."},success:{removeProductCart:"Produto(s) removido(s) com sucesso."},emptyCart:"Carrinho encontra-se vazio."}},card:{quantity:"Quantidade",available:"Disponível",price:"Preço",amount:"Total",sku:"SKU",category:"Categoria",maker:"Fabricante",warning:{error:{},success:{},latestUnits:"Últimas Unidades",outOfStock:"Sem Estoque"}}}}}}),$=r("9483");Object($["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});r("d3b7");var q=r("8c4f"),x=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"srn-products"},[r("CardList",{attrs:{products:t.products}})],1)},O=[],j=r("5530"),E=r("1e35"),S=r("b9f2"),M=r("bc3a"),T=r.n(M),U=r("2f62"),I={components:{CardList:S["a"]},data:function(){return{products:[]}},methods:Object(j["a"])({},Object(U["b"])(["callAlertError"]),{},Object(U["d"])(["updateCartProductList","setPageLoading"]),{fetchProducts:function(t,a){this.products=t,this.updateCartProductList(a)}}),mounted:function(){var t=this;this.$store.state.menu={showProducts:!1,showCart:!0},this.setPageLoading(!0),T.a.all([E["a"].list(),E["a"].getCartProductList()]).then((function(a){return t.fetchProducts(a[0].data,a[1].data.items)})).catch((function(){return t.callAlertError({message:t.$t("app.product.warning.error.productList"),time:3e3})})).finally((function(){return t.setPageLoading(!1)}))}},N=I,H=Object(p["a"])(N,x,O,!1,null,null,null),z=H.exports;o["default"].use(q["a"]);var F=[{path:"/",name:"Products",component:z},{path:"/shopping-list",name:"ShoppingList",component:function(){return r.e("chunk-2d0d0a08").then(r.bind(null,"697f"))}}],R=new q["a"]({mode:"history",base:"/",routes:F}),B=R;r("c3e4"),r("d81d"),r("13d5");o["default"].use(U["a"]);var Q=new U["a"].Store({state:{products:[],alert:{message:"...",variantColor:"primary",showAlert:!1},menu:{showProducts:!1,showMCart:!1},pageLoading:!1},getters:{totalAmountCart:function(t){return t.products.map((function(t){return t.product.price*t.quantity})).reduce((function(t,a){return t+a}),0)},getCartProductList:function(t){return t.products}},mutations:{addProduct:function(t,a){t.products.push(a)},updateCartProductList:function(t,a){t.products=a},callAlert:function(t,a){t.alert=a},setPageLoading:function(t,a){t.pageLoading=a}},actions:{addProduct:function(t,a){t.commit("addProduct",a)},callAlertSuccess:function(t,a){var r={message:a.message,variantColor:"success",showAlert:!0};t.commit("callAlert",r),setTimeout((function(){r.showAlert=!1,t.commit("callAlert",r)}),a.time)},callAlertError:function(t,a){var r={message:a.message,variantColor:"danger",showAlert:!0};t.commit("callAlert",r),setTimeout((function(){r.showAlert=!1,t.commit("callAlert",r)}),a.time)}},modules:{}});o["default"].use(e["a"]),o["default"].use(n["a"]),o["default"].filter("currency",(function(t){return"R$ ".concat(parseFloat(t).toFixed(2).replace(".",","))})),o["default"].config.productionTip=!1,new o["default"]({router:B,store:Q,i18n:L,render:function(t){return t(A)}}).$mount("#app")},"5c0b":function(t,a,r){"use strict";var e=r("9c0c"),n=r.n(e);n.a},"940f":function(t,a,r){},"9c0c":function(t,a,r){},a221:function(t,a,r){},a3ec:function(t,a,r){"use strict";var e=r("940f"),n=r.n(e);n.a},b9f2:function(t,a,r){"use strict";var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"card-list"},[t.landscape?r("div",[r("transition-group",{attrs:{tag:"div","enter-active-class":"animated fadeInUp",appear:""}},t._l(t.products,(function(t,a){return r("CardLandscape",{key:"teste-"+a,attrs:{product:t}})})),1),r("b-card",{staticClass:"card-list-landscape"},[r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{md:"12"}},[r("div",{staticClass:"price"},[r("span",{staticClass:"text"},[t._v(t._s(t.$t("app.card.amount")))]),r("span",{staticClass:"value"},[t._v(t._s(t._f("currency")(t.totalAmountCart)))])])])],1)],1)],1)],1):r("div",[r("b-row",t._l(t.products,(function(t,a){return r("Card",{key:a,attrs:{product:t,indexItem:a}})})),1)],1)])},n=[],o=r("5530"),s=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("b-col",{attrs:{md:"3",sm:"6",xs:"12"}},[r("div",{staticClass:"srn-card"},[r("b-card",{staticStyle:{"max-width":"20rem"},attrs:{"no-body":"","img-src":t.product.imageURL,"img-alt":"Image","img-top":""}},[r("b-card-body",{staticClass:"content"},[r("b-card-text",[t._v(" "+t._s(t.product.name)+" ")])],1),r("div",{ref:"middle-content-footer"},[t.warningMessageHeight>0?r("div",{staticClass:"warning-message",class:{start:t.warningMessageHeight>0},style:{height:t.warningMessageHeight+"px"}},[r("b-button",{staticClass:"mb-2 btn-small-icon warning-close",attrs:{size:"sm",variant:"dark"},on:{click:function(a){t.warningMessageHeight=0}}},[r("b-icon",{attrs:{icon:"x","aria-hidden":"true"}})],1),r("div",{staticClass:"warning-content",style:{height:t.warningMessageHeight+"px"}},[0===t.product.quantityAvailable?r("div",{staticClass:"message"},[t._v(" "+t._s(t.$t("app.card.warning.outOfStock"))+" ")]):r("div",{staticClass:"message"},[t._v(" "+t._s(t.$t("app.card.warning.latestUnits"))+" ")])])],1):t._e(),r("b-list-group",[r("b-list-group-item",{staticClass:"middle-content"},[r("div",{staticClass:"sku"},[r("div",{staticClass:"text"},[t._v(t._s(t.$t("app.card.sku")))]),r("div",{staticClass:"value"},[t._v(t._s(t.product.sku))])]),r("div",{staticClass:"category"},[r("div",{staticClass:"text"},[t._v(t._s(t.$t("app.card.category")))]),r("div",{staticClass:"value"},[t._v(t._s(t.product.category))])]),r("div",{staticClass:"maker"},[r("div",{staticClass:"text"},[t._v(t._s(t.$t("app.card.maker")))]),r("div",{staticClass:"value"},[t._v(t._s(t.product.maker))])]),r("div",{staticClass:"quantity"},[r("div",{staticClass:"text"},[t._v(t._s(t.$t("app.card.quantity")))]),r("div",{staticClass:"value-buttons-content"},[r("span",{staticClass:"value"},[t._v(t._s(t.quantity))]),r("b-button",{staticClass:"mb-2 btn-small-icon success",attrs:{size:"sm",variant:"success",disabled:t.quantity===t.product.quantityAvailable||0===t.product.quantityAvailable},on:{click:function(a){return t.addQuantity()}}},[r("b-icon",{attrs:{icon:"plus","aria-hidden":"true"}})],1),r("b-button",{staticClass:"mb-2 btn-small-icon danger",attrs:{size:"sm",variant:"danger",disabled:1===t.quantity||0===t.product.quantityAvailable},on:{click:function(a){return t.deductQuantity()}}},[r("b-icon",{attrs:{icon:"dash","aria-hidden":"true"}})],1)],1)]),r("div",{staticClass:"available"},[r("div",{staticClass:"text"},[t._v(t._s(t.$t("app.card.available")))]),r("div",{staticClass:"value"},[t._v(" "+t._s(t.product.quantityAvailable)+" "),t.product.quantityAvailable<10?r("span",{staticClass:"icon-envelope"},[r("b-icon",{attrs:{icon:"envelope-fill","aria-hidden":"true",variant:t.product.quantityAvailable<10?0===t.product.quantityAvailable?"danger":"warning":"secondary"},on:{click:function(a){return t.showWarningMessage()}}})],1):t._e()])]),r("div",{staticClass:"price"},[r("div",{staticClass:"text"},[t._v(t._s(t.$t("app.card.price")))]),r("div",{staticClass:"value"},[t._v(t._s(t._f("currency")(t.product.price)))])]),r("div",{staticClass:"amount"},[r("div",{staticClass:"text"},[t._v(t._s(t.$t("app.card.amount")))]),r("div",{staticClass:"value"},[t._v(" "+t._s(t._f("currency")(t.product.price*t.quantity))+" ")])])])],1),r("b-card-body",{staticClass:"footer"},[r("b-button",{attrs:{variant:"primary",disabled:0===t.product.quantityAvailable||t.buttonLoading},on:{click:function(a){return t.addProductCart()}}},[t.buttonLoading?r("b-spinner",{attrs:{small:""}}):r("span",[t._v(t._s(t.$t("app.buttons.add")))])],1)],1)],1)],1)],1)])},i=[],c=(r("4de4"),r("d3b7"),r("1e35")),u=r("2f62"),d={props:{product:{default:function(){return{sku:"",name:"",imageURL:"",category:"",maker:"",quantityAvailable:0,price:0}},type:Object}},data:function(){return{quantity:1,warningMessageHeight:0,buttonLoading:!1}},methods:Object(o["a"])({},Object(u["b"])(["addProduct","callAlertSuccess","callAlertError"]),{},Object(u["c"])(["getCartProductList"]),{addProductCart:function(){var t=this;this.buttonLoading=!0,c["a"].insertProductCart({quantity:this.quantity,sku:this.product.sku}).then((function(){return t.addProductCartSuccess()})).catch((function(){return t.callAlertError({message:t.$t("app.product.warning.error.addProductCart"),time:3e3})})).finally((function(){return t.buttonLoading=!1}))},addProductCartSuccess:function(){var t=this.searchProductCart(this.product.sku);console.log(t),t.length?this.callAlertError({message:this.$t("app.product.warning.success.productAlreadyAdded"),time:5e3}):(this.productNotFoundCart(this.product.sku).length||this.addProduct({product:this.product,quantity:this.quantity}),this.callAlertSuccess({message:this.$t("app.product.warning.success.productAddedCart"),time:3e3}))},showWarningMessage:function(){this.warningMessageHeight=this.$refs["middle-content-footer"].clientHeight},addQuantity:function(){this.quantity++},deductQuantity:function(){this.quantity--},searchProductCart:function(t){var a=this;return this.getCartProductList().filter((function(r){return r.product.sku===t&&r.quantity===a.quantity}))},productNotFoundCart:function(t){return this.getCartProductList().filter((function(a){return a.product.sku===t}))}})},l=d,p=(r("0f71"),r("2877")),v=Object(p["a"])(l,s,i,!1,null,null,null),f=v.exports,m=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"srn-card-landscape"},[r("b-card",{staticClass:"card-landscape",attrs:{"no-body":"","img-src":t.product.product.imageURL,"img-alt":"Image","img-top":""}},[r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{md:"5"}},[r("div",[t._v(t._s(t.product.product.name))]),r("div",[t._v(t._s(t.$t("app.card.sku"))+": "+t._s(t.product.product.sku))]),r("div",[t._v(" "+t._s(t.$t("app.card.category"))+": "+t._s(t.product.product.category)+" ")]),r("div",[t._v(t._s(t.$t("app.card.maker"))+": "+t._s(t.product.product.maker))])]),r("b-col",{attrs:{md:"5"}},[r("div",[t._v(" "+t._s(t.$t("app.card.available"))+": "+t._s(t.product.product.quantityAvailable)+" ")]),r("div",[t._v(t._s(t.$t("app.card.quantity"))+": "+t._s(t.product.quantity))]),r("div",[t._v(" "+t._s(t.$t("app.card.price"))+": "),r("span",{staticClass:"price"},[t._v(t._s(t._f("currency")(t.product.product.price)))])]),r("div",[t._v(" "+t._s(t.$t("app.card.amount"))+": "),r("span",{staticClass:"price"},[t._v(" "+t._s(t._f("currency")(t.product.quantity*t.product.product.price)))])])]),r("b-col",{attrs:{md:"2"}},[r("div",{staticClass:"icon-trash"},[t.buttonLoading?r("b-spinner",{attrs:{small:""}}):r("b-icon",{attrs:{icon:"Trash","aria-hidden":"true",variant:t.colorTrash},on:{mouseover:function(a){t.colorTrash="danger"},mouseleave:function(a){t.colorTrash="secondary"},click:function(a){return t.removeProductCart(t.product.product.sku)}}})],1)])],1)],1)],1)],1)},g=[],h={props:{product:{type:Object}},data:function(){return{quantity:1,colorTrash:"secondary",buttonLoading:!1}},methods:Object(o["a"])({},Object(u["b"])(["callAlertSuccess","callAlertError"]),{},Object(u["c"])(["getCartProductList"]),{},Object(u["d"])(["updateCartProductList"]),{removeProductCart:function(t){var a=this;this.buttonLoading=!0,c["a"].removeProductCart(t).then((function(){return a.removeProductCartSuccess()})).catch((function(){return a.callAlertError({message:a.$t("app.shoppingList.warning.error.removeProductCart"),time:3e3})})).finally((function(){return a.buttonLoading=!1}))},removeProductCartSuccess:function(){var t=this.removeProduct(this.product.product.sku);this.updateCartProductList(t),this.callAlertSuccess({message:this.$t("app.shoppingList.warning.success.removeProductCart"),time:3e3})},removeProduct:function(t){return this.getCartProductList().filter((function(a){return a.product.sku!==t}))}})},b=h,C=(r("50e5"),Object(p["a"])(b,m,g,!1,null,null,null)),y=C.exports,_={components:{Card:f,CardLandscape:y},data:function(){return{productList:[]}},computed:Object(o["a"])({},Object(u["c"])(["totalAmountCart"])),props:{products:{type:Array,default:function(){return[]}},landscape:{type:Boolean,default:function(){return!1}}}},P=_,w=(r("a3ec"),Object(p["a"])(P,e,n,!1,null,null,null));a["a"]=w.exports},c3e4:function(t,a,r){"use strict";r.d(a,"a",(function(){return o}));var e=r("bc3a"),n=r.n(e),o=n.a.create({baseURL:"http://test.cfarma.cc/api/"})},cf3c:function(t,a,r){},d0f6:function(t,a,r){},f4c5:function(t,a,r){t.exports=r.p+"img/flag-usa.d0972b2b.png"}});
//# sourceMappingURL=app.dcfb79d1.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd2ae"],{"2b9a":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",t._l(t.products,(function(s){return a("div",{key:s.id_product},[t.pathId==s.id_product?a("div",[t._m(0,!0),a("div",{staticClass:"slider"},[t._m(1,!0),a("img",{staticClass:"product__img",attrs:{src:t.imgCatalog+s.img_name,alt:"Some img"}}),t._m(2,!0)]),a("section",{staticClass:"product_description"},[a("h2",[t._v("Men collection")]),a("div",{staticClass:"border-h3"}),a("h3",[t._v(t._s(s.product_name))]),a("p",{staticClass:"main-description"},[t._v("Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.")]),t._m(3,!0),a("p",{staticClass:"description-price"},[t._v("$"),a("span",[t._v(t._s(s.price))])]),t._m(4,!0)]),t._m(5,!0)]):t._e()])})),0)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"breadcrumb center"},[a("h2",{staticClass:"header__breadcrumb"},[t._v("new arrivals")]),a("ul",{staticClass:"ul__breadcrumb"},[a("a",{staticClass:"link__breadcrumb",attrs:{href:"index.html"}},[a("li",{staticClass:"list__breadcrumb"},[t._v("Home /")])]),a("a",{staticClass:"link__breadcrumb",attrs:{href:"product.html"}},[a("li",{staticClass:"list__breadcrumb"},[t._v("Men /")])]),a("li",{staticClass:"list__breadcrumb"},[t._v("New Arrivals")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"slider_arrow",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-angle-left"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"slider_arrow",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-angle-right"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"p-description"},[a("p",[t._v("MATERIAL: "),a("span",[t._v("COTTON")])]),a("p",[t._v("DESIGNER: "),a("span",[t._v("BINBURHAN")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"description-order"},[a("div",{staticClass:"choose_color"},[a("h3",[t._v("CHOOSE COLOR")]),a("label",{staticClass:"description__filter"},[a("select",[a("option",[t._v("Red")]),a("option",[t._v("Green")]),a("option",[t._v("Blue")])])])]),a("div",{staticClass:"choose_size"},[a("h3",[t._v("CHOOSE SIZE")]),a("label",{staticClass:"description__filter"},[a("select",[a("option",[t._v("XXL")]),a("option",[t._v("S")]),a("option",[t._v("M")])])])]),a("div",{staticClass:"quantity"},[a("h3",[t._v("QUANTITY")]),a("label",{staticClass:"description__filter"},[a("select",[a("option",[t._v("1")]),a("option",[t._v("2")]),a("option",[t._v("3")])])])]),a("a",{staticClass:"description-add",attrs:{href:"#"}},[a("img",{attrs:{src:"/img/2587.png",alt:"cart_pink"}}),t._v("Add to Cart")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"like_also center"},[a("h3",{staticClass:"like_also_h3"},[t._v("you may like also")]),a("div",{staticClass:"card_also"},[a("div",{staticClass:"also_img"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"/img/2781.png",alt:"photo product 1"}})])]),a("div",{staticClass:"product__content"},[a("a",{staticClass:"product__name",attrs:{href:""}},[t._v("Mango People T-shirt ")]),a("p",{staticClass:"product__price"},[t._v("$52.00")])]),t._v(" "),a("a",{staticClass:"product__add",attrs:{href:""}},[t._v("Add to Cart")])]),a("div",{staticClass:"card_also"},[a("div",{staticClass:"also_img"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"/img/2782.png",alt:"photo product 1"}})])]),a("div",{staticClass:"product__content"},[a("a",{staticClass:"product__name",attrs:{href:""}},[t._v("Mango People T-shirt ")]),a("p",{staticClass:"product__price"},[t._v("$52.00")])]),t._v(" "),a("a",{staticClass:"product__add",attrs:{href:""}},[t._v("Add to Cart")])]),a("div",{staticClass:"card_also"},[a("div",{staticClass:"also_img"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"/img/2783.png",alt:"photo product 1"}})])]),a("div",{staticClass:"product__content"},[a("a",{staticClass:"product__name",attrs:{href:""}},[t._v("Mango People T-shirt ")]),a("p",{staticClass:"product__price"},[t._v("$52.00")])]),t._v(" "),a("a",{staticClass:"product__add",attrs:{href:""}},[t._v("Add to Cart")])]),a("div",{staticClass:"card_also"},[a("div",{staticClass:"also_img"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"/img/2772.png",alt:"photo product 1"}})])]),a("div",{staticClass:"product__content"},[a("a",{staticClass:"product__name",attrs:{href:""}},[t._v("Mango People T-shirt ")]),a("p",{staticClass:"product__price"},[t._v("$52.00")])]),t._v(" "),a("a",{staticClass:"product__add",attrs:{href:""}},[t._v("Add to Cart")])])])}],r=a("5530"),c=a("2f62"),l={name:"MoreDetails",data:function(){return{pathId:this.$route.params.id}},methods:Object(r["a"])({},Object(c["b"])(["getJson"])),computed:Object(c["c"])(["filtered","products","imgCatalog"]),mounted:function(){this.getJson("/api/products")}},o=l,_=a("2877"),d=Object(_["a"])(o,i,e,!1,null,null,null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0bd2ae.e3792d09.js.map
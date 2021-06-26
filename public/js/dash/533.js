(self.webpackChunk=self.webpackChunk||[]).push([[533],{6078:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});const s={name:"DisplayCard"};const i=(0,r(1900).Z)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card my-4 text-dark"},[t.$slots.header?r("div",{staticClass:"card-header bg-dark text-light pt-3"},[t._t("header")],2):t._e(),t._v(" "),r("div",{staticClass:"card-body"},[t._t("default")],2)])}),[],!1,null,null,null).exports},6533:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>u});var s=r(6078),i=r(629),n=r(6486);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const l={name:"ScreenMovieIndex",components:{DisplayCard:s.Z},computed:a(a({},(0,i.rn)("library",["movies"])),{},{moviesByUpdated:function(){return this.movies.length<=1?this.movies:(0,n.cloneDeep)(this.movies).sort((function(t,e){return t.updated_at<e.updated_at?1:-1}))}}),created:function(){this.initMovies().then((function(t){console.debug("Init movies result: ",t)}))},methods:a(a({},(0,i.nv)("library",["initMovies"])),{},{editMovie:function(t){this.$router.push("/movie/"+t.id)}})};const u=(0,r(1900).Z)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-3"},[r("display-card",{scopedSlots:t._u([{key:"header",fn:function(){return[r("h1",{staticClass:"mt-4"},[t._v("\n\t\t\t\tBrowse Movies\n\t\t\t")])]},proxy:!0}])},[t._v(" "),r("ul",{staticClass:"list-group list-group-flush"},t._l(t.moviesByUpdated,(function(e){return r("li",{staticClass:"list-group-item px-0"},[r("div",{staticClass:"media",staticStyle:{cursor:"pointer"},on:{click:function(r){return r.stopPropagation(),t.editMovie(e)}}},[r("img",{staticClass:"img-thumbnail border-0",style:{width:"8rem",height:"6rem","object-fit":"cover"},attrs:{alt:"Poster image for "+e.name+".",src:"/storage/"+e.poster}}),t._v(" "),r("div",{staticClass:"media-content"},[r("h5",[t._v(t._s(e.name))]),t._v(" "),r("button",{staticClass:"btn btn-sm btn-danger"},[t._v("Delete")])])])])})),0),t._v(" "),r("div",{staticClass:"my-3"},[r("router-link",{staticClass:"btn btn-primary",attrs:{to:{path:"/movie"}}},[t._v("Add Movie")])],1)])],1)}),[],!1,null,null,null).exports}}]);
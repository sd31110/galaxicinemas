(self.webpackChunk=self.webpackChunk||[]).push([[130],{6078:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const s={name:"DisplayCard"};const n=(0,r(1900).Z)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card my-4 text-dark"},[t.$slots.header?r("div",{staticClass:"card-header bg-dark text-light pt-3"},[t._t("header")],2):t._e(),t._v(" "),r("div",{staticClass:"card-body"},[t._t("default")],2)])}),[],!1,null,null,null).exports},4130:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>o});var s=r(629);function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const i={name:"ScreenIndex",components:{DisplayCard:r(6078).Z},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},(0,s.rn)("account",["user"]))};const o=(0,r(1900).Z)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-3"},[r("h1",{staticClass:"my-4"},[t._v("\n\t\tWelcome to the dashboard, "+t._s(t.user.name)+"!\n\t")]),t._v(" "),r("display-card",{scopedSlots:t._u([{key:"header",fn:function(){return[r("h3",[t._v("Movies")])]},proxy:!0}])},[t._v(" "),r("p",[t._v("There are (x) movies in the database.")]),t._v(" "),r("div",{staticClass:"btn-group"},[r("router-link",{staticClass:"btn btn-primary",attrs:{to:{path:"/movie"}}},[t._v("Add Movie")]),t._v(" "),r("router-link",{staticClass:"btn btn-primary",attrs:{to:{path:"/movies"}}},[t._v("Browse Movies")]),t._v(" "),r("router-link",{staticClass:"btn btn-primary",attrs:{to:{path:"/showtimes"}}},[t._v("Manage Showtimes")])],1)]),t._v(" "),r("display-card",{scopedSlots:t._u([{key:"header",fn:function(){return[r("h3",[t._v("Settings")])]},proxy:!0}])},[t._v(" "),r("p",[t._v("Configure the website.")]),t._v(" "),r("div",{staticClass:"btn-group"},[r("router-link",{staticClass:"btn btn-primary",attrs:{to:{path:"/settings"}}},[t._v("Manage Settings")])],1)])],1)}),[],!1,null,null,null).exports}}]);
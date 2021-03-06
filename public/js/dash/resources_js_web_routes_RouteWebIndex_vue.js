(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_web_routes_RouteWebIndex_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/common/components/elements/DisplayMoviePoster.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/common/components/elements/DisplayMoviePoster.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DisplayMoviePoster',
  props: {
    movie: {
      type: Object,
      required: true
    },
    width: {
      type: [Number, String],
      "default": 140
    },
    height: {
      type: [Number, String],
      "default": 200
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/common/components/elements/DisplayMovieTeaser.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/common/components/elements/DisplayMovieTeaser.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_DisplayMoviePoster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elements/DisplayMoviePoster */ "./resources/js/common/components/elements/DisplayMoviePoster.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DisplayMovieTeaser',
  components: {
    DisplayMoviePoster: _elements_DisplayMoviePoster__WEBPACK_IMPORTED_MODULE_0__.default
  },
  props: {
    movie: {
      type: Object,
      required: true
    },
    showTitles: {
      type: Boolean,
      "default": true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/routes/RouteWebIndex.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/routes/RouteWebIndex.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_DisplayMovieTeaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elements/DisplayMovieTeaser */ "./resources/js/common/components/elements/DisplayMovieTeaser.vue");
/* harmony import */ var _helpers_Dummy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @helpers/Dummy.js */ "./resources/js/common/helpers/Dummy.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'RouteWebIndex',
  components: {
    DisplayMovieTeaser: _elements_DisplayMovieTeaser__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      movies: _helpers_Dummy_js__WEBPACK_IMPORTED_MODULE_1__.default.movies
    };
  },
  methods: {
    loadMovieDetails: function loadMovieDetails(movie) {
      this.$router.push('/movie/' + movie.id);
    }
  }
});

/***/ }),

/***/ "./resources/js/common/helpers/Dummy.js":
/*!**********************************************!*\
  !*** ./resources/js/common/helpers/Dummy.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*

	Just a bunch of dummy data.

*/
var DummyHelper = function DummyHelper() {//

  _classCallCheck(this, DummyHelper);

  _defineProperty(this, "movies", [{
    id: 'dummy_movie-1',
    name: 'Movie One',
    rating: 'PG',
    description: 'A really great movie.',
    duration: 123,
    release_date: '2021-01-01'
  }, {
    id: 'dummy_movie-2',
    name: 'Movie Two',
    rating: 'R',
    description: 'An okay movie.',
    duration: 234,
    release_date: '2021-02-01'
  }, {
    id: 'dummy_movie-3',
    name: 'Movie Three: With a Particularly Long Title',
    rating: 'PG',
    description: 'The title is better than the movie in this case.',
    duration: 144,
    release_date: '2021-03-01'
  }, {
    id: 'dummy_movie-4',
    name: 'Movie Four',
    rating: 'G',
    description: 'If you have nothing better to see, this will do.',
    duration: 140,
    release_date: '2021-05-01'
  }, {
    id: 'dummy_movie-5',
    name: 'Movie Five Forever',
    rating: 'R',
    description: 'A great movie, great soundtrack, really great story and everything else.',
    duration: 150,
    release_date: '2021-07-01'
  }, {
    id: 'dummy_movie-6',
    name: 'Movie Six',
    rating: 'PG-13',
    description: 'An okay movie with a lot of stuff that happens.',
    duration: 180,
    release_date: '2021-08-01'
  }]);
};

var instance = new DummyHelper();
Object.freeze(instance);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ }),

/***/ "./resources/js/common/components/elements/DisplayMoviePoster.vue":
/*!************************************************************************!*\
  !*** ./resources/js/common/components/elements/DisplayMoviePoster.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayMoviePoster_vue_vue_type_template_id_4828f160___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayMoviePoster.vue?vue&type=template&id=4828f160& */ "./resources/js/common/components/elements/DisplayMoviePoster.vue?vue&type=template&id=4828f160&");
/* harmony import */ var _DisplayMoviePoster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisplayMoviePoster.vue?vue&type=script&lang=js& */ "./resources/js/common/components/elements/DisplayMoviePoster.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _DisplayMoviePoster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DisplayMoviePoster_vue_vue_type_template_id_4828f160___WEBPACK_IMPORTED_MODULE_0__.render,
  _DisplayMoviePoster_vue_vue_type_template_id_4828f160___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/common/components/elements/DisplayMoviePoster.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/common/components/elements/DisplayMovieTeaser.vue":
/*!************************************************************************!*\
  !*** ./resources/js/common/components/elements/DisplayMovieTeaser.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayMovieTeaser_vue_vue_type_template_id_5fa992d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayMovieTeaser.vue?vue&type=template&id=5fa992d3& */ "./resources/js/common/components/elements/DisplayMovieTeaser.vue?vue&type=template&id=5fa992d3&");
/* harmony import */ var _DisplayMovieTeaser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisplayMovieTeaser.vue?vue&type=script&lang=js& */ "./resources/js/common/components/elements/DisplayMovieTeaser.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _DisplayMovieTeaser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DisplayMovieTeaser_vue_vue_type_template_id_5fa992d3___WEBPACK_IMPORTED_MODULE_0__.render,
  _DisplayMovieTeaser_vue_vue_type_template_id_5fa992d3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/common/components/elements/DisplayMovieTeaser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/web/routes/RouteWebIndex.vue":
/*!***************************************************!*\
  !*** ./resources/js/web/routes/RouteWebIndex.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RouteWebIndex_vue_vue_type_template_id_b96ba60a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RouteWebIndex.vue?vue&type=template&id=b96ba60a& */ "./resources/js/web/routes/RouteWebIndex.vue?vue&type=template&id=b96ba60a&");
/* harmony import */ var _RouteWebIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RouteWebIndex.vue?vue&type=script&lang=js& */ "./resources/js/web/routes/RouteWebIndex.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _RouteWebIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _RouteWebIndex_vue_vue_type_template_id_b96ba60a___WEBPACK_IMPORTED_MODULE_0__.render,
  _RouteWebIndex_vue_vue_type_template_id_b96ba60a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/web/routes/RouteWebIndex.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/common/components/elements/DisplayMoviePoster.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/common/components/elements/DisplayMoviePoster.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayMoviePoster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DisplayMoviePoster.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/common/components/elements/DisplayMoviePoster.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayMoviePoster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/common/components/elements/DisplayMovieTeaser.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/common/components/elements/DisplayMovieTeaser.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayMovieTeaser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DisplayMovieTeaser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/common/components/elements/DisplayMovieTeaser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayMovieTeaser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/web/routes/RouteWebIndex.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/web/routes/RouteWebIndex.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RouteWebIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RouteWebIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/routes/RouteWebIndex.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RouteWebIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/common/components/elements/DisplayMoviePoster.vue?vue&type=template&id=4828f160&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/common/components/elements/DisplayMoviePoster.vue?vue&type=template&id=4828f160& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayMoviePoster_vue_vue_type_template_id_4828f160___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayMoviePoster_vue_vue_type_template_id_4828f160___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayMoviePoster_vue_vue_type_template_id_4828f160___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DisplayMoviePoster.vue?vue&type=template&id=4828f160& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/common/components/elements/DisplayMoviePoster.vue?vue&type=template&id=4828f160&");


/***/ }),

/***/ "./resources/js/common/components/elements/DisplayMovieTeaser.vue?vue&type=template&id=5fa992d3&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/common/components/elements/DisplayMovieTeaser.vue?vue&type=template&id=5fa992d3& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayMovieTeaser_vue_vue_type_template_id_5fa992d3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayMovieTeaser_vue_vue_type_template_id_5fa992d3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayMovieTeaser_vue_vue_type_template_id_5fa992d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DisplayMovieTeaser.vue?vue&type=template&id=5fa992d3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/common/components/elements/DisplayMovieTeaser.vue?vue&type=template&id=5fa992d3&");


/***/ }),

/***/ "./resources/js/web/routes/RouteWebIndex.vue?vue&type=template&id=b96ba60a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/web/routes/RouteWebIndex.vue?vue&type=template&id=b96ba60a& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RouteWebIndex_vue_vue_type_template_id_b96ba60a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RouteWebIndex_vue_vue_type_template_id_b96ba60a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RouteWebIndex_vue_vue_type_template_id_b96ba60a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RouteWebIndex.vue?vue&type=template&id=b96ba60a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/routes/RouteWebIndex.vue?vue&type=template&id=b96ba60a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/common/components/elements/DisplayMoviePoster.vue?vue&type=template&id=4828f160&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/common/components/elements/DisplayMoviePoster.vue?vue&type=template&id=4828f160& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("figure", { staticClass: "movie-poster" }, [
    _c("img", {
      attrs: {
        alt: "Movie poster for " + _vm.movie.name + ".",
        src: "/images/" + _vm.movie.id + ".jpg",
        width: _vm.width,
        height: _vm.height
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/common/components/elements/DisplayMovieTeaser.vue?vue&type=template&id=5fa992d3&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/common/components/elements/DisplayMovieTeaser.vue?vue&type=template&id=5fa992d3& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "movie movie-teaser" },
    [
      _c("display-movie-poster", { attrs: { movie: _vm.movie } }),
      _vm._v(" "),
      _vm.showTitles
        ? [
            _c("h3", { staticClass: "movie-title" }, [
              _vm._v("\n\t\t\t" + _vm._s(_vm.movie.name) + "\n\t\t")
            ]),
            _vm._v(" "),
            _c("p", [
              _c(
                "strong",
                { staticClass: "movie-rating badge bg-light text-dark" },
                [_vm._v("\n\t\t\t\t" + _vm._s(_vm.movie.rating) + "\n\t\t\t")]
              ),
              _vm._v(" "),
              _c("var", { staticClass: "movie-duration" }, [
                _vm._v(
                  "\n\t\t\t\t" + _vm._s(_vm.movie.duration) + " minutes\n\t\t\t"
                )
              ])
            ])
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/routes/RouteWebIndex.vue?vue&type=template&id=b96ba60a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/routes/RouteWebIndex.vue?vue&type=template&id=b96ba60a& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "ul",
      { staticClass: "list-group list-group-grid" },
      _vm._l(_vm.movies, function(movie) {
        return _c(
          "li",
          {
            key: movie.id,
            staticClass: "list-group-item list-group-item-link",
            on: {
              click: function($event) {
                return _vm.loadMovieDetails(movie)
              }
            }
          },
          [
            _c("display-movie-teaser", {
              attrs: { movie: movie, "show-titles": false }
            })
          ],
          1
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
webpackJsonp([1],{

/***/ 125:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/ducks.51027cd.png";

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(126)
}
var Component = __webpack_require__(28)(
  /* script */
  __webpack_require__(74),
  /* template */
  __webpack_require__(132),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4e591bd0",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(125)
}
var Component = __webpack_require__(28)(
  /* script */
  __webpack_require__(75),
  /* template */
  __webpack_require__(131),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4307ad7a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "content"
  }, [_c('el-col', {
    attrs: {
      "xs": 24,
      "sm": {
        span: 6,
        offset: 9
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(128)
    }
  }), _vm._v(" "), _c('h1', [_vm._v("探寻日常中的奇迹")]), _vm._v(" "), _c('el-row', [_c('el-input', {
    attrs: {
      "placeholder": "账号",
      "type": "text"
    },
    model: {
      value: (_vm.account),
      callback: function($$v) {
        _vm.account = $$v
      },
      expression: "account"
    }
  }), _vm._v(" "), _c('el-input', {
    attrs: {
      "placeholder": "密码",
      "type": "password"
    },
    model: {
      value: (_vm.password),
      callback: function($$v) {
        _vm.password = $$v
      },
      expression: "password"
    }
  }), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.loginYiYu
    }
  }, [_vm._v("不登录，直接查看计算器")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "content",
    attrs: {
      "span": 12,
      "offset": 6
    }
  }, [_c('el-row', {
    attrs: {
      "type": "flex",
      "justify": "center"
    }
  }, [_c('h3', [_vm._v("全国中学生第一套普通计算器")])]), _vm._v(" "), _c('el-row', {
    attrs: {
      "type": "flex",
      "justify": "center"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "text",
      "value": _vm.calculNum,
      "readonly": ""
    }
  }, [_c('template', {
    slot: "prepend"
  }, [_vm._v("Result = ")])], 2)], 1), _vm._v(" "), _c('el-row', {
    attrs: {
      "type": "flex",
      "justify": "center"
    }
  }, [_c('span')]), _vm._v(" "), _c('el-row', {
    attrs: {
      "type": "flex",
      "justify": "center"
    }
  }, _vm._l((_vm.nums), function(num) {
    return _c('input-num', {
      key: num,
      attrs: {
        "value": num
      },
      on: {
        "getNum": _vm.typeExp
      }
    })
  })), _vm._v(" "), _c('el-row', {
    attrs: {
      "type": "flex",
      "justify": "center"
    }
  }, _vm._l((_vm.singleOpes), function(singleOpe) {
    return _c('input-single-operator', {
      key: singleOpe,
      attrs: {
        "value": singleOpe
      },
      on: {
        "getSingleOpe": _vm.typeSingleOpe
      }
    })
  })), _vm._v(" "), _c('el-row', {
    attrs: {
      "type": "flex",
      "justify": "center"
    }
  }, [_vm._l((_vm.biOpes), function(biOpe) {
    return _c('input-bi-operator', {
      key: biOpe,
      attrs: {
        "value": biOpe
      },
      on: {
        "getBiOpe": _vm.typeBiOpe
      }
    })
  }), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.calculateResult
    }
  }, [_vm._v("=")])], 2)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Login__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Calculator__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Calculator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Calculator__);





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    name: 'Login',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Login___default.a
  }, {
    path: '/calculate',
    name: 'Calculator',
    component: __WEBPACK_IMPORTED_MODULE_3__components_Calculator___default.a
  }, {
    path: '*',
    redirect: '/'
  }]
}));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "/"))

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(127)
}
var Component = __webpack_require__(28)(
  /* script */
  __webpack_require__(73),
  /* template */
  __webpack_require__(133),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);

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
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Calculator',
  components: {
    'input-num': {
      props: ['value'],
      template: '<button @click="getNum(value)">{{value}}</button>',
      methods: {
        getNum: function getNum(value) {
          this.$emit('getNum', value);
        }
      }
    },
    'input-single-operator': {
      props: ['value'],
      template: '<button @click="getSingleOpe(value)">{{value}}</button>',
      methods: {
        getSingleOpe: function getSingleOpe(value) {
          this.$emit('getSingleOpe', value);
        }
      }
    },
    'input-bi-operator': {
      props: ['value'],
      template: '<button @click="getBiOpe(value)">{{value}}</button>',
      methods: {
        getBiOpe: function getBiOpe(value) {
          this.$emit('getBiOpe', value);
        }
      }
    }
  },
  data: function data() {
    return {
      calculNum: 0,
      lastBiope: null, // 保存上一个操作符
      exp: '', // 连接输入的数字和小数点，通过calculNum = parseFloat(exp) 转化成number
      flag: false, // 输入表达式的过程中用来判断中断输入时的依据：是否按下了=号，是否操作了单目运算
      s1: [], // 保存逆波兰表达式的栈
      s2: [], // 临时保存双目运算符的栈
      s3: [], // 遍历s1计算的值保存到s3中，以及最终的计算结果s3[0]
      siOperator: null, // 保存当前输入的单目运算符
      biOperator: null, // 保存当前输入的双目运算符
      signOpe: ['(', ['+', '-'], ['*', '/'], ')'], // 操作符的优先顺序，从小到大
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'],
      singleOpes: ['+/-', '%', 'x^2', 'x^3', 'ln', 'log10', 'AC'],
      biOpes: ['(', ')', '+', '-', '*', '/']
    };
  },

  watch: {
    // 转化exp为calculNum
    exp: function exp(newexp) {
      // 判断正常结构的exp如2.34等的正则
      var reg = /^\d+(?:\.[1,9])?$/g;
      if (reg.test(newexp)) {
        this.calculNum = parseFloat(newexp);
      } else if (newexp === '') {
        // 没有输入数字或者清空输入时exp = ''则 calculNum = 0
        this.calculNum = 0;
      } else {
        this.calculNum = newexp;
      }
    }
  },
  methods: {
    // 连接输入的数字
    typeExp: function typeExp(data) {
      // 判断是否中断了当前输入
      this.checkFlag();
      if (this.exp.indexOf('.') > -1 && data === '.') {
        this.exp = this.exp;
      } else if (this.exp === '' && data === '.') {
        // exp不能以.开头
        this.exp = '';
        this.$message('请先输入数字！');
      } else {
        this.exp += data;
      }
    },

    // 输入单目操作符
    typeSingleOpe: function typeSingleOpe(data) {
      this.siOperator = data;
      this.calSingleOpe(this.siOperator);
      // 单目计算时直接处理的是this.calculNum，此时this.exp！== this.calculNum，要强制相等，注意：exp是字符串
      this.exp = '' + this.calculNum;
      this.flag = true;
    },

    // 单目计算this.calculNum
    calSingleOpe: function calSingleOpe(ope) {
      switch (ope) {
        case '+/-':
          this.calculNum = this.calculNum * -1;
          break;
        case '%':
          this.calculNum = this.calculNum / 100;
          break;
        case 'x^2':
          this.calculNum = Math.pow(this.calculNum, 2);
          break;
        case 'x^3':
          this.calculNum = Math.pow(this.calculNum, 3);
          break;
        case 'ln':
          this.calculNum = Math.log(this.calculNum);
          break;
        case 'log10':
          this.calculNum = Math.log(this.calculNum) / Math.log(10);
          break;
        case 'AC':
          this.exp = '';
          this.calculNum = 0;
          this.s1 = [];
          this.s2 = [];
          this.s3 = [];
          break;
      }
    },

    // 输入双目操作符
    typeBiOpe: function typeBiOpe(data) {
      this.flag = false;
      this.lastBiope = this.biOperator;
      this.biOperator = data;
      console.log('this.lastBiope: ' + this.lastBiope + ', this.biOperator: ' + this.biOperator);
      // 双目运算符 ) 后面不是等号就是双目运算符，为了不push两次，先进行判断
      if (this.lastBiope !== ')') {
        // 双目运算符（ 前面也是双目运算符，为了不push两次，先进行判断
        if (data !== '(') {
          this.s1.push(this.calculNum);
        }
      }
      console.log(this.s1);
      this.pushBiopeToS2(data);
      this.exp = '';
    },

    // 按照规则将双目操作符存入栈s2中
    pushBiopeToS2: function pushBiopeToS2(curOpe) {
      // 操作符是（直接push进s2
      if (curOpe === '(') {
        this.s2.push(curOpe);
      } else if (curOpe === ')') {
        // 操作符是）且s2不为[],将s2中的操作符pop然后push到s1，直到遇到（
        while (this.s2[this.s2.length - 1] !== '(' && this.s2.length !== 0) {
          this.s1.push(this.s2.pop());
        }
        // pop出（ ，不push到s1
        this.s2.pop();
      } else {
        // 其他双目操作符：+-*／出栈s2入栈s1
        this.checkBiOpe(curOpe);
      }
    },

    // 当前双目操作符入栈s1/s2
    checkBiOpe: function checkBiOpe(curOpe) {
      if (this.s2.length === 0) {
        this.s2.push(curOpe);
      } else {
        var s2TopOpe = this.s2[this.s2.length - 1];
        if (this.checkBiOpeIndex(curOpe, s2TopOpe)) {
          this.s2.push(curOpe);
        } else {
          while (!this.checkBiOpeIndex(curOpe, s2TopOpe) && this.s2.length !== 0) {
            this.s1.push(this.s2.pop());
          }
          this.s2.push(curOpe);
        }
      }
    },

    // 从左到右遍历s1中的数字push到s3
    calculateS3: function calculateS3() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(this.s1), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          if (/\d+/.test(item)) {
            this.s3.push(item);
          } else {
            this.popS3(item);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },

    // 计算逆波兰表达式：+-*／部分的计算
    popS3: function popS3(biope) {
      var right = parseFloat(this.s3.pop());
      var left = parseFloat(this.s3.pop());
      var temp = void 0;
      switch (biope) {
        case '+':
          temp = left + right;
          break;
        case '-':
          temp = left - right;
          break;
        case '*':
          temp = left * right;
          break;
        case '/':
          temp = left / right;
          break;
      }
      this.s3.push(temp);
    },

    // 计算最终的结果
    calculateResult: function calculateResult() {
      this.flag = true;
      // 按下=时将this.calculNum存入s1,除了），因为 ）是双目运算符，有可能是一个表达式的结尾
      if (this.biOperator !== ')') {
        this.s1.push(this.calculNum);
      }
      while (this.s2.length !== 0) {
        this.s1.push(this.s2.pop());
      }
      console.log('calcul s1: ' + this.s1);
      this.calculateS3();
      this.exp = '' + this.s3[0];
      this.s1 = [];
      this.s3 = [];
    },

    // 检查中断输入的flag的boolean值
    checkFlag: function checkFlag() {
      if (this.flag === true) {
        this.exp = '';
        this.flag = !this.flag;
      }
    },

    // 比较当前操作符和s2栈顶操作符优先级的大小
    checkBiOpeIndex: function checkBiOpeIndex(curOpe, s2Ope) {
      var index1 = void 0;
      var index2 = void 0;
      for (var i in this.signOpe) {
        if (this.signOpe[i].indexOf(curOpe) > -1) {
          index1 = i;
        } else if (this.signOpe[i].indexOf(s2Ope) > -1) {
          index2 = i;
        }
      }
      if (index1 > index2) {
        return true;
      } else {
        return false;
      }
    }
  }
});

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Login',
  data: function data() {
    return {
      account: '',
      password: ''
    };
  },

  methods: {
    loginYiYu: function loginYiYu() {
      this.$router.push('/calculate');
    }
  }
});

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_default_index_css__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_default_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_default_index_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





// import store from './store/index.js'

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_element_ui___default.a); // 全局使用
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  // store,
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_1__App___default.a);
  }
});

/***/ })

},[76]);
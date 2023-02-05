"use strict";
(self["webpackChunkclass_generator_web"] = self["webpackChunkclass_generator_web"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _class_generator_class_generator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-generator/class-generator.component */ 2567);


class AppComponent {}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-class-generator");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n");
    }
  },
  dependencies: [_class_generator_class_generator_component__WEBPACK_IMPORTED_MODULE_0__.ClassGeneratorComponent],
  styles: [".delete-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbGV0ZS1pY29uXG4gICAgY3Vyc29yOiBwb2ludGVyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/pipes/first-letter-uppercase.pipe */ 8151);
/* harmony import */ var _shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/pipes/dash-to-camelcase.pipe */ 4079);
/* harmony import */ var _from_json_from_json_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./from-json/from-json.component */ 8342);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _to_json_to_json_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./to-json/to-json.component */ 9309);
/* harmony import */ var _copy_with_copy_with_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./copy-with/copy-with.component */ 7952);
/* harmony import */ var _enum_enum_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enum/enum.component */ 9452);
/* harmony import */ var _shared_pipes_parse_type_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/pipes/parse-type.pipe */ 8773);
/* harmony import */ var _from_to_enum_from_to_enum_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./from-to-enum/from-to-enum.component */ 5388);
/* harmony import */ var _shared_pipes_transform_to_formgroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/pipes/transform-to-formgroup */ 5711);
/* harmony import */ var _class_generator_class_generator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./class-generator/class-generator.component */ 2567);
/* harmony import */ var _class_generator_field_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./class-generator/field/field.component */ 4788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);





















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  providers: [_shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_1__.FirstLetterUppercasePipe, _shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_2__.DashToCamelcasePipe, _shared_pipes_parse_type_pipe__WEBPACK_IMPORTED_MODULE_7__.ParseTypePipe],
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_1__.FirstLetterUppercasePipe, _shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_2__.DashToCamelcasePipe, _from_json_from_json_component__WEBPACK_IMPORTED_MODULE_3__.FromJsonComponent, _to_json_to_json_component__WEBPACK_IMPORTED_MODULE_4__.ToJsonComponent, _copy_with_copy_with_component__WEBPACK_IMPORTED_MODULE_5__.CopyWithComponent, _enum_enum_component__WEBPACK_IMPORTED_MODULE_6__.EnumComponent, _shared_pipes_transform_to_formgroup__WEBPACK_IMPORTED_MODULE_9__.TransformToFormGroupPipe, _shared_pipes_parse_type_pipe__WEBPACK_IMPORTED_MODULE_7__.ParseTypePipe, _from_to_enum_from_to_enum_component__WEBPACK_IMPORTED_MODULE_8__.FromToEnumComponent, _class_generator_class_generator_component__WEBPACK_IMPORTED_MODULE_10__.ClassGeneratorComponent, _class_generator_field_field_component__WEBPACK_IMPORTED_MODULE_11__.FieldComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule]
  });
})();

/***/ }),

/***/ 2567:
/*!**************************************************************!*\
  !*** ./src/app/class-generator/class-generator.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassGeneratorComponent": () => (/* binding */ ClassGeneratorComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/enums/types.enum */ 6829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/pipes/first-letter-uppercase.pipe */ 8151);
/* harmony import */ var _shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/pipes/dash-to-camelcase.pipe */ 4079);
/* harmony import */ var _shared_services_define_types_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/define-types.service */ 7480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _from_json_from_json_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../from-json/from-json.component */ 8342);
/* harmony import */ var _to_json_to_json_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../to-json/to-json.component */ 9309);
/* harmony import */ var _copy_with_copy_with_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../copy-with/copy-with.component */ 7952);
/* harmony import */ var _enum_enum_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enum/enum.component */ 9452);
/* harmony import */ var _from_to_enum_from_to_enum_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../from-to-enum/from-to-enum.component */ 5388);
/* harmony import */ var _field_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./field/field.component */ 4788);
/* harmony import */ var _shared_pipes_transform_to_formgroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/pipes/transform-to-formgroup */ 5711);



















function ClassGeneratorComponent_mat_form_field_26_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r7.error);
  }
}
function ClassGeneratorComponent_mat_form_field_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "textarea", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, ClassGeneratorComponent_mat_form_field_26_div_4_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx_r0.json);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.error !== "");
  }
}
function ClassGeneratorComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "app-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("removeItem", function ClassGeneratorComponent_div_30_Template_app_field_removeItem_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11);
      const i_r9 = restoredCtx.index;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r10.removeItem(i_r9));
    })("addEnum", function ClassGeneratorComponent_div_30_Template_app_field_addEnum_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r12.addEnum($event));
    })("removeEnum", function ClassGeneratorComponent_div_30_Template_app_field_removeEnum_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r13.removeEnum($event));
    })("changeType", function ClassGeneratorComponent_div_30_Template_app_field_changeType_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11);
      const i_r9 = restoredCtx.index;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r14.changeIsList(i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "transormToFormGroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("field", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, field_r8));
  }
}
function ClassGeneratorComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r15 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\n    ", ctx_r2.getField(field_r15), ";\n  ");
  }
}
function ClassGeneratorComponent_app_from_to_enum_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-from-to-enum", 16);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("fields", ctx_r3.fields);
  }
}
function ClassGeneratorComponent_app_from_json_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-from-json", 10);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("fields", ctx_r4.fields)("className", ctx_r4.className.value);
  }
}
function ClassGeneratorComponent_app_to_json_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-to-json", 10);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("fields", ctx_r5.fields)("className", ctx_r5.className.value);
  }
}
function ClassGeneratorComponent_app_copy_with_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-copy-with", 10);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("fields", ctx_r6.fields)("className", ctx_r6.className.value);
  }
}
class ClassGeneratorComponent {
  constructor(_upperCase, _dashUpperCase, _defineTypeService) {
    this._upperCase = _upperCase;
    this._dashUpperCase = _dashUpperCase;
    this._defineTypeService = _defineTypeService;
    this.fields = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormArray([]);
    this.className = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', {
      nonNullable: true
    });
    this.json = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', {
      nonNullable: true
    });
    this.error = '';
    this.needFromJson = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(false, {
      nonNullable: true
    });
    this.needCopyWith = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(false, {
      nonNullable: true
    });
    this.needToJson = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(false, {
      nonNullable: true
    });
    this.fromJsonString = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(false, {
      nonNullable: true
    });
  }
  ngOnInit() {
    this.className.valueChanges.subscribe(value => {
      this.className.patchValue(this._upperCase.transform(value), {
        emitEvent: false
      });
    });
    this.json.valueChanges.subscribe(value => {
      try {
        this.fields = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormArray([]);
        const obj = JSON.parse(value);
        for (const key in obj) {
          this.defineAndAddType(obj[key], key);
        }
        this.error = '';
      } catch (e) {
        this.error = 'Incorrect json';
        this.fields = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormArray([]);
      }
    });
  }
  defineAndAddType(str, prop) {
    const isList = this._defineTypeService.isArray(str);
    const value = this._defineTypeService.isArray(str) && str[0] || str;
    if (this._defineTypeService.isNull(value)) {
      this.addField(prop, _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type.String, isList);
      return;
    }
    if (this._defineTypeService.isDouble(value)) {
      this.addField(prop, _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type.double, isList);
      return;
    }
    if (this._defineTypeService.isInt(value)) {
      this.addField(prop, _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type.int, isList);
      return;
    }
    if (this._defineTypeService.isString(value)) {
      this.addField(prop, _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type.String, isList);
      return;
    }
    if (this._defineTypeService.isDate(value)) {
      this.addField(prop, _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type.DateTime, isList);
      return;
    }
    if (this._defineTypeService.isObject(value)) {
      this.addField(prop.toLowerCase(), _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type.custom, isList, prop);
    }
  }
  getClassConstructor() {
    const constructor = this.fields?.controls.map((field, index) => {
      const {
        property
      } = field.value;
      const comma = index !== this.fields.length - 1 ? ',' : '';
      return `this.${this._dashUpperCase.transform(property)}${comma}`;
    }).join('');
    return `${this.className.value}({${constructor}});`;
  }
  changeIsList(index) {
    this.fields.controls[index].patchValue({
      isList: false
    });
  }
  getField(field) {
    return this._defineTypeService.getTypeProperty(field);
  }
  removeItem(index) {
    this.fields.removeAt(index);
  }
  removeEnum({
    field,
    index
  }) {
    field.get('enumValues').removeAt(index);
  }
  addField(property = '', type = _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type.int, isList = false, model = '') {
    this.fields.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
      isList: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(isList, {
        nonNullable: true
      }),
      enumValues: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormArray([]),
      property: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(property, {
        nonNullable: true
      }),
      type: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(type, {
        nonNullable: true
      }),
      modelName: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(model, {
        nonNullable: true
      }) // custom/enum name
    }));
  }

  addEnum(field) {
    field.get('enumValues')?.push(this.createEnum());
  }
  createEnum() {
    return new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
      json: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', {
        nonNullable: true
      }),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', {
        nonNullable: true
      })
    });
  }
}
ClassGeneratorComponent.ɵfac = function ClassGeneratorComponent_Factory(t) {
  return new (t || ClassGeneratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_1__.FirstLetterUppercasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_2__.DashToCamelcasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_services_define_types_service__WEBPACK_IMPORTED_MODULE_3__.DefineTypesService));
};
ClassGeneratorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: ClassGeneratorComponent,
  selectors: [["app-class-generator"]],
  decls: 54,
  vars: 18,
  consts: [[1, "tab-1", "mt-20"], ["matInput", "", "placeholder", "Enter class name", 3, "formControl"], ["color", "primary", 3, "formControl"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["style", "width: 500px", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "tab-1"], ["class", "tab-1", 4, "ngFor", "ngForOf"], [3, "fields", 4, "ngIf"], [3, "fields", "className", 4, "ngIf"], [3, "fields", "className"], [2, "width", "500px"], ["matInput", "", "placeholder", "Enter json", 2, "min-height", "100px", 3, "formControl"], ["style", "color: red", 4, "ngIf"], [2, "color", "red"], [3, "field", "removeItem", "addEnum", "removeEnum", "changeType"], [3, "fields"]],
  template: function ClassGeneratorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\n    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "mat-checkbox", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Need from json");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "mat-checkbox", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Need copy with");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "mat-checkbox", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "Need to json");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClassGeneratorComponent_Template_button_click_16_listener() {
        return ctx.addField();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "\n    Add field\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "\n    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "mat-checkbox", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, "From json string");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "\n    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](26, ClassGeneratorComponent_mat_form_field_26_Template, 6, 2, "mat-form-field", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "\n    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, ClassGeneratorComponent_div_30_Template, 5, 3, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](38, ClassGeneratorComponent_div_38_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](40, ClassGeneratorComponent_app_from_to_enum_40_Template, 1, 1, "app-from-to-enum", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, "\n\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](42, ClassGeneratorComponent_app_from_json_42_Template, 1, 2, "app-from-json", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, ClassGeneratorComponent_app_to_json_44_Template, 1, 2, "app-to-json", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](45, "\n\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](46, ClassGeneratorComponent_app_copy_with_46_Template, 1, 2, "app-copy-with", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](51, "app-enum", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](53, "\n");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.className);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.needFromJson);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.needCopyWith);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.needToJson);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.fromJsonString);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.fromJsonString.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.fields.controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("class ", ctx.className.value, " ", "{", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.getClassConstructor());
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.fields.controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.needFromJson.value || ctx.needToJson.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.needFromJson.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.needToJson.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.needCopyWith.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"]("}");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("fields", ctx.fields)("className", ctx.className.value);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckbox, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _from_json_from_json_component__WEBPACK_IMPORTED_MODULE_4__.FromJsonComponent, _to_json_to_json_component__WEBPACK_IMPORTED_MODULE_5__.ToJsonComponent, _copy_with_copy_with_component__WEBPACK_IMPORTED_MODULE_6__.CopyWithComponent, _enum_enum_component__WEBPACK_IMPORTED_MODULE_7__.EnumComponent, _from_to_enum_from_to_enum_component__WEBPACK_IMPORTED_MODULE_8__.FromToEnumComponent, _field_field_component__WEBPACK_IMPORTED_MODULE_9__.FieldComponent, _shared_pipes_transform_to_formgroup__WEBPACK_IMPORTED_MODULE_10__.TransformToFormGroupPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4788:
/*!**********************************************************!*\
  !*** ./src/app/class-generator/field/field.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldComponent": () => (/* binding */ FieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/enums/types.enum */ 6829);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _shared_pipes_transform_to_formgroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/pipes/transform-to-formgroup */ 5711);













function FieldComponent_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const method_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", method_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\n            ", method_r4, "\n          ");
  }
}
function FieldComponent_mat_checkbox_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-checkbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Is List\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function FieldComponent_mat_form_field_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function FieldComponent_div_33_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "transormToFormGroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FieldComponent_div_33_div_5_Template_mat_icon_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const enumI_r7 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.removeEnum.emit({
        field: ctx_r8.field,
        index: enumI_r7
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const enumItem_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, enumItem_r6));
  }
}
function FieldComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FieldComponent_div_33_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.addEnum.emit(ctx_r10.field));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n          Add enum field\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FieldComponent_div_33_div_5_Template, 19, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "transormToFormGroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 1, ctx_r3.field, "enumValues"));
  }
}
class FieldComponent {
  constructor() {
    this.removeItem = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.addEnum = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.changeType = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.removeEnum = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.types = [_shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type.int, _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type.double, _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type.custom, _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type.DateTime, _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type.String, _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type["enum"], _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type.bool];
  }
  ngOnInit() {
    this.field.get('type').valueChanges.subscribe(() => {
      this.changeType.emit();
    });
  }
}
FieldComponent.ɵfac = function FieldComponent_Factory(t) {
  return new (t || FieldComponent)();
};
FieldComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FieldComponent,
  selectors: [["app-field"]],
  inputs: {
    field: "field"
  },
  outputs: {
    removeItem: "removeItem",
    addEnum: "addEnum",
    changeType: "changeType",
    removeEnum: "removeEnum"
  },
  decls: 38,
  vars: 7,
  consts: [[3, "formGroup"], [1, "column"], [1, "row"], ["formControlName", "type"], [3, "value", 4, "ngFor", "ngForOf"], ["color", "primary", "formControlName", "isList", 4, "ngIf"], [4, "ngIf"], ["matInput", "", "formControlName", "property", "placeholder", "Enter type"], ["color", "primary", "aria-hidden", "false", 1, "delete-icon", 3, "click"], [3, "value"], ["color", "primary", "formControlName", "isList"], ["matInput", "", "formControlName", "modelName", "placeholder", "Enter model name"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "mt-20", 4, "ngFor", "ngForOf"], [1, "mt-20"], ["matInput", "", "formControlName", "name", "placeholder", "Enter name"], ["matInput", "", "formControlName", "json", "placeholder", "Enter json"]],
  template: function FieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "transormToFormGroup");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\n    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Choose type");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-select", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\n          ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, FieldComponent_mat_option_14_Template, 2, 2, "mat-option", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, FieldComponent_mat_checkbox_18_Template, 2, 0, "mat-checkbox", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, FieldComponent_mat_form_field_20_Template, 4, 0, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FieldComponent_Template_mat_icon_click_27_listener() {
        return ctx.removeItem.emit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\n    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\n    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, FieldComponent_div_33_Template, 8, 4, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\n    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\n");
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 5, ctx.field));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.types);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.field.get("type")) == null ? null : tmp_2_0.value) !== "enum");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.field.get("type")) == null ? null : tmp_3_0.value) === "custom" || ((tmp_3_0 = ctx.field.get("type")) == null ? null : tmp_3_0.value) === "enum");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.field.get("type")) == null ? null : tmp_4_0.value) === "enum");
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckbox, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _shared_pipes_transform_to_formgroup__WEBPACK_IMPORTED_MODULE_1__.TransformToFormGroupPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7952:
/*!**************************************************!*\
  !*** ./src/app/copy-with/copy-with.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopyWithComponent": () => (/* binding */ CopyWithComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/pipes/dash-to-camelcase.pipe */ 4079);
/* harmony import */ var _shared_services_define_types_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/define-types.service */ 7480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/pipes/first-letter-uppercase.pipe */ 8151);





function CopyWithComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("\n    ", ctx_r0.getField(field_r2), "", ctx_r0.comma(i_r3), "\n  ");
  }
}
function CopyWithComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("\n    ", ctx_r1.getCopyWithField(field_r4), "", ctx_r1.comma(i_r5), "\n  ");
  }
}
class CopyWithComponent {
  constructor(_dashUpperCase, _defineTypeService) {
    this._dashUpperCase = _dashUpperCase;
    this._defineTypeService = _defineTypeService;
  }
  getField(field) {
    return this._defineTypeService.getTypeProperty(field);
  }
  comma(index) {
    return index === this.fields.length - 1 ? '' : ',';
  }
  getCopyWithField(field) {
    const {
      property
    } = field.value;
    const normalizedProperty = this._dashUpperCase.transform(property);
    return `${normalizedProperty}: ${normalizedProperty} ?? this.${normalizedProperty}`;
  }
}
CopyWithComponent.ɵfac = function CopyWithComponent_Factory(t) {
  return new (t || CopyWithComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_0__.DashToCamelcasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_define_types_service__WEBPACK_IMPORTED_MODULE_1__.DefineTypesService));
};
CopyWithComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CopyWithComponent,
  selectors: [["app-copy-with"]],
  inputs: {
    fields: "fields",
    className: "className"
  },
  decls: 19,
  vars: 6,
  consts: [[1, "tab-1"], ["class", "tab-2", 4, "ngFor", "ngForOf"], [1, "tab-2"]],
  template: function CopyWithComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CopyWithComponent_div_7_Template, 2, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "firstLetterUppercase");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CopyWithComponent_div_13_Template, 2, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, ");");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\n");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.className, " copyWith (");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.fields.controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](")=>", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 4, ctx.className), "(");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.fields.controls);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_2__.FirstLetterUppercasePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9452:
/*!****************************************!*\
  !*** ./src/app/enum/enum.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnumComponent": () => (/* binding */ EnumComponent)
/* harmony export */ });
/* harmony import */ var _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/enums/types.enum */ 6829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function EnumComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"]("\n    enum ", (tmp_0_0 = field_r1.get("modelName")) == null ? null : tmp_0_0.value, " ", "{", "\n    ", ctx_r0.getEnumKeys(field_r1), "\n    ", "}", "\n  ");
  }
}
class EnumComponent {
  getEnumFields() {
    return this.fields.controls.filter(field => field.get('type')?.value === _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type["enum"]);
  }
  getEnumKeys(field) {
    const enumValues = field.get('enumValues')?.controls;
    return enumValues?.map((enumFg, index) => {
      const {
        name
      } = enumFg.value;
      const comma = enumValues.length - 1 === index ? '' : ',';
      return `${name}${comma}`;
    }).join('');
  }
}
EnumComponent.ɵfac = function EnumComponent_Factory(t) {
  return new (t || EnumComponent)();
};
EnumComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: EnumComponent,
  selectors: [["app-enum"]],
  inputs: {
    fields: "fields",
    className: "className"
  },
  decls: 2,
  vars: 1,
  consts: [[4, "ngFor", "ngForOf"], [1, "tab1"]],
  template: function EnumComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, EnumComponent_div_0_Template, 5, 4, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getEnumFields());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8342:
/*!**************************************************!*\
  !*** ./src/app/from-json/from-json.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FromJsonComponent": () => (/* binding */ FromJsonComponent)
/* harmony export */ });
/* harmony import */ var _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/enums/types.enum */ 6829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/pipes/dash-to-camelcase.pipe */ 4079);
/* harmony import */ var _shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/pipes/first-letter-uppercase.pipe */ 8151);
/* harmony import */ var _shared_pipes_parse_type_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/pipes/parse-type.pipe */ 8773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function FromJsonComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("\n    ", ctx_r0.getFromJson(item_r1), "", ctx_r0.comma(i_r2), "\n  ");
  }
}
class FromJsonComponent {
  constructor(_dashUpperCase, _firstLetterUppercase, _parseType) {
    this._dashUpperCase = _dashUpperCase;
    this._firstLetterUppercase = _firstLetterUppercase;
    this._parseType = _parseType;
    this.needCheckOnNull = [_shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type.custom, _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type.DateTime, _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type.double];
  }
  comma(index) {
    return index === this.fields.length - 1 ? '' : ',';
  }
  getFromJson(field) {
    const {
      property,
      isList,
      type,
      modelName
    } = field.value;
    const normalizedType = `${this._dashUpperCase.transform(property)}`;
    if (type === _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type["enum"]) {
      return this.getFieldFromJson(normalizedType, this.parseEnum(field));
    }
    if (type === _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type.custom) {
      return this.getFieldFromJson(normalizedType, this.parseCustom(modelName, property, isList));
    }
    return this.getFieldFromJson(normalizedType, this.parsePrimitiveTypes(type, property, isList));
  }
  parseEnum(field) {
    const {
      property,
      enumValues
    } = field.value;
    const type = this._parseType.transform(enumValues[0]?.json);
    return `get${this._firstLetterUppercase.transform(property)}FromJson(${this.parsePrimitiveTypes(type, property, false)})`;
  }
  parseCustom(modelName, property, isList) {
    const parsed = `${modelName}.fromJson(json['${property}'] as Map<String,dynamic>)`;
    if (isList) {
      return this.typeCastList(property, modelName, parsed);
    }
    return parsed;
  }
  parsePrimitiveTypes(type, property, isList) {
    let parsed = `json['${property}'] as ${type}`;
    if (this.needCheckOnNull.includes(type)) {
      parsed = this.jsonNotEqualNull(this.typeCast(type, parsed), property);
    }
    if (isList) {
      return this.typeCastList(property, type, parsed);
    }
    return parsed;
  }
  jsonNotEqualNull(ifNotNull, property) {
    return `json['${property}'] !=null ? ${ifNotNull} : null`;
  }
  typeCast(type, parsed) {
    return `${type}.parse(${parsed})`;
  }
  typeCastList(property, type, parsed) {
    return `json[${property}] !=null ? json[${property}].map<${type}>((dynamic item)=> ${parsed}) as List<${type}> : <${type}>[]`;
  }
  getFieldFromJson(left, middle) {
    return `${left}: ${middle}`;
  }
}
FromJsonComponent.ɵfac = function FromJsonComponent_Factory(t) {
  return new (t || FromJsonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_1__.DashToCamelcasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_2__.FirstLetterUppercasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_pipes_parse_type_pipe__WEBPACK_IMPORTED_MODULE_3__.ParseTypePipe));
};
FromJsonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: FromJsonComponent,
  selectors: [["app-from-json"]],
  inputs: {
    fields: "fields",
    className: "className"
  },
  decls: 30,
  vars: 12,
  consts: [[1, "tab-1"], [1, "tab-2"], [1, "tab-3"], ["class", "tab-3", 4, "ngFor", "ngForOf"]],
  template: function FromJsonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "firstLetterUppercase");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "return null;");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "firstLetterUppercase");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, FromJsonComponent_div_21_Template, 2, 2, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, ");");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "\n");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("\n    static ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 8, ctx.className), "\n    ", "fromJson(Map<String, dynamic> json){", "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("if (json == null) ", "{", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]("}");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("\n    return\n    ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](19, 10, ctx.className), "", "(", "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.fields.controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]("}");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_2__.FirstLetterUppercasePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5388:
/*!********************************************************!*\
  !*** ./src/app/from-to-enum/from-to-enum.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FromToEnumComponent": () => (/* binding */ FromToEnumComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_pipes_parse_type_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/pipes/parse-type.pipe */ 8773);
/* harmony import */ var _shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/pipes/first-letter-uppercase.pipe */ 8151);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function FromToEnumComponent_div_0_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "break;");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const enumItem_r6 = ctx.$implicit;
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\n        ", ctx_r5.getCase(item_r1, enumItem_r6), "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.getCaseReturn(enumItem_r6));
  }
}
function FromToEnumComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FromToEnumComponent_div_0_div_2_div_5_Template, 11, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "default:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "return null;");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\n    ", ctx_r3.getNamingEnum(item_r1), "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("switch(", (tmp_1_0 = item_r1.get("field")) == null ? null : tmp_1_0.value, ")", "{", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.getEnumArray(item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("}");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("}");
  }
}
function FromToEnumComponent_div_0_div_6_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "break;");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const enumItem_r11 = ctx.$implicit;
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\n          ", ctx_r10.getCaseFromJson(enumItem_r11), "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.getCaseFromJsonReturn(item_r1, enumItem_r11));
  }
}
function FromToEnumComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FromToEnumComponent_div_0_div_6_div_5_Template, 11, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "default:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "return null;");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\n      ", ctx_r4.getNamingFromJson(item_r1), "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("switch(json)", "{", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.getEnumArray(item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("}");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("}");
  }
}
function FromToEnumComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FromToEnumComponent_div_0_div_2_Template, 19, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, FromToEnumComponent_div_0_div_6_Template, 19, 5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_0_0 = item_r1.get("type")) == null ? null : tmp_0_0.value) === "enum");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_1_0 = item_r1.get("type")) == null ? null : tmp_1_0.value) === "enum");
  }
}
class FromToEnumComponent {
  constructor(_parseType, _firstLetterUppercase) {
    this._parseType = _parseType;
    this._firstLetterUppercase = _firstLetterUppercase;
  }
  getEnumType(item) {
    if (!item.get('enumValues')?.controls[0]) {
      return '';
    }
    return item.get('enumValues')?.controls[0].get('json')?.value ?? '';
  }
  isString(str) {
    return this._parseType.transform(str) === 'String';
  }
  getEnumArray(item) {
    return item.get('enumValues')?.controls;
  }
  getNamingEnum(item) {
    console.log(item);
    return `${this._parseType.transform(this.getEnumType(item))} getJsonFrom${this._firstLetterUppercase.transform(item.get('property')?.value)} (){`;
  }
  getNamingFromJson(item) {
    console.log(item);
    return `static ${item.get('modelName')?.value} get${this._firstLetterUppercase.transform(item.get('property')?.value)}FromJson(${this._parseType.transform(this.getEnumType(item))} json){`;
  }
  getCase(item, enumItem) {
    return `case ${item.get('modelName')?.value}.${enumItem.get('name')?.value}:`;
  }
  getCaseFromJson(enumItem) {
    const quote = this.isString(enumItem.get('json')?.value) ? `'` : '';
    return `case ${quote}${enumItem.get('json')?.value}${quote}:`;
  }
  getCaseReturn(enumItem) {
    const quote = this.isString(enumItem.get('json')?.value) ? `'` : '';
    return `return ${quote}${enumItem.get('json')?.value}${quote};`;
  }
  getCaseFromJsonReturn(item, enumItem) {
    return `return ${item.get('modelName')?.value}.${enumItem.get('name')?.value};`;
  }
}
FromToEnumComponent.ɵfac = function FromToEnumComponent_Factory(t) {
  return new (t || FromToEnumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_pipes_parse_type_pipe__WEBPACK_IMPORTED_MODULE_0__.ParseTypePipe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_1__.FirstLetterUppercasePipe));
};
FromToEnumComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FromToEnumComponent,
  selectors: [["app-from-to-enum"]],
  inputs: {
    fields: "fields"
  },
  decls: 2,
  vars: 1,
  consts: [["class", "tab-1", 4, "ngFor", "ngForOf"], [1, "tab-1"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "tab-2"]],
  template: function FromToEnumComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, FromToEnumComponent_div_0_Template, 9, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.fields.controls);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6333:
/*!***********************************************!*\
  !*** ./src/app/shared/enums/js-types.enum.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsType": () => (/* binding */ JsType)
/* harmony export */ });
var JsType;
(function (JsType) {
  JsType["number"] = "number";
  JsType["string"] = "string";
  JsType["object"] = "object";
})(JsType || (JsType = {}));

/***/ }),

/***/ 6829:
/*!********************************************!*\
  !*** ./src/app/shared/enums/types.enum.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Type": () => (/* binding */ Type)
/* harmony export */ });
var Type;
(function (Type) {
  Type["int"] = "int";
  Type["DateTime"] = "DateTime";
  Type["String"] = "String";
  Type["double"] = "double";
  Type["enum"] = "enum";
  Type["custom"] = "custom";
  Type["bool"] = "bool";
})(Type || (Type = {}));

/***/ }),

/***/ 4079:
/*!********************************************************!*\
  !*** ./src/app/shared/pipes/dash-to-camelcase.pipe.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashToCamelcasePipe": () => (/* binding */ DashToCamelcasePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class DashToCamelcasePipe {
  transform(value) {
    if (value) {
      const valueArray = value.replace('_', '-').split('-');
      if (value.length > 1) {
        value = valueArray.map((item, index) => index !== 0 ? item && item[0].toUpperCase() + item.slice(1) : item[0].toLowerCase() + item.slice(1)).join('');
      }
    }
    return value ?? '';
  }
}
DashToCamelcasePipe.ɵfac = function DashToCamelcasePipe_Factory(t) {
  return new (t || DashToCamelcasePipe)();
};
DashToCamelcasePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "dashToCamelcase",
  type: DashToCamelcasePipe,
  pure: true
});

/***/ }),

/***/ 8151:
/*!*************************************************************!*\
  !*** ./src/app/shared/pipes/first-letter-uppercase.pipe.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstLetterUppercasePipe": () => (/* binding */ FirstLetterUppercasePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FirstLetterUppercasePipe {
  transform(value) {
    if (value) {
      return value[0].toUpperCase() + value.slice(1);
    }
    return value;
  }
}
FirstLetterUppercasePipe.ɵfac = function FirstLetterUppercasePipe_Factory(t) {
  return new (t || FirstLetterUppercasePipe)();
};
FirstLetterUppercasePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "firstLetterUppercase",
  type: FirstLetterUppercasePipe,
  pure: true
});

/***/ }),

/***/ 8773:
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/parse-type.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParseTypePipe": () => (/* binding */ ParseTypePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ParseTypePipe {
  transform(value) {
    if (!isNaN(parseInt(value))) {
      return 'int';
    }
    if (typeof value === 'string') {
      return 'String';
    }
    return '';
  }
}
ParseTypePipe.ɵfac = function ParseTypePipe_Factory(t) {
  return new (t || ParseTypePipe)();
};
ParseTypePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "parseType",
  type: ParseTypePipe,
  pure: true
});

/***/ }),

/***/ 5711:
/*!********************************************************!*\
  !*** ./src/app/shared/pipes/transform-to-formgroup.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransformToFormGroupPipe": () => (/* binding */ TransformToFormGroupPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TransformToFormGroupPipe {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(value, nestedControl = '') {
    if (nestedControl) {
      return value.get('enumValues')?.controls;
    }
    return value;
  }
}
TransformToFormGroupPipe.ɵfac = function TransformToFormGroupPipe_Factory(t) {
  return new (t || TransformToFormGroupPipe)();
};
TransformToFormGroupPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "transormToFormGroup",
  type: TransformToFormGroupPipe,
  pure: true
});

/***/ }),

/***/ 7480:
/*!*********************************************************!*\
  !*** ./src/app/shared/services/define-types.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefineTypesService": () => (/* binding */ DefineTypesService)
/* harmony export */ });
/* harmony import */ var _shared_enums_js_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/enums/js-types.enum */ 6333);
/* harmony import */ var _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/enums/types.enum */ 6829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/pipes/dash-to-camelcase.pipe */ 4079);




class DefineTypesService {
  constructor(_dashUpperCase) {
    this._dashUpperCase = _dashUpperCase;
  }
  getTypeProperty(field) {
    const {
      type,
      property,
      modelName,
      isList
    } = field.value;
    const normalizedProperty = this._dashUpperCase.transform(property);
    const typeModel = this.isDefault(type) ? type : modelName;
    const strStart = isList ? `List<${typeModel}>` : typeModel;
    return `${strStart} ${normalizedProperty}`;
  }
  isDefault(value) {
    return value !== _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.Type.custom && value !== _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.Type["enum"];
  }
  isDate(value) {
    return !!new Date(value).getMonth();
  }
  isNull(value) {
    return value === null;
  }
  isString(value) {
    return typeof value === _shared_enums_js_types_enum__WEBPACK_IMPORTED_MODULE_0__.JsType.string;
  }
  isInt(value) {
    return !!(Number(value) && Number(value) % 1 === 0);
  }
  isObject(value) {
    return typeof value === _shared_enums_js_types_enum__WEBPACK_IMPORTED_MODULE_0__.JsType.object;
  }
  isDouble(value) {
    return !!(Number(value) && Number(value) % 1 !== 0);
  }
  isArray(value) {
    return Array.isArray(value);
  }
}
DefineTypesService.ɵfac = function DefineTypesService_Factory(t) {
  return new (t || DefineTypesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_2__.DashToCamelcasePipe));
};
DefineTypesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: DefineTypesService,
  factory: DefineTypesService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9309:
/*!**********************************************!*\
  !*** ./src/app/to-json/to-json.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToJsonComponent": () => (/* binding */ ToJsonComponent)
/* harmony export */ });
/* harmony import */ var _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/enums/types.enum */ 6829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/pipes/dash-to-camelcase.pipe */ 4079);
/* harmony import */ var _shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/pipes/first-letter-uppercase.pipe */ 8151);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);





function ToJsonComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("\n  ", ctx_r0.getToJson(item_r1), "", ctx_r0.comma(i_r2), "\n");
  }
}
class ToJsonComponent {
  constructor(_dashUpperCase, _firstLetterUpperCase) {
    this._dashUpperCase = _dashUpperCase;
    this._firstLetterUpperCase = _firstLetterUpperCase;
    this.needToString = [_shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type.DateTime, _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type.double];
  }
  comma(index) {
    return index === this.fields.length - 1 ? '' : ',';
  }
  getToJson(field) {
    const {
      modelName,
      type,
      property,
      isList
    } = field.value;
    const normalizedProperty = this._dashUpperCase.transform(property);
    if (type === _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type["enum"]) {
      return this.getFieldToJson(normalizedProperty, this.parseEnum(property));
    }
    if (type === _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.Type.custom) {
      return this.getFieldToJson(normalizedProperty, this.parseCustom(modelName, normalizedProperty, isList));
    }
    return this.getFieldToJson(normalizedProperty, this.parseDefault(type, normalizedProperty, isList));
  }
  parseEnum(property) {
    return `getJsonFrom${this._firstLetterUpperCase.transform(property)}()`;
  }
  parseDefault(type, property, isList) {
    if (isList) {
      return this.getListWrap(property, type);
    }
    if (this.needToString.includes(type)) {
      return `${property}.toString()`;
    }
    return property;
  }
  parseCustom(model, property, isList) {
    if (isList) {
      return this.getListWrap(property, model, true);
    }
    return `${property}.toJson()`;
  }
  getListWrap(property, type, isCustom = false) {
    if (isCustom) {
      return `${property}.map((${type} value) => value.toJson()).toList()`;
    }
    if (this.needToString.includes(type)) {
      return `${property}.map((${type} value) => value.toString()).toList()`;
    }
    return property;
  }
  getFieldToJson(left, middle) {
    return `'${left}': ${middle}`;
  }
}
ToJsonComponent.ɵfac = function ToJsonComponent_Factory(t) {
  return new (t || ToJsonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_1__.DashToCamelcasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_2__.FirstLetterUppercasePipe));
};
ToJsonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ToJsonComponent,
  selectors: [["app-to-json"]],
  inputs: {
    fields: "fields",
    className: "className"
  },
  decls: 8,
  vars: 3,
  consts: [[1, "tab-1"], ["class", "tab-2", 4, "ngFor", "ngForOf"], [1, "tab-2"]],
  template: function ToJsonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ToJsonComponent_div_3_Template, 2, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\n");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\n  ", "Map<String, dynamic> toJson() =><String,dynamic>{", "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.fields.controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]("};");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
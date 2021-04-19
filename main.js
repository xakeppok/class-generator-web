(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/user/projects/class-generator-web/src/main.ts */"zUnb");


/***/ }),

/***/ "5rP0":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/parse-type.pipe.ts ***!
  \*************************************************/
/*! exports provided: ParseTypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseTypePipe", function() { return ParseTypePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

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
ParseTypePipe.ɵfac = function ParseTypePipe_Factory(t) { return new (t || ParseTypePipe)(); };
ParseTypePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "parseType", type: ParseTypePipe, pure: true });


/***/ }),

/***/ "9KyB":
/*!***********************************************!*\
  !*** ./src/app/shared/enums/js-types.enum.ts ***!
  \***********************************************/
/*! exports provided: JsType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsType", function() { return JsType; });
var JsType;
(function (JsType) {
    JsType["number"] = "number";
    JsType["string"] = "string";
    JsType["object"] = "object";
})(JsType || (JsType = {}));


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Dkiq":
/*!********************************************************!*\
  !*** ./src/app/shared/pipes/dash-to-camelcase.pipe.ts ***!
  \********************************************************/
/*! exports provided: DashToCamelcasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashToCamelcasePipe", function() { return DashToCamelcasePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DashToCamelcasePipe {
    transform(value) {
        if (value) {
            const valueArray = value.replace('_', '-').split('-');
            if (value.length > 1) {
                value = valueArray
                    .map((item, index) => index !== 0
                    ? item && item[0].toUpperCase() + item.slice(1)
                    : item[0].toLowerCase() + item.slice(1))
                    .join('');
            }
        }
        return value;
    }
}
DashToCamelcasePipe.ɵfac = function DashToCamelcasePipe_Factory(t) { return new (t || DashToCamelcasePipe)(); };
DashToCamelcasePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dashToCamelcase", type: DashToCamelcasePipe, pure: true });


/***/ }),

/***/ "Nwod":
/*!**********************************************************!*\
  !*** ./src/app/class-generator/field/field.component.ts ***!
  \**********************************************************/
/*! exports provided: FieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldComponent", function() { return FieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/enums/types.enum */ "TLjL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _shared_pipes_transform_to_formgroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/pipes/transform-to-formgroup */ "rFJM");













function FieldComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const method_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", method_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n            ", method_r4, "\n          ");
} }
function FieldComponent_mat_checkbox_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Is List\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FieldComponent_mat_form_field_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FieldComponent_div_33_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "transormToFormGroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldComponent_div_33_div_5_Template_mat_icon_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const enumI_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.removeEnum.emit({ field: ctx_r8.field, index: enumI_r7 }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const enumItem_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, enumItem_r6));
} }
function FieldComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldComponent_div_33_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.addEnum.emit(ctx_r10.field); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n          Add enum field\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FieldComponent_div_33_div_5_Template, 19, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "transormToFormGroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, ctx_r3.field, "enumValues"));
} }
class FieldComponent {
    constructor() {
        this.removeItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addEnum = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeType = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeEnum = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.types = [
            _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__["Type"].int,
            _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__["Type"].double,
            _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__["Type"].custom,
            _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__["Type"].DateTime,
            _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__["Type"].String,
            _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__["Type"].enum,
            _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__["Type"].bool,
        ];
    }
    ngOnInit() {
        this.field.get('type').valueChanges.subscribe(() => {
            this.changeType.emit();
        });
    }
}
FieldComponent.ɵfac = function FieldComponent_Factory(t) { return new (t || FieldComponent)(); };
FieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FieldComponent, selectors: [["app-field"]], inputs: { field: "field" }, outputs: { removeItem: "removeItem", addEnum: "addEnum", changeType: "changeType", removeEnum: "removeEnum" }, decls: 38, vars: 7, consts: [[3, "formGroup"], [1, "column"], [1, "row"], ["formControlName", "type"], [3, "value", 4, "ngFor", "ngForOf"], ["color", "primary", "formControlName", "isList", 4, "ngIf"], [4, "ngIf"], ["matInput", "", "formControlName", "property", "placeholder", "Enter type"], ["color", "primary", "aria-hidden", "false", 1, "delete-icon", 3, "click"], [3, "value"], ["color", "primary", "formControlName", "isList"], ["matInput", "", "formControlName", "modelName", "placeholder", "Enter model name"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "mt-20", 4, "ngFor", "ngForOf"], [1, "mt-20"], ["matInput", "", "formControlName", "name", "placeholder", "Enter name"], ["matInput", "", "formControlName", "json", "placeholder", "Enter json"]], template: function FieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "transormToFormGroup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Choose type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FieldComponent_mat_option_14_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FieldComponent_mat_checkbox_18_Template, 2, 0, "mat-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FieldComponent_mat_form_field_20_Template, 4, 0, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldComponent_Template_mat_icon_click_27_listener() { return ctx.removeItem.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, FieldComponent_div_33_Template, 8, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n");
    } if (rf & 2) {
        let tmp_2_0 = null;
        let tmp_3_0 = null;
        let tmp_4_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 5, ctx.field));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.field.get("type")) == null ? null : tmp_2_0.value) !== "enum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.field.get("type")) == null ? null : tmp_3_0.value) === "custom" || ((tmp_3_0 = ctx.field.get("type")) == null ? null : tmp_3_0.value) === "enum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.field.get("type")) == null ? null : tmp_4_0.value) === "enum");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], pipes: [_shared_pipes_transform_to_formgroup__WEBPACK_IMPORTED_MODULE_11__["TransformToFormGroupPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWVsZC5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ "RV1E":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/define-types.service.ts ***!
  \*********************************************************/
/*! exports provided: DefineTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefineTypesService", function() { return DefineTypesService; });
/* harmony import */ var _shared_enums_js_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/enums/js-types.enum */ "9KyB");
/* harmony import */ var _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/enums/types.enum */ "TLjL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pipes/dash-to-camelcase.pipe */ "Dkiq");




class DefineTypesService {
    constructor(_dashUpperCase) {
        this._dashUpperCase = _dashUpperCase;
    }
    getTypeProperty(field) {
        const { type, property, modelName, isList } = field.value;
        const normalizedProperty = this._dashUpperCase.transform(property);
        const typeModel = this.isDefault(type) ? type : modelName;
        const strStart = isList ? `List<${typeModel}>` : typeModel;
        return `${strStart} ${normalizedProperty}`;
    }
    isDefault(value) {
        return value !== _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__["Type"].custom && value !== _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__["Type"].enum;
    }
    isDate(value) {
        return !!new Date(value).getMonth();
    }
    isNull(value) {
        return value === null;
    }
    isString(value) {
        return typeof value === _shared_enums_js_types_enum__WEBPACK_IMPORTED_MODULE_0__["JsType"].string;
    }
    isInt(value) {
        return !!(Number(value) && Number(value) % 1 === 0);
    }
    isObject(value) {
        return typeof value === _shared_enums_js_types_enum__WEBPACK_IMPORTED_MODULE_0__["JsType"].object;
    }
    isDouble(value) {
        return !!(Number(value) && Number(value) % 1 !== 0);
    }
    isArray(value) {
        return Array.isArray(value);
    }
}
DefineTypesService.ɵfac = function DefineTypesService_Factory(t) { return new (t || DefineTypesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_3__["DashToCamelcasePipe"])); };
DefineTypesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DefineTypesService, factory: DefineTypesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _class_generator_class_generator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-generator/class-generator.component */ "Znb8");


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-class-generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n");
    } }, directives: [_class_generator_class_generator_component__WEBPACK_IMPORTED_MODULE_1__["ClassGeneratorComponent"]], styles: [".delete-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVsZXRlLWljb25cbiAgICBjdXJzb3I6IHBvaW50ZXJcbiJdfQ== */"] });


/***/ }),

/***/ "TLjL":
/*!********************************************!*\
  !*** ./src/app/shared/enums/types.enum.ts ***!
  \********************************************/
/*! exports provided: Type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return Type; });
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

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/pipes/first-letter-uppercase.pipe */ "jHKm");
/* harmony import */ var _shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/pipes/dash-to-camelcase.pipe */ "Dkiq");
/* harmony import */ var _from_json_from_json_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./from-json/from-json.component */ "fOZe");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _to_json_to_json_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./to-json/to-json.component */ "gaTf");
/* harmony import */ var _copy_with_copy_with_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./copy-with/copy-with.component */ "b89F");
/* harmony import */ var _enum_enum_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./enum/enum.component */ "fQy/");
/* harmony import */ var _shared_pipes_parse_type_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/pipes/parse-type.pipe */ "5rP0");
/* harmony import */ var _from_to_enum_from_to_enum_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./from-to-enum/from-to-enum.component */ "s4Fc");
/* harmony import */ var _shared_pipes_transform_to_formgroup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shared/pipes/transform-to-formgroup */ "rFJM");
/* harmony import */ var _class_generator_class_generator_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./class-generator/class-generator.component */ "Znb8");
/* harmony import */ var _class_generator_field_field_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./class-generator/field/field.component */ "Nwod");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_4__["FirstLetterUppercasePipe"], _shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_5__["DashToCamelcasePipe"], _shared_pipes_parse_type_pipe__WEBPACK_IMPORTED_MODULE_15__["ParseTypePipe"]], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_4__["FirstLetterUppercasePipe"],
        _shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_5__["DashToCamelcasePipe"],
        _from_json_from_json_component__WEBPACK_IMPORTED_MODULE_6__["FromJsonComponent"],
        _to_json_to_json_component__WEBPACK_IMPORTED_MODULE_12__["ToJsonComponent"],
        _copy_with_copy_with_component__WEBPACK_IMPORTED_MODULE_13__["CopyWithComponent"],
        _enum_enum_component__WEBPACK_IMPORTED_MODULE_14__["EnumComponent"],
        _shared_pipes_transform_to_formgroup__WEBPACK_IMPORTED_MODULE_17__["TransformToFormGroupPipe"],
        _shared_pipes_parse_type_pipe__WEBPACK_IMPORTED_MODULE_15__["ParseTypePipe"],
        _from_to_enum_from_to_enum_component__WEBPACK_IMPORTED_MODULE_16__["FromToEnumComponent"],
        _class_generator_class_generator_component__WEBPACK_IMPORTED_MODULE_18__["ClassGeneratorComponent"],
        _class_generator_field_field_component__WEBPACK_IMPORTED_MODULE_19__["FieldComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"]] }); })();


/***/ }),

/***/ "Znb8":
/*!**************************************************************!*\
  !*** ./src/app/class-generator/class-generator.component.ts ***!
  \**************************************************************/
/*! exports provided: ClassGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassGeneratorComponent", function() { return ClassGeneratorComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/enums/types.enum */ "TLjL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pipes/first-letter-uppercase.pipe */ "jHKm");
/* harmony import */ var _shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/pipes/dash-to-camelcase.pipe */ "Dkiq");
/* harmony import */ var _shared_services_define_types_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services/define-types.service */ "RV1E");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _enum_enum_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../enum/enum.component */ "fQy/");
/* harmony import */ var _field_field_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./field/field.component */ "Nwod");
/* harmony import */ var _from_to_enum_from_to_enum_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../from-to-enum/from-to-enum.component */ "s4Fc");
/* harmony import */ var _from_json_from_json_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../from-json/from-json.component */ "fOZe");
/* harmony import */ var _to_json_to_json_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../to-json/to-json.component */ "gaTf");
/* harmony import */ var _copy_with_copy_with_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../copy-with/copy-with.component */ "b89F");
/* harmony import */ var _shared_pipes_transform_to_formgroup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shared/pipes/transform-to-formgroup */ "rFJM");



















function ClassGeneratorComponent_mat_form_field_26_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r7.error);
} }
function ClassGeneratorComponent_mat_form_field_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "textarea", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ClassGeneratorComponent_mat_form_field_26_div_4_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.json);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.error !== "");
} }
function ClassGeneratorComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "app-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("removeItem", function ClassGeneratorComponent_div_30_Template_app_field_removeItem_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.removeItem(i_r9); })("addEnum", function ClassGeneratorComponent_div_30_Template_app_field_addEnum_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.addEnum($event); })("removeEnum", function ClassGeneratorComponent_div_30_Template_app_field_removeEnum_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.removeEnum($event); })("changeType", function ClassGeneratorComponent_div_30_Template_app_field_changeType_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.changeIsList(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "transormToFormGroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, field_r8));
} }
function ClassGeneratorComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r15 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\n    ", ctx_r2.getField(field_r15), ";\n  ");
} }
function ClassGeneratorComponent_app_from_to_enum_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-from-to-enum", 16);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fields", ctx_r3.fields);
} }
function ClassGeneratorComponent_app_from_json_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-from-json", 10);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fields", ctx_r4.fields)("className", ctx_r4.className.value);
} }
function ClassGeneratorComponent_app_to_json_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-to-json", 10);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fields", ctx_r5.fields)("className", ctx_r5.className.value);
} }
function ClassGeneratorComponent_app_copy_with_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-copy-with", 10);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fields", ctx_r6.fields)("className", ctx_r6.className.value);
} }
class ClassGeneratorComponent {
    constructor(_upperCase, _dashUpperCase, _defineTypeService) {
        this._upperCase = _upperCase;
        this._dashUpperCase = _dashUpperCase;
        this._defineTypeService = _defineTypeService;
        this.fields = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([]);
        this.className = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('');
        this.needFromJson = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false);
        this.needCopyWith = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false);
        this.needToJson = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false);
        this.json = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
        this.error = '';
        this.fromJsonString = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false);
    }
    ngOnInit() {
        this.className.valueChanges.subscribe((value) => {
            this.className.patchValue(this._upperCase.transform(value), {
                emitEvent: false,
            });
        });
        this.json.valueChanges.subscribe((value) => {
            try {
                this.fields = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([]);
                const obj = JSON.parse(value);
                for (const key in obj) {
                    this.defineAndAddType(obj[key], key);
                }
                this.error = '';
            }
            catch (e) {
                this.error = 'Incorrect json';
                this.fields = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([]);
            }
        });
    }
    defineAndAddType(str, prop) {
        const isList = this._defineTypeService.isArray(str);
        const value = (this._defineTypeService.isArray(str) && str[0]) || str;
        if (this._defineTypeService.isNull(value)) {
            this.addField(prop, _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__["Type"].String, isList);
            return;
        }
        if (this._defineTypeService.isDouble(value)) {
            this.addField(prop, _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__["Type"].double, isList);
            return;
        }
        if (this._defineTypeService.isInt(value)) {
            this.addField(prop, _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__["Type"].int, isList);
            return;
        }
        if (this._defineTypeService.isString(value)) {
            this.addField(prop, _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__["Type"].String, isList);
            return;
        }
        if (this._defineTypeService.isDate(value)) {
            this.addField(prop, _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__["Type"].DateTime, isList);
            return;
        }
        if (this._defineTypeService.isObject(value)) {
            this.addField(prop.toLowerCase(), _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__["Type"].custom, isList, prop);
        }
    }
    getClassConstructor() {
        var _a;
        const constructor = (_a = this.fields) === null || _a === void 0 ? void 0 : _a.controls.map((field, index) => {
            const { property } = field.value;
            const comma = index !== this.fields.length - 1 ? ',' : '';
            return `this.${this._dashUpperCase.transform(property)}${comma}`;
        }).join('');
        return `${this.className.value}({${constructor}});`;
    }
    changeIsList(index) {
        this.fields.controls[index].patchValue({ isList: false });
    }
    getField(field) {
        return this._defineTypeService.getTypeProperty(field);
    }
    removeItem(index) {
        this.fields.removeAt(index);
    }
    removeEnum({ field, index, }) {
        field.get('enumValues').removeAt(index);
    }
    addField(property = '', type = _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__["Type"].int, isList = false, model = '') {
        this.fields.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            isList: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](isList),
            enumValues: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([]),
            property: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](property),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](type),
            modelName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](model),
        }));
    }
    addEnum(field) {
        var _a;
        (_a = field.get('enumValues')) === null || _a === void 0 ? void 0 : _a.push(this.createEnum());
    }
    createEnum() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            json: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
}
ClassGeneratorComponent.ɵfac = function ClassGeneratorComponent_Factory(t) { return new (t || ClassGeneratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_3__["FirstLetterUppercasePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_4__["DashToCamelcasePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_define_types_service__WEBPACK_IMPORTED_MODULE_5__["DefineTypesService"])); };
ClassGeneratorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ClassGeneratorComponent, selectors: [["app-class-generator"]], decls: 54, vars: 18, consts: [[1, "tab-1", "mt-20"], ["matInput", "", "placeholder", "Enter class name", 3, "formControl"], ["color", "primary", 3, "formControl"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["style", "width: 500px", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "tab-1"], ["class", "tab-1", 4, "ngFor", "ngForOf"], [3, "fields", 4, "ngIf"], [3, "fields", "className", 4, "ngIf"], [3, "fields", "className"], [2, "width", "500px"], ["matInput", "", "placeholder", "Enter json", 2, "min-height", "100px", 3, "formControl"], ["style", "color: red", 4, "ngIf"], [2, "color", "red"], [3, "field", "removeItem", "addEnum", "removeEnum", "changeType"], [3, "fields"]], template: function ClassGeneratorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Need from json");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Need copy with");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Need to json");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClassGeneratorComponent_Template_button_click_16_listener() { return ctx.addField(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\n    Add field\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "From json string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ClassGeneratorComponent_mat_form_field_26_Template, 6, 2, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ClassGeneratorComponent_div_30_Template, 5, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, ClassGeneratorComponent_div_38_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, ClassGeneratorComponent_app_from_to_enum_40_Template, 1, 1, "app-from-to-enum", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, ClassGeneratorComponent_app_from_json_42_Template, 1, 2, "app-from-json", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, ClassGeneratorComponent_app_to_json_44_Template, 1, 2, "app-to-json", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, ClassGeneratorComponent_app_copy_with_46_Template, 1, 2, "app-copy-with", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "app-enum", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.className);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.needFromJson);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.needCopyWith);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.needToJson);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.fromJsonString);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fromJsonString.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.fields.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("class ", ctx.className.value, " ", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getClassConstructor());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.fields.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.needFromJson.value || ctx.needToJson.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.needFromJson.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.needToJson.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.needCopyWith.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("}");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fields", ctx.fields)("className", ctx.className.value);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _enum_enum_component__WEBPACK_IMPORTED_MODULE_11__["EnumComponent"], _field_field_component__WEBPACK_IMPORTED_MODULE_12__["FieldComponent"], _from_to_enum_from_to_enum_component__WEBPACK_IMPORTED_MODULE_13__["FromToEnumComponent"], _from_json_from_json_component__WEBPACK_IMPORTED_MODULE_14__["FromJsonComponent"], _to_json_to_json_component__WEBPACK_IMPORTED_MODULE_15__["ToJsonComponent"], _copy_with_copy_with_component__WEBPACK_IMPORTED_MODULE_16__["CopyWithComponent"]], pipes: [_shared_pipes_transform_to_formgroup__WEBPACK_IMPORTED_MODULE_17__["TransformToFormGroupPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGFzcy1nZW5lcmF0b3IuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ "b89F":
/*!**************************************************!*\
  !*** ./src/app/copy-with/copy-with.component.ts ***!
  \**************************************************/
/*! exports provided: CopyWithComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyWithComponent", function() { return CopyWithComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/pipes/dash-to-camelcase.pipe */ "Dkiq");
/* harmony import */ var _shared_services_define_types_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/define-types.service */ "RV1E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/pipes/first-letter-uppercase.pipe */ "jHKm");





function CopyWithComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n    ", ctx_r0.getField(field_r2), "", ctx_r0.comma(i_r3), "\n  ");
} }
function CopyWithComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n    ", ctx_r1.getCopyWithField(field_r4), "", ctx_r1.comma(i_r5), "\n  ");
} }
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
        const { property } = field.value;
        const normalizedProperty = this._dashUpperCase.transform(property);
        return `${normalizedProperty}: ${normalizedProperty} ?? this.${normalizedProperty}`;
    }
}
CopyWithComponent.ɵfac = function CopyWithComponent_Factory(t) { return new (t || CopyWithComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_1__["DashToCamelcasePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_define_types_service__WEBPACK_IMPORTED_MODULE_2__["DefineTypesService"])); };
CopyWithComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CopyWithComponent, selectors: [["app-copy-with"]], inputs: { fields: "fields", className: "className" }, decls: 19, vars: 6, consts: [[1, "tab-1"], ["class", "tab-2", 4, "ngFor", "ngForOf"], [1, "tab-2"]], template: function CopyWithComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CopyWithComponent_div_7_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "firstLetterUppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CopyWithComponent_div_13_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ");");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.className, " copyWith (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fields.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](")=>", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 4, ctx.className), "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fields.controls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_4__["FirstLetterUppercasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3B5LXdpdGguY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ "fOZe":
/*!**************************************************!*\
  !*** ./src/app/from-json/from-json.component.ts ***!
  \**************************************************/
/*! exports provided: FromJsonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromJsonComponent", function() { return FromJsonComponent; });
/* harmony import */ var _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/enums/types.enum */ "TLjL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/pipes/dash-to-camelcase.pipe */ "Dkiq");
/* harmony import */ var _shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/pipes/first-letter-uppercase.pipe */ "jHKm");
/* harmony import */ var _shared_pipes_parse_type_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/pipes/parse-type.pipe */ "5rP0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function FromJsonComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\n    ", ctx_r0.getFromJson(item_r1), "", ctx_r0.comma(i_r2), "\n  ");
} }
class FromJsonComponent {
    constructor(_dashUpperCase, _firstLetterUppercase, _parseType) {
        this._dashUpperCase = _dashUpperCase;
        this._firstLetterUppercase = _firstLetterUppercase;
        this._parseType = _parseType;
        this.needCheckOnNull = [_shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__["Type"].custom, _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__["Type"].DateTime, _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__["Type"].double];
    }
    comma(index) {
        return index === this.fields.length - 1 ? '' : ',';
    }
    getFromJson(field) {
        const { property, isList, type, modelName } = field.value;
        const normalizedType = `${this._dashUpperCase.transform(property)}`;
        if (type === _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__["Type"].enum) {
            return this.getFieldFromJson(normalizedType, this.parseEnum(field));
        }
        if (type === _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__["Type"].custom) {
            return this.getFieldFromJson(normalizedType, this.parseCustom(modelName, property, isList));
        }
        return this.getFieldFromJson(normalizedType, this.parsePrimitiveTypes(type, property, isList));
    }
    parseEnum(field) {
        var _a;
        const { property, enumValues } = field.value;
        const type = this._parseType.transform((_a = enumValues[0]) === null || _a === void 0 ? void 0 : _a.json);
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
FromJsonComponent.ɵfac = function FromJsonComponent_Factory(t) { return new (t || FromJsonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_2__["DashToCamelcasePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_3__["FirstLetterUppercasePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_pipes_parse_type_pipe__WEBPACK_IMPORTED_MODULE_4__["ParseTypePipe"])); };
FromJsonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FromJsonComponent, selectors: [["app-from-json"]], inputs: { fields: "fields", className: "className" }, decls: 30, vars: 12, consts: [[1, "tab-1"], [1, "tab-2"], [1, "tab-3"], ["class", "tab-3", 4, "ngFor", "ngForOf"]], template: function FromJsonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "firstLetterUppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "return null;");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "firstLetterUppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, FromJsonComponent_div_21_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, ");");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\n    static ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 8, ctx.className), "\n    ", "fromJson(Map<String, dynamic> json){", "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("if (json == null) ", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("}");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\n    return\n    ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 10, ctx.className), "", "(", "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fields.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("}");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_3__["FirstLetterUppercasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcm9tLWpzb24uY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ "fQy/":
/*!****************************************!*\
  !*** ./src/app/enum/enum.component.ts ***!
  \****************************************/
/*! exports provided: EnumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumComponent", function() { return EnumComponent; });
/* harmony import */ var _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/enums/types.enum */ "TLjL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function EnumComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"]("\n    enum ", (tmp_0_0 = field_r1.get("modelName")) == null ? null : tmp_0_0.value, " ", "{", "\n    ", ctx_r0.getEnumKeys(field_r1), "\n    ", "}", "\n  ");
} }
class EnumComponent {
    getEnumFields() {
        const enums = this.fields.controls.filter((field) => { var _a; return ((_a = field.get('type')) === null || _a === void 0 ? void 0 : _a.value) === _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__["Type"].enum; });
        return enums;
    }
    getEnumKeys(field) {
        var _a;
        const enumValues = (_a = field.get('enumValues')) === null || _a === void 0 ? void 0 : _a.controls;
        return enumValues === null || enumValues === void 0 ? void 0 : enumValues.map((enumFg, index) => {
            const { name } = enumFg.value;
            const comma = enumValues.length - 1 === index ? '' : ',';
            return `${name}${comma}`;
        }).join('');
    }
}
EnumComponent.ɵfac = function EnumComponent_Factory(t) { return new (t || EnumComponent)(); };
EnumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EnumComponent, selectors: [["app-enum"]], inputs: { fields: "fields", className: "className" }, decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "tab1"]], template: function EnumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, EnumComponent_div_0_Template, 5, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getEnumFields());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnVtLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ "gaTf":
/*!**********************************************!*\
  !*** ./src/app/to-json/to-json.component.ts ***!
  \**********************************************/
/*! exports provided: ToJsonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToJsonComponent", function() { return ToJsonComponent; });
/* harmony import */ var _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/enums/types.enum */ "TLjL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/pipes/dash-to-camelcase.pipe */ "Dkiq");
/* harmony import */ var _shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/pipes/first-letter-uppercase.pipe */ "jHKm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ToJsonComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\n  ", ctx_r0.getToJson(item_r1), "", ctx_r0.comma(i_r2), "\n");
} }
class ToJsonComponent {
    constructor(_dashUpperCase, _firstLetterUpperCase) {
        this._dashUpperCase = _dashUpperCase;
        this._firstLetterUpperCase = _firstLetterUpperCase;
        this.needToString = [_shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__["Type"].DateTime, _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__["Type"].double];
    }
    comma(index) {
        return index === this.fields.length - 1 ? '' : ',';
    }
    getToJson(field) {
        const { modelName, type, property, isList } = field.value;
        const normalizedProperty = this._dashUpperCase.transform(property);
        if (type === _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__["Type"].enum) {
            return this.getFieldToJson(normalizedProperty, this.parseEnum(property));
        }
        if (type === _shared_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__["Type"].custom) {
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
ToJsonComponent.ɵfac = function ToJsonComponent_Factory(t) { return new (t || ToJsonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_pipes_dash_to_camelcase_pipe__WEBPACK_IMPORTED_MODULE_2__["DashToCamelcasePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_3__["FirstLetterUppercasePipe"])); };
ToJsonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ToJsonComponent, selectors: [["app-to-json"]], inputs: { fields: "fields", className: "className" }, decls: 8, vars: 3, consts: [[1, "tab-1"], ["class", "tab-2", 4, "ngFor", "ngForOf"], [1, "tab-2"]], template: function ToJsonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ToJsonComponent_div_3_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n  ", "Map<String, dynamic> toJson() =><String,dynamic>{", "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fields.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("};");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0by1qc29uLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ "jHKm":
/*!*************************************************************!*\
  !*** ./src/app/shared/pipes/first-letter-uppercase.pipe.ts ***!
  \*************************************************************/
/*! exports provided: FirstLetterUppercasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstLetterUppercasePipe", function() { return FirstLetterUppercasePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FirstLetterUppercasePipe {
    transform(value) {
        if (value) {
            return value[0].toUpperCase() + value.slice(1);
        }
        return value;
    }
}
FirstLetterUppercasePipe.ɵfac = function FirstLetterUppercasePipe_Factory(t) { return new (t || FirstLetterUppercasePipe)(); };
FirstLetterUppercasePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "firstLetterUppercase", type: FirstLetterUppercasePipe, pure: true });


/***/ }),

/***/ "rFJM":
/*!********************************************************!*\
  !*** ./src/app/shared/pipes/transform-to-formgroup.ts ***!
  \********************************************************/
/*! exports provided: TransformToFormGroupPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformToFormGroupPipe", function() { return TransformToFormGroupPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TransformToFormGroupPipe {
    // tslint:disable-next-line: no-any
    transform(value, nestedControl = '') {
        var _a;
        if (nestedControl) {
            return (_a = value.get('enumValues')) === null || _a === void 0 ? void 0 : _a.controls;
        }
        return value;
    }
}
TransformToFormGroupPipe.ɵfac = function TransformToFormGroupPipe_Factory(t) { return new (t || TransformToFormGroupPipe)(); };
TransformToFormGroupPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "transormToFormGroup", type: TransformToFormGroupPipe, pure: true });


/***/ }),

/***/ "s4Fc":
/*!********************************************************!*\
  !*** ./src/app/from-to-enum/from-to-enum.component.ts ***!
  \********************************************************/
/*! exports provided: FromToEnumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromToEnumComponent", function() { return FromToEnumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_pipes_parse_type_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/pipes/parse-type.pipe */ "5rP0");
/* harmony import */ var _shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/pipes/first-letter-uppercase.pipe */ "jHKm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function FromToEnumComponent_div_0_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "break;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const enumItem_r6 = ctx.$implicit;
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n        ", ctx_r5.getCase(item_r1, enumItem_r6), "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getCaseReturn(enumItem_r6));
} }
function FromToEnumComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FromToEnumComponent_div_0_div_2_div_5_Template, 11, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "default:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "return null;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n    ", ctx_r3.getNamingEnum(item_r1), "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("switch(", (tmp_1_0 = item_r1.get("field")) == null ? null : tmp_1_0.value, ")", "{", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.getEnumArray(item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("}");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("}");
} }
function FromToEnumComponent_div_0_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "break;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const enumItem_r11 = ctx.$implicit;
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n          ", ctx_r10.getCaseFromJson(enumItem_r11), "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.getCaseFromJsonReturn(item_r1, enumItem_r11));
} }
function FromToEnumComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FromToEnumComponent_div_0_div_6_div_5_Template, 11, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "default:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "return null;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n      ", ctx_r4.getNamingFromJson(item_r1), "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("switch(json)", "{", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.getEnumArray(item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("}");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("}");
} }
function FromToEnumComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FromToEnumComponent_div_0_div_2_Template, 19, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FromToEnumComponent_div_0_div_6_Template, 19, 5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_0_0 = item_r1.get("type")) == null ? null : tmp_0_0.value) === "enum");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = item_r1.get("type")) == null ? null : tmp_1_0.value) === "enum");
} }
class FromToEnumComponent {
    constructor(_parseType, _firstLetterUppercase) {
        this._parseType = _parseType;
        this._firstLetterUppercase = _firstLetterUppercase;
    }
    getEnumType(item) {
        var _a, _b, _c, _d;
        if (!((_a = item.get('enumValues')) === null || _a === void 0 ? void 0 : _a.controls[0])) {
            return '';
        }
        return ((_d = (_c = (_b = item.get('enumValues')) === null || _b === void 0 ? void 0 : _b.controls[0].get('json')) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : '');
    }
    isString(str) {
        return this._parseType.transform(str) === 'String';
    }
    getEnumArray(item) {
        var _a;
        return (_a = item.get('enumValues')) === null || _a === void 0 ? void 0 : _a.controls;
    }
    getNamingEnum(item) {
        var _a;
        return `${this._parseType.transform(this.getEnumType(item))} getJsonFrom${this._firstLetterUppercase.transform((_a = item.get('field')) === null || _a === void 0 ? void 0 : _a.value)} (){`;
    }
    getNamingFromJson(item) {
        var _a, _b;
        return `static ${(_a = item.get('model')) === null || _a === void 0 ? void 0 : _a.value} get${this._firstLetterUppercase.transform((_b = item.get('field')) === null || _b === void 0 ? void 0 : _b.value)}FromJson(${this._parseType.transform(this.getEnumType(item))} json){`;
    }
    getCase(item, enumItem) {
        var _a, _b;
        return `case ${(_a = item.get('model')) === null || _a === void 0 ? void 0 : _a.value}.${(_b = enumItem.get('name')) === null || _b === void 0 ? void 0 : _b.value}:`;
    }
    getCaseFromJson(enumItem) {
        var _a, _b;
        const quote = this.isString((_a = enumItem.get('json')) === null || _a === void 0 ? void 0 : _a.value) ? `'` : '';
        return `case ${quote}${(_b = enumItem.get('json')) === null || _b === void 0 ? void 0 : _b.value}${quote}:`;
    }
    getCaseReturn(enumItem) {
        var _a, _b;
        const quote = this.isString((_a = enumItem.get('json')) === null || _a === void 0 ? void 0 : _a.value) ? `'` : '';
        return `return ${quote}${(_b = enumItem.get('json')) === null || _b === void 0 ? void 0 : _b.value}${quote};`;
    }
    getCaseFromJsonReturn(item, enumItem) {
        var _a, _b;
        return `return ${(_a = item.get('model')) === null || _a === void 0 ? void 0 : _a.value}.${(_b = enumItem.get('name')) === null || _b === void 0 ? void 0 : _b.value};`;
    }
}
FromToEnumComponent.ɵfac = function FromToEnumComponent_Factory(t) { return new (t || FromToEnumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_parse_type_pipe__WEBPACK_IMPORTED_MODULE_1__["ParseTypePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_first_letter_uppercase_pipe__WEBPACK_IMPORTED_MODULE_2__["FirstLetterUppercasePipe"])); };
FromToEnumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FromToEnumComponent, selectors: [["app-from-to-enum"]], inputs: { fields: "fields" }, decls: 2, vars: 1, consts: [["class", "tab-1", 4, "ngFor", "ngForOf"], [1, "tab-1"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "tab-2"]], template: function FromToEnumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FromToEnumComponent_div_0_Template, 9, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fields.controls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcm9tLXRvLWVudW0uY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
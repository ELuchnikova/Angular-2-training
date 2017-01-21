/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './citySearch.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './search.css.shim.ngstyle';
import * as import9 from '@angular/material/input/input-container';
import * as import10 from '../../../../node_modules/@angular/material/input/input-container.ngfactory';
import * as import11 from '@angular/core/src/linker/query_list';
import * as import12 from '../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import13 from '../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import14 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import15 from '@angular/material/button/button';
import * as import16 from '../../../../node_modules/@angular/material/button/button.ngfactory';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from '@angular/forms/src/directives/default_value_accessor';
import * as import19 from '@angular/forms/src/directives/control_value_accessor';
import * as import20 from '@angular/forms/src/directives/ng_model';
import * as import21 from '@angular/forms/src/directives/ng_control';
import * as import22 from '@angular/forms/src/directives/ng_control_status';
export class Wrapper_CitySearchComponent {
  /*private*/ _eventHandler:Function;
  context:import0.CitySearchComponent;
  /*private*/ _changed:boolean;
  subscription0:any;
  constructor() {
    this._changed = false;
    this.context = new import0.CitySearchComponent();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.addCity.subscribe(_eventHandler.bind(view,'addCity'))); }
  }
}
var renderType_CitySearchComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_CitySearchComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.CitySearchComponent>;
  _CitySearchComponent_0_3:Wrapper_CitySearchComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_CitySearchComponent_Host0,renderType_CitySearchComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'city-search',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_CitySearchComponent0(this.viewUtils,this,0,this._el_0);
    this._CitySearchComponent_0_3 = new Wrapper_CitySearchComponent();
    this.compView_0.create(this._CitySearchComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._CitySearchComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.CitySearchComponent) && (0 === requestNodeIndex))) { return this._CitySearchComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._CitySearchComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._CitySearchComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const CitySearchComponentNgFactory:import7.ComponentFactory<import0.CitySearchComponent> = new import7.ComponentFactory<import0.CitySearchComponent>('city-search',View_CitySearchComponent_Host0,import0.CitySearchComponent);
const styles_CitySearchComponent:any[] = [import8.styles];
var renderType_CitySearchComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_CitySearchComponent,{});
export class View_CitySearchComponent0 extends import1.AppView<import0.CitySearchComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  compView_4:import1.AppView<import9.MdInputContainer>;
  _MdInputContainer_4_3:import10.Wrapper_MdInputContainer;
  _query_MdInputDirective_4_0:import11.QueryList<any>;
  _query_MdPlaceholder_4_1:import11.QueryList<any>;
  _query_MdHint_4_2:import11.QueryList<any>;
  _text_5:any;
  _el_6:any;
  _DefaultValueAccessor_6_3:import12.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_6_4:any[];
  _NgModel_6_5:import13.Wrapper_NgModel;
  _NgControl_6_6:any;
  _NgControlStatus_6_7:import14.Wrapper_NgControlStatus;
  _MdInputDirective_6_8:import10.Wrapper_MdInputDirective;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  compView_9:import1.AppView<import15.MdButton>;
  _MdButton_9_3:import16.Wrapper_MdButton;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_CitySearchComponent0,renderType_CitySearchComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                  ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','search-container'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n                      ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'md-input-container',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_4 = new import10.View_MdInputContainer0(this.viewUtils,this,4,this._el_4);
    this._MdInputContainer_4_3 = new import10.Wrapper_MdInputContainer();
    this._query_MdInputDirective_4_0 = new import11.QueryList<any>();
    this._query_MdPlaceholder_4_1 = new import11.QueryList<any>();
    this._query_MdHint_4_2 = new import11.QueryList<any>();
    this._text_5 = this.renderer.createText((null as any),'\n                          ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,(null as any),'input',new import3.InlineArray8(8,'class','md-input-element','md-input','','placeholder','Enter city name','type','text'),(null as any));
    this._DefaultValueAccessor_6_3 = new import12.Wrapper_DefaultValueAccessor(this.renderer,new import17.ElementRef(this._el_6));
    this._NG_VALUE_ACCESSOR_6_4 = [this._DefaultValueAccessor_6_3.context];
    this._NgModel_6_5 = new import13.Wrapper_NgModel((null as any),(null as any),(null as any),this._NG_VALUE_ACCESSOR_6_4);
    this._NgControl_6_6 = this._NgModel_6_5.context;
    this._NgControlStatus_6_7 = new import14.Wrapper_NgControlStatus(this._NgControl_6_6);
    this._MdInputDirective_6_8 = new import10.Wrapper_MdInputDirective(new import17.ElementRef(this._el_6),this.renderer,this._NgControl_6_6);
    this._text_7 = this.renderer.createText((null as any),'\n                      ',(null as any));
    this.compView_4.create(this._MdInputContainer_4_3.context);
    this._text_8 = this.renderer.createText(this._el_2,'\n                      ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_2,'button',new import3.InlineArray4(4,'md-raised-button','','value','Add to table'),(null as any));
    this.compView_9 = new import16.View_MdButton0(this.viewUtils,this,9,this._el_9);
    this._MdButton_9_3 = new import16.Wrapper_MdButton(new import17.ElementRef(this._el_9),this.renderer);
    this._text_10 = this.renderer.createText((null as any),'Add',(null as any));
    this.compView_9.create(this._MdButton_9_3.context);
    this._text_11 = this.renderer.createText(this._el_2,'\n                  ',(null as any));
    this._text_12 = this.renderer.createText(this._el_0,'\n              ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_4,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_4));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_6,new import3.InlineArray16(10,'ngModelChange',(null as any),'keyup.enter',(null as any),'input',(null as any),'blur',(null as any),'focus',(null as any)),this.eventHandler(this.handleEvent_6));
    this._NgModel_6_5.subscribe(this,this.eventHandler(this.handleEvent_6),true);
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_9,new import3.InlineArray8(8,'click',(null as any),'mousedown',(null as any),'focus',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_9));
    this._query_MdInputDirective_4_0.reset([this._MdInputDirective_6_8.context]);
    this._MdInputContainer_4_3.context._mdInputChild = this._query_MdInputDirective_4_0.first;
    this._query_MdPlaceholder_4_1.reset(([] as any[]));
    this._MdInputContainer_4_3.context._placeholderChild = this._query_MdPlaceholder_4_1.first;
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._text_12
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.DefaultValueAccessor) && (6 === requestNodeIndex))) { return this._DefaultValueAccessor_6_3.context; }
    if (((token === import19.NG_VALUE_ACCESSOR) && (6 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_6_4; }
    if (((token === import20.NgModel) && (6 === requestNodeIndex))) { return this._NgModel_6_5.context; }
    if (((token === import21.NgControl) && (6 === requestNodeIndex))) { return this._NgControl_6_6; }
    if (((token === import22.NgControlStatus) && (6 === requestNodeIndex))) { return this._NgControlStatus_6_7.context; }
    if (((token === import9.MdInputDirective) && (6 === requestNodeIndex))) { return this._MdInputDirective_6_8.context; }
    if (((token === import9.MdInputContainer) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._MdInputContainer_4_3.context; }
    if (((token === import15.MdButton) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._MdButton_9_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._MdInputContainer_4_3.ngDoCheck(this,this._el_4,throwOnChange);
    this._DefaultValueAccessor_6_3.ngDoCheck(this,this._el_6,throwOnChange);
    const currVal_6_1_0:any = this.context.cityToAdd;
    this._NgModel_6_5.check_model(currVal_6_1_0,throwOnChange,false);
    this._NgModel_6_5.ngDoCheck(this,this._el_6,throwOnChange);
    this._NgControlStatus_6_7.ngDoCheck(this,this._el_6,throwOnChange);
    const currVal_6_3_0:any = 'Enter city name';
    this._MdInputDirective_6_8.check_placeholder(currVal_6_3_0,throwOnChange,false);
    const currVal_6_3_1:any = 'text';
    this._MdInputDirective_6_8.check_type(currVal_6_3_1,throwOnChange,false);
    this._MdInputDirective_6_8.ngDoCheck(this,this._el_6,throwOnChange);
    if (this._MdButton_9_3.ngDoCheck(this,this._el_9,throwOnChange)) { this.compView_9.markAsCheckOnce(); }
    if (!throwOnChange) {
      if (this._query_MdHint_4_2.dirty) {
        this._query_MdHint_4_2.reset(([] as any[]));
        this._MdInputContainer_4_3.context._hintChildren = this._query_MdHint_4_2;
        this._query_MdHint_4_2.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._MdInputDirective_6_8.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._MdInputContainer_4_3.context.ngAfterContentInit(); }
    }
    this._MdInputContainer_4_3.checkHost(this,this.compView_4,this._el_4,throwOnChange);
    this._NgControlStatus_6_7.checkHost(this,this,this._el_6,throwOnChange);
    this._MdInputDirective_6_8.checkHost(this,this,this._el_6,throwOnChange);
    this._MdButton_9_3.checkHost(this,this.compView_9,this._el_9,throwOnChange);
    this.compView_4.internalDetectChanges(throwOnChange);
    this.compView_9.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_4.destroy();
    this.compView_9.destroy();
    this._NgModel_6_5.ngOnDestroy();
    this._MdInputDirective_6_8.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 4) && (ngContentIndex == 0))) {  }
    if (((nodeIndex == 4) && (ngContentIndex == 1))) {
      cb(this._text_5,ctx);
      cb(this._el_6,ctx);
      cb(this._text_7,ctx);
    }
    if (((nodeIndex == 4) && (ngContentIndex == 2))) {  }
    if (((nodeIndex == 4) && (ngContentIndex == 3))) {  }
    if (((nodeIndex == 4) && (ngContentIndex == 4))) {  }
    if (((nodeIndex == 9) && (ngContentIndex == 0))) { cb(this._text_10,ctx); }
  }
  handleEvent_4(eventName:string,$event:any):boolean {
    this.compView_4.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdInputContainer_4_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_6(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_6_3.handleEvent(eventName,$event) && result);
    result = (this._MdInputDirective_6_8.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngModelChange')) {
      const pd_sub_0:any = ((<any>(this.context.cityToAdd = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'keyup.enter')) {
      const pd_sub_1:any = ((<any>this.context.pushCity()) !== false);
      result = (pd_sub_1 && result);
    }
    return result;
  }
  handleEvent_9(eventName:string,$event:any):boolean {
    this.compView_9.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_9_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.pushCity()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
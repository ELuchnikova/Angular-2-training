/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './map.module';
import * as import2 from '@angular/core/src/di/injector';
class MapModuleInjector extends import0.NgModuleInjector<import1.MapModule> {
  _MapModule_0:import1.MapModule;
  constructor(parent:import2.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  createInternal():import1.MapModule {
    this._MapModule_0 = new import1.MapModule();
    return this._MapModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.MapModule)) { return this._MapModule_0; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const MapModuleNgFactory:import0.NgModuleFactory<import1.MapModule> = new import0.NgModuleFactory(MapModuleInjector,import1.MapModule);
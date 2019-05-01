import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedComponent} from '../shared/shared.component';
import {SharedService} from '../shared.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharedComponent],
  exports: [SharedComponent],

})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [SharedService]
    };
  }
  }

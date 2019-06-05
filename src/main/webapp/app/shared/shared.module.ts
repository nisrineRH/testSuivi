import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestSuiviSharedLibsModule, TestSuiviSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TestSuiviSharedLibsModule, TestSuiviSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TestSuiviSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestSuiviSharedModule {
  static forRoot() {
    return {
      ngModule: TestSuiviSharedModule
    };
  }
}

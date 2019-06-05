import { NgModule } from '@angular/core';

import { TestSuiviSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [TestSuiviSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [TestSuiviSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TestSuiviSharedCommonModule {}

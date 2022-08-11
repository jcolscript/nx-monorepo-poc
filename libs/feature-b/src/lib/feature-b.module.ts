import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureBComponent } from './feature-b/feature-b.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([{ path: '', component: FeatureBComponent }]),
  ],
  declarations: [FeatureBComponent],
})
export class FeatureBModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureAComponent } from './feature-a/feature-a.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([{ path: '', component: FeatureAComponent }]),
  ],
  declarations: [FeatureAComponent],
})
export class FeatureAModule {}

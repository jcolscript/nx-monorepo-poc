import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { UiModule } from '@gringotts-bank/ui';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: '/feature-a' },
      {
        path: 'feature-a',
        loadChildren: () =>
          import('@gringotts-bank/feature-a').then(
            (module) => module.FeatureAModule
          ),
      },
      {
        path: 'feature-b',
        loadChildren: () =>
          import('@gringotts-bank/feature-b').then(
            (module) => module.FeatureBModule
          ),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

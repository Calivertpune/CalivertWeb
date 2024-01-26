import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WINDOW_PROVIDERS } from './shared/services/window.service';
import { ENVIRONMENT_TOKEN } from 'projects/sdk/src/lib/environment.token';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from 'projects/sdk/src/lib/components/spinner/spinner.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    SpinnerComponent,
    ToastrModule.forRoot(),
  ],
  providers: [
    WINDOW_PROVIDERS,
    {
      provide: ENVIRONMENT_TOKEN,
      useValue: environment,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

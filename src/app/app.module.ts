import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
// import ngx-translate and the http loader
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateService} from '@ngx-translate/core';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import {SharedModule} from './shared/shared.module';
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
/*export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}*/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,


    // configure the imports
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
       // useFactory:  (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);


    const browserLang = translate.getBrowserLang();
    translate.setDefaultLang('en');
    translate.use('en');
  }
}

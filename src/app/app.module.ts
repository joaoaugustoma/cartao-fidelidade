import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from "@angular/cdk/layout";
import {MainComponent} from './pages/main/main.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {PerfilComponent} from './pages/main/perfil/perfil.component';
import {PontosComponent} from './pages/main/pontos/pontos.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "../helpers/token.interceptor";
import {LoginModule} from "./pages/login/login.module";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainComponent,
    PerfilComponent,
    PontosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoginModule,
    LayoutModule,
    MatPaginatorModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    LoginModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

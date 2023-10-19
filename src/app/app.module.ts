import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginModule} from "./pages/login/login.module";
import {LayoutModule} from "@angular/cdk/layout";
import {MainComponent} from './pages/main/main.component';
import {LojasComponent} from './pages/main/pages/lojas/lojas.component';
import {ProdutosComponent} from './pages/main/pages/produtos/produtos.component';
import {ClientesComponent} from './pages/main/pages/clientes/clientes.component';
import {DescontosComponent} from './pages/main/pages/descontos/descontos.component';
import {PremiosComponent} from './pages/main/pages/premios/premios.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {LoginComponent} from './pages/login/login.component';
import {LoginFormComponent} from './pages/login/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LojasComponent,
    ProdutosComponent,
    ClientesComponent,
    DescontosComponent,
    PremiosComponent,
    MainComponent]
  ,
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    LayoutModule,
    MatPaginatorModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

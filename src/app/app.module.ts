import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from "@angular/cdk/layout";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./helpers/token.interceptor";
import {LoginModule} from "./pages/login/login.module";
import {MainVendedorComponent} from "./pages/main-vendedor/main-vendedor.component";
import { LojasComponent } from './pages/main-vendedor/lojas/lojas.component';
import { ProdutosComponent } from './pages/main-vendedor/produtos/produtos.component';
import { ClientesComponent } from './pages/main-vendedor/clientes/clientes.component';
import { DescontosComponent } from './pages/main-vendedor/descontos/descontos.component';
import { PremiosComponent } from './pages/main-vendedor/premios/premios.component';
import {MainClienteComponent} from "./pages/main-cliente/main-cliente.component";
import {PontosComponent} from "./pages/main-cliente/pontos/pontos.component";
import {PerfilVendedorComponent} from "./pages/main-vendedor/perfil/perfil-vendedor.component";
import {PerfilClienteComponent} from "./pages/main-cliente/perfil/perfil-cliente.component";
import { CnpjFormatPipe } from './pipe/cnpj-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainClienteComponent,
    MainVendedorComponent,
    PerfilVendedorComponent,
    PerfilClienteComponent,
    PontosComponent,
    LojasComponent,
    ProdutosComponent,
    ClientesComponent,
    DescontosComponent,
    PremiosComponent,
    CnpjFormatPipe
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

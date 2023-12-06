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
import {LojasComponent} from './pages/main-vendedor/lojas/lojas.component';
import {ProdutosComponent} from './pages/main-vendedor/produtos/produtos.component';
import {ClientesComponent} from './pages/main-vendedor/clientes/clientes.component';
import {MainClienteComponent} from "./pages/main-cliente/main-cliente.component";
import {PontosComponent} from "./pages/main-cliente/pontos/pontos.component";
import {PerfilVendedorComponent} from "./pages/main-vendedor/perfil/perfil-vendedor.component";
import {PerfilClienteComponent} from "./pages/main-cliente/perfil/perfil-cliente.component";
import {CnpjFormatPipe} from './pipe/cnpj-format.pipe';
import {NgChartsModule} from "ng2-charts";
import {DonutChartComponent} from './pages/main-cliente/donut-chart/donut-chart.component';
import {MatCardModule} from "@angular/material/card";
import {BarChartComponent} from './pages/main-cliente/bar-chart/bar-chart.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {LojasEditarComponent} from './pages/main-vendedor/lojas/lojas-editar/lojas-editar.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskDirective} from "ngx-mask";
import {ToastrModule} from "ngx-toastr";
import {MatIconModule} from "@angular/material/icon";
import {ClientesEditarComponent} from './pages/main-vendedor/clientes/clientes-editar/clientes-editar.component';
import {TelefoneFormatPipe} from './pipe/telefone-format.pipe';
import {ProdutosEditarComponent} from './pages/main-vendedor/produtos/produtos-editar/produtos-editar.component';
import {LojaProdutoComponent} from './pages/main-vendedor/produtos/loja-produto/loja-produto.component';
import {CommonModule} from "@angular/common";

@NgModule({
  bootstrap: [AppComponent],
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
    CnpjFormatPipe,
    TelefoneFormatPipe,
    DonutChartComponent,
    BarChartComponent,
    LojasEditarComponent,
    ClientesEditarComponent,
    ProdutosEditarComponent,
    LojaProdutoComponent
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
    LoginModule,
    BrowserModule,
    NgChartsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    ToastrModule.forRoot(),
    MatIconModule,
    CommonModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}]
})
export class AppModule {
}

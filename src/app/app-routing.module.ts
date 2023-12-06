import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginClienteComponent} from "./pages/login/login-cliente/login-cliente.component";
import {AuthGuard} from "./helpers/auth.guard";
import {LoginVendedorComponent} from "./pages/login/login-vendedor/login-vendedor.component";
import {MainVendedorComponent} from "./pages/main-vendedor/main-vendedor.component";
import {MainClienteComponent} from "./pages/main-cliente/main-cliente.component";
import {PontosComponent} from "./pages/main-cliente/pontos/pontos.component";
import {PerfilClienteComponent} from "./pages/main-cliente/perfil/perfil-cliente.component";
import {PerfilVendedorComponent} from "./pages/main-vendedor/perfil/perfil-vendedor.component";
import {LojasComponent} from "./pages/main-vendedor/lojas/lojas.component";
import {ProdutosComponent} from "./pages/main-vendedor/produtos/produtos.component";
import {ClientesComponent} from "./pages/main-vendedor/clientes/clientes.component";
import {CarteirasComponent} from './pages/main-vendedor/carteiras/carteiras.component';

const routes: Routes = [
  { path: 'loginCliente', component: LoginClienteComponent},
  { path: '', redirectTo: 'loginCliente', pathMatch: 'full'},
  { path: 'cliente', component: MainClienteComponent, canActivate: [AuthGuard], children: [
      { path: '', component: PontosComponent},
      { path: 'pontos', component: PontosComponent},
      { path: 'perfil', component: PerfilClienteComponent}
    ]
  },
  { path: 'vendedor', component: MainVendedorComponent, canActivate: [AuthGuard], children: [
      { path: '', component: LojasComponent},
      { path: 'lojas', component: LojasComponent},
      { path: 'produtos', component: ProdutosComponent},
      { path: 'clientes', component: ClientesComponent},
      { path: 'perfil', component: PerfilVendedorComponent},
      { path: 'carteira', component: CarteirasComponent}
    ]
  },
  { path: 'loginVendedor', component: LoginVendedorComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

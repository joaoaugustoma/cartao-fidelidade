import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginClienteComponent} from "./pages/login/login-cliente/login-cliente.component";
import {MainComponent} from "./pages/main/main.component";
import {PerfilComponent} from "./pages/main/perfil/perfil.component";
import {PontosComponent} from "./pages/main/pontos/pontos.component";
import {AuthGuard} from "../helpers/auth.guard";
import {LoginVendedorComponent} from "./pages/login/login-vendedor/login-vendedor.component";

const routes: Routes = [
  { path: 'loginCliente', component: LoginClienteComponent},
  { path: '', redirectTo: 'loginCliente', pathMatch: 'full'},
  { path: '', component: MainComponent, canActivate: [AuthGuard], children: [
      { path: '', component: PontosComponent},
      { path: 'pontos', component: PontosComponent},
      { path: 'perfil', component: PerfilComponent}
    ]},
  { path: 'loginVendedor', component: LoginVendedorComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

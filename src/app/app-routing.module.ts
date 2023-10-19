import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {LojasComponent} from "./pages/main/pages/lojas/lojas.component";
import {LoginComponent} from "./pages/login/login.component";
import {ProdutosComponent} from "./pages/main/pages/produtos/produtos.component";
import {ClientesComponent} from "./pages/main/pages/clientes/clientes.component";
import {DescontosComponent} from "./pages/main/pages/descontos/descontos.component";
import {PremiosComponent} from "./pages/main/pages/premios/premios.component";
import {MainComponent} from "./pages/main/main.component";

const routes: Routes = [
  { path: '', component: MainComponent, children: [
      { path: '', component: LojasComponent},
      { path: 'lojas', component: LojasComponent},
      { path: 'produtos', component: ProdutosComponent},
      { path: 'clientes', component: ClientesComponent},
      { path: 'descontos', component: DescontosComponent},
      { path: 'premios', component: PremiosComponent},
    ]},
  { path: 'login', component: LoginComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./pages/login/login.component";
import {MainComponent} from "./pages/main/main.component";
import {PerfilComponent} from "./pages/main/perfil/perfil.component";
import {PontosComponent} from "./pages/main/pontos/pontos.component";
import {AuthGuard} from "../helpers/auth.guard";

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthGuard], children: [
      { path: '', component: PontosComponent},
      { path: 'pontos', component: PontosComponent},
      { path: 'perfil', component: PerfilComponent}
    ]},
  { path: 'login', component: LoginComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

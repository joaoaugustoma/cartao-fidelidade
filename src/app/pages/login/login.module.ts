import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {LoginVendedorComponent} from './login-vendedor/login-vendedor.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterLink, RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {LoginVendedorFormComponent} from "./login-vendedor/login-vendedor-form/login-vendedor-form.component";
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {LoginClienteComponent} from "./login-cliente/login-cliente.component";
import {LoginClienteFormComponent} from "./login-cliente/login-cliente-form/login-cliente-form.component";
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from "ngx-mask";

@NgModule({
  declarations: [
    LoginVendedorComponent,
    LoginVendedorFormComponent,
    LoginClienteComponent,
    LoginClienteFormComponent
  ],
  exports: [
    LoginVendedorComponent,
    LoginVendedorFormComponent,
    LoginClienteComponent,
    LoginClienteFormComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterOutlet,
    MatListModule,
    MatIconModule,
    RouterLinkWithHref,
    RouterLink,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    NgOptimizedImage,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ], providers: [provideNgxMask()]
})
export class LoginModule { }

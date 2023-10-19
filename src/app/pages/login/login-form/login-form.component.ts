import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(private router: Router) {}

  login() {
    // Implemente a lógica de autenticação aqui
    // if (autenticacaoBemSucedida) {
    this.router.navigate(['/home']).then(r => console.log(r));
    // }
  }

  esqueceuSenha() {
    // Implemente a lógica de recuperação de senha aqui
  }
}

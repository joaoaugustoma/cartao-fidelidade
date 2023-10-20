import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../../../services/authentication.service";

@Component({
  selector: 'app-login-cliente-form',
  templateUrl: './login-cliente-form.component.html',
  styleUrls: ['./login-cliente-form.component.css']
})
export class LoginClienteFormComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      cpf: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
    });
  }

  public login() {
    this.authenticationService.loginCliente(
      this.loginForm.get('cpf')!.value,
      this.loginForm!.get('senha')!.value
    );
  }
}

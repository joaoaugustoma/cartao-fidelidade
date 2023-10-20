import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../../services/authentication.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
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

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../../../services/authentication.service";

@Component({
  selector: 'app-login-vendedor-form',
  templateUrl: './login-vendedor-form.component.html',
  styleUrls: ['./login-vendedor-form.component.css']
})
export class LoginVendedorFormComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', Validators.required),
    });
  }

  public login() {
    this.authenticationService.loginVendedor(
      this.loginForm.get('email')!.value,
      this.loginForm!.get('senha')!.value
    );
  }
}

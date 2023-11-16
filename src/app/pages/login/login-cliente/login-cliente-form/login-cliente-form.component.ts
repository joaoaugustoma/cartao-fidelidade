import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../../../services/authentication.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login-cliente-form',
  templateUrl: './login-cliente-form.component.html',
  styleUrls: ['./login-cliente-form.component.css']
})
export class LoginClienteFormComponent implements OnInit {
  public loginForm!: FormGroup;
  public isOK: boolean = true;

  constructor(private authenticationService: AuthenticationService, private toastr: ToastrService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      cpf: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
    });
  }

  verificaCampos(): boolean {
    if (this.loginForm.get('cpf')!.value == "") {
      this.toastr.warning('Campo CPF não pode ser vazio');
      this.isOK = false;
    }
    if(this.loginForm.get('senha')!.value == "") {
      this.toastr.warning('Campo Senha não pode ser vazio');
      this.isOK = false;
    }
    return this.isOK;
  }

  public login() {
    console.log(this.isOK);
    if(this.verificaCampos()) {
      this.authenticationService.loginCliente(
        this.loginForm.get('cpf')!.value,
        this.loginForm!.get('senha')!.value
      );
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../../../services/authentication.service";
import {ToastrService} from "ngx-toastr";
import {MatDialog} from "@angular/material/dialog";
import {RegistroVendedorComponent} from "../registro-vendedor/registro-vendedor.component";

@Component({
  selector: 'app-login-vendedor-form',
  templateUrl: './login-vendedor-form.component.html',
  styleUrls: ['./login-vendedor-form.component.css']
})
export class LoginVendedorFormComponent implements OnInit {
  public loginForm!: FormGroup;
  public isOK: boolean = true;

  constructor(private authenticationService: AuthenticationService, private toastr: ToastrService, private modalDialog: MatDialog) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      cnpj: new FormControl('', [Validators.required]),
      senha: new FormControl('', Validators.required),
    });
  }

  verificaCampos(): boolean {
    if (this.loginForm.get('cnpj')!.value == "") {
      this.toastr.warning('Campo CNPJ não pode ser vazio');
      this.isOK = false;
    }
    if(this.loginForm.get('senha')!.value == "") {
      this.toastr.warning('Campo Senha não pode ser vazio');
      this.isOK = false;
    }
    return this.isOK;
  }

  public login() {
    if(this.verificaCampos()) {
      this.authenticationService.loginVendedor(
        this.loginForm.get('cnpj')!.value,
        this.loginForm!.get('senha')!.value
      );
    }
  }

  modalRegistroVendedor() {
    this.modalDialog.open(RegistroVendedorComponent, {
      width: '50%',
      height: '50%',
    }).afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-main',
  templateUrl: './main-cliente.component.html',
  styleUrls: ['./main-cliente.component.css'],
})
export class MainClienteComponent implements OnInit{

  constructor( public router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }


  sair() {
    this.authenticationService.logout();
  }
}

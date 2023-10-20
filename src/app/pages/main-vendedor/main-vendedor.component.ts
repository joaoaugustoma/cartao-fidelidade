import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-main',
  templateUrl: './main-vendedor.component.html',
  styleUrls: ['./main-vendedor.component.css'],
})
export class MainVendedorComponent implements OnInit{

  constructor( public router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }


  sair() {
    this.authenticationService.logout();
  }
}

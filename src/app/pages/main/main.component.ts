import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit{

  constructor( public router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }


  sair() {
    this.authenticationService.logout();
  }
}

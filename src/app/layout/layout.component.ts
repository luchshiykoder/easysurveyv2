import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  currentUser;

  constructor(public authService: AuthService) {
    this.currentUser = this.authService.$currentUser.value;
  }

  resetPassword() {
    console.log('CLICKED');
  }

  logoutProfile() {
    this.authService.logout();
  }


  ngOnInit(): void {
    this.currentUser = this.authService.$currentUser.value;
  }

}

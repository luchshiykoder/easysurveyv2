import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  currentUser = {firstName: 'Super', lastName: 'Admin', id: 1, username: 'demo', password: '12345678'};
  name = this.currentUser.firstName + ' ' + this.currentUser.lastName;

  constructor(public authService: AuthService) {
    // this.currentUser = this.authService.$currentUser.value;
    console.log(this.currentUser);
  }

  resetPassword() {
    console.log('CLICKED');
  }

  logoutProfile() {
    this.authService.logout();
  }


  ngOnInit(): void {
    // this.currentUser = this.authService.$currentUser.value;
  }

}

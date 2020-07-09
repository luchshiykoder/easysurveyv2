import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: string;
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
    if (this.authService.authenticated()) {
      this.router.navigate(['main']);
    }

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      localStorage.setItem('userDetails', JSON.stringify(this.loginForm.value));
      this.router.navigate(['main']);
    }, 500);

    // after success login, this.authService.$currentUser.next(user);
  }

  reset() {
    this.loginForm.reset();
  }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private socialAuthService: SocialAuthService) {
    socialAuthService.authState.subscribe((user) => {
      if (user) {
        console.log('User logged in:', user);
        localStorage.setItem('token', user.idToken);
        localStorage.setItem('role', 'client');
      } else {
        console.log('User logged out');
        localStorage.removeItem('token');
        localStorage.removeItem('role');
      }
    });
  }
}

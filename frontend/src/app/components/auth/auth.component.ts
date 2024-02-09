import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  email = '';
  password = '';
  name = '';
  isLogin = true;  // Alternar entre login y registro

  constructor(private authService: AuthService, private router: Router) {}

  toggleMode() {
    this.isLogin = !this.isLogin;
  }

  authenticate() {
    if (this.isLogin) {
      this.authService.login(this.email, this.password).then(
        res => {
          localStorage.setItem('token', res.access_token);
          alert('Login exitoso');
          this.router.navigate(['/alumnos']);
        },
        err => alert('Error en login')
      );
    } else {
      this.authService.register(this.name, this.email, this.password).then(
        res => alert('Registro exitoso, ahora inicia sesión'),
        err => alert('Error en el registro')
      );
    }
  }

  logout() {
    this.authService.logout();
    alert('Sesión cerrada');
    this.router.navigate(['/auth']);
  }

}

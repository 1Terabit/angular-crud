import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Simulación de un usuario registrado
  private registeredUser = {
    username: 'usuario',
    password: 'contraseña',
  };

  constructor() {}

  login(username: string, password: string) {
    // Simulación de una solicitud al backend
    return of(this.registeredUser)
      .toPromise()
      .then((user) => {
        if (username === user.username && password === user.password) {
          // Si las credenciales son correctas, retorna un objeto usuario
          return { success: true, username: user.username };
        } else {
          // Si las credenciales son incorrectas, retorna un error
          throw new Error('Credenciales incorrectas');
        }
      });
  }

  logout() {
    // Aquí iría la lógica para cerrar sesión
    // Por ejemplo, podrías borrar el token de autenticación del almacenamiento local
    return of(null).toPromise();
  }
}

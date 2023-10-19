import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(): boolean {
        // Implemente sua lógica de verificação de autenticação aqui.
        // Por exemplo, verifique se o usuário está autenticado.
        // if (usuarioAutenticado) {
            return true;
        // } else {
        //     // Redirecione o usuário para a tela de login se não estiver autenticado.
        //     this.router.navigate(['/login']);
        //     return false;
        // }
    }
}
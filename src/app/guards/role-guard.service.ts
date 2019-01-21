import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, CanActivate, RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean> | Promise<boolean> | boolean {

  const user = this.authService.decode();

  if(user['role'] === next.data.role) {
      return true;
  }

    this.router.navigate(['/404']);
    return false;
  }
}

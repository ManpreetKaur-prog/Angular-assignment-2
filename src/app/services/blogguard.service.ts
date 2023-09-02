import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogguardService implements  CanActivate {

  constructor() { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean| UrlTree | Observable<boolean | UrlTree> | Promise<boolean |UrlTree>
  {
    //e.g. : if user is admin, it is allowed else not allowed !!!
    return true;
  }
}

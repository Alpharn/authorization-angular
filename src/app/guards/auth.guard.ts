import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { ApiService } from '../services/api.service';

/**
 * Authentication guard function that checks for the presence of a token indicating
 * an authenticated user. If no token is found, it redirects the user to the login page.
 *
 * @returns A boolean value indicating whether navigation to a route should be allowed.
 */
export const authGuard: CanActivateFn = () => {
  const token = inject(ApiService).getToken();
  if (token) {
    return true;
  } else {
    inject(Router).navigate(['/login']);
    return false;
  }
};
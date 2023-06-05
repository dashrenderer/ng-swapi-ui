import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';

import { SwapiService } from '../services/swapi.service';

export const entityListResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(SwapiService).getEntitiesByType(route.paramMap.get('entityType')!, route.queryParams);
};

export const entityResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(SwapiService).getEntityById(route.paramMap.get('entityType')!, route.paramMap.get('id')!);
};

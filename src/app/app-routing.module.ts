import { NgModule, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';

import { ListContainerComponent } from './containers/list/list.container';
import { SwapiService } from './services/swapi.service';
import { DetailContainerComponent } from './containers/detail/detail.container';

export const entityListResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(SwapiService).getEntitiesByType(
    route.paramMap.get('entityType')!,
    route.queryParams
  );
};

export const entityResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(SwapiService).getEntityById(
    route.paramMap.get('entityType')!,
    route.paramMap.get('id')!
  );
};

const routes: Routes = [
  {
    path: ':entityType',
    pathMatch: 'full',
    component: ListContainerComponent,
    runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
    resolve: {
      entityList: entityListResolver,
    },
  },
  {
    path: ':entityType/:id',
    pathMatch: 'full',
    component: DetailContainerComponent,
    resolve: {
      entity: entityResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

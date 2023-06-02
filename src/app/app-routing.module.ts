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

export const entityResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(SwapiService).getEntitiesByType(
    route.paramMap.get('entityType')!
  );
};

const routes: Routes = [
  {
    path: ':entityType',
    component: ListContainerComponent,
    resolve: {
      entities: entityResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

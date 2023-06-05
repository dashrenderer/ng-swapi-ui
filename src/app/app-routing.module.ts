import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailContainerComponent } from './containers/detail/detail.container';
import { ListContainerComponent } from './containers/list/list.container';
import { entityListResolver, entityResolver } from './functions/entity-resolvers';

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

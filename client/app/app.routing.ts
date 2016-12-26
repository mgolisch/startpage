import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinkListComponent }  from './linklist.component';
import {CreateLinkComponent} from './createlink.component'
import {CreateCategoryComponent} from './createcategory.component'

const appRoutes: Routes = [
  { path: 'startpage', component: LinkListComponent , },
  { path: '', component: LinkListComponent },
  { path: 'createlink', component: CreateLinkComponent },
  { path: 'createlink/:id', component: CreateLinkComponent },
  { path: 'createcategory', component: CreateCategoryComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{useHash:true});
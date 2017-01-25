import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(appRoutes);

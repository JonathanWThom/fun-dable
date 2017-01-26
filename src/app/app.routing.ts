import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AdminComponent } from './admin/admin.component';
import { ArtComponent } from './art/art.component';
import { BusinessComponent } from './business/business.component';
import { PersonalComponent } from './personal/personal.component';




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
  }, {
    path: 'art',
    component: ArtComponent
  }, {
    path: 'business',
    component: BusinessComponent
  }, {
    path: 'personal',
    component: PersonalComponent
  }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';
import { CourseComponent } from './features/course/course.component';
import { CoursesComponent } from './features/courses/courses.component';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NotAuthorizedGuard] },
  { path: 'registration', component: RegistrationComponent, canActivate: [NotAuthorizedGuard] },
  { path: 'courses', component: CoursesComponent, canLoad:[AuthorizedGuard]},
  { path: 'courses/add', component: CourseComponent, canLoad:[AuthorizedGuard] },
  { path: 'courses/:id', component: CoursesComponent, canLoad:[AuthorizedGuard] },
  { path: 'courses/edit/:id', component: CoursesComponent, canLoad:[AuthorizedGuard] },
  { path: '',   redirectTo: '/courses', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

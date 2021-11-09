import { EditPriviligeComponent } from './components/privilige/edit-privilige/edit-privilige.component';
import { AddPriviligeComponent } from './components/privilige/add-privilige/add-privilige.component';
import { TermsComponent } from './shared/terms/terms.component';
import { OurPartnersComponent } from './shared/our-partners/our-partners.component';
import { ContactComponent } from './shared/contact/contact.component';
import { AboutComponent } from './shared/about/about.component';
import { AboutInternshipComponent } from './components/employment/internships/about-internship/about-internship.component';
import { InternshipAddComponent } from './components/employment/internships/internship-add/internship-add.component';
import { AboutJobComponent } from './components/employment/jobs/about-job/about-job.component';
import { JobAddComponent } from './components/employment/jobs/job-add/job-add.component';
import { JobsComponent } from './components/employment/jobs/jobs/jobs.component';
import { AboutMarketComponent } from './components/market/about-market/about-market.component';
import { MarketAddComponent } from './components/market/market-add/market-add.component';
import { MarketComponent } from './components/market/market/market.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { InternshipsComponent } from './components/employment/internships/internships/internships.component';
import { AuthGuard } from './guards/auth.guard';
import { PriviligesComponent } from './components/privilige/priviliges/priviliges.component';


const routes: Routes = [
  {path:"dashboard", redirectTo: "", pathMatch: "full"},
  //{path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  //{path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'market', component: MarketComponent, canActivate: [AuthGuard] },
  {path: 'market/add', component: MarketAddComponent, canActivate: [AuthGuard] },
  {path: 'market/:marketId/about', component: AboutMarketComponent, canActivate: [AuthGuard] },
  {path: 'jobs', component: JobsComponent, canActivate: [AuthGuard] },
  {path: 'jobs/add', component: JobAddComponent, canActivate: [AuthGuard] },
  {path: 'jobs/:jobId/about', component: AboutJobComponent, canActivate: [AuthGuard] },
  {path: 'internships', component: InternshipsComponent, canActivate: [AuthGuard] },
  {path: 'internships/add', component: InternshipAddComponent, canActivate: [AuthGuard] },
  {path: 'internships/:internshipId/about', component: AboutInternshipComponent, canActivate: [AuthGuard] },
  { path: 'projects', loadChildren: () => import('./components/projects/project.module').then(m => m.ProjectModule), canActivate: [AuthGuard] },
  { path: 'contributions', loadChildren: () => import('./components/contributions/contribution.module').then(m => m.ContributionModule), canActivate: [AuthGuard] },
  { path: 'priviliges', loadChildren: () => import('./components/privilige/privilige.module').then(m => m.PriviligeModule), canActivate: [AuthGuard] },
  { path: 'roles', loadChildren: () => import('./components/role/role.module').then(m => m.RoleModule), canActivate: [AuthGuard] },
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'our-partners', component: OurPartnersComponent},
  {path: 'terms', component: TermsComponent},
  //{path: '**', component: DashboardComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

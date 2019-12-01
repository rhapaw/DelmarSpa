import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CommercialComponent } from './commercial/commercial.component';
import { ContactComponent } from './contact/contact.component';
import { ManagementComponent } from './management/management.component';
import { ReceivershipComponent } from './receivership/receivership.component';
import { LinksComponent } from './links/links.component';
import { ColorComponent } from './color/color.component';
import { ColorsetDefaultResolver } from './_resolvers/colorset-default.resolver';

export const
appRoutes: Routes = [
  { path: '', component: HomeComponent}, //, resolve: { users: ColorsetDefaultResolver } },
  // { path: 'about', component: AboutComponent, resolve: { users: AboutResolver },
  { path: 'about', component: AboutComponent},
  { path: 'commercial', component: CommercialComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'links', component: LinksComponent},
  { path: 'management', component: ManagementComponent},
  { path: 'receivership', component: ReceivershipComponent},
  { path: 'color', component: ColorComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

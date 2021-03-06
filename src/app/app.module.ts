import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { CommercialComponent } from './commercial/commercial.component';
import { LinksComponent } from './links/links.component';
import { AboutComponent } from './about/about.component';
import { ReceivershipComponent } from './receivership/receivership.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ManagementComponent } from './management/management.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { ColorPickerModule } from 'ngx-color-picker';
import { ColorComponent } from './color/color.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AuthService } from './_services/auth.service';
import { ColorsetService } from './_services/colorset.service';
import { EmployeeService } from './_services/employee.service';
import { ListingService } from './_services/listing.service';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { ColorsetListResolver } from './_resolvers/colorset-list.resolver';
import { ColorsetDetailResolver } from './_resolvers/colorset-detail.resolver';
import { ColorsetDefaultResolver } from './_resolvers/colorset-default.resolver';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { NgxCheckboxModule } from 'ngx-checkbox';
import { MatCheckboxModule } from '@angular/material';
import { AlertifyService } from './_services/alertify.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      ColorComponent,
      ContactComponent,
      CommercialComponent,
      LinksComponent,
      AboutComponent,
      ReceivershipComponent,
      HomeComponent,
      HeaderComponent,
      FooterComponent,
      ManagementComponent,
      NavComponent
   ],
   imports: [
      FormsModule,
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      BrowserAnimationsModule,
      NgxNavbarModule,
      ColorPickerModule,
      AccordionModule.forRoot(),
      CollapseModule.forRoot(),
      ButtonsModule.forRoot(),
      HttpClientModule,
      JwtModule.forRoot({
        config: {
          tokenGetter,
          whitelistedDomains: ['localhost:5000'],
          blacklistedRoutes: ['localhost:5000/api/auth']
        }
      }),
      BsDropdownModule.forRoot(),
      NgxCheckboxModule,
      MatCheckboxModule
   ],
   providers: [
    AlertifyService,
    AuthService,
    ColorsetService,
    EmployeeService,
    ListingService,
    ColorsetListResolver,
    ColorsetDetailResolver,
    ColorsetDefaultResolver
    ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}

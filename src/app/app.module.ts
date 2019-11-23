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

@NgModule({
   declarations: [
      AppComponent,
      ContactComponent,
      CommercialComponent,
      LinksComponent,
      AboutComponent,
      ReceivershipComponent,
      HomeComponent,
      HeaderComponent,
      FooterComponent,
      ManagementComponent,
      NavComponent,
      ColorComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      BrowserAnimationsModule,
      NgxNavbarModule,
      ColorPickerModule,
      AccordionModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}

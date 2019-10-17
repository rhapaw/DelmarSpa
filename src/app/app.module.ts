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
      NavComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}

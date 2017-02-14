import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';
//import { routing } from './app.router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TesteComponent } from './teste/teste.component';
import { PessoasService } from './pessoas/pessoas.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    //routing
  ],
  providers: [PessoasService],
  bootstrap: [    
    MenuComponent,
    ContentComponent,
    FooterComponent
  ]
})
export class AppModule { }

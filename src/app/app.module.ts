import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { JurossimplesComponent } from './jurossimples/jurossimples.component';
import { JuroscompostoComponent } from './juroscomposto/juroscomposto.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'jurossimples', component: JurossimplesComponent },
      { path: 'juroscomposto', component: JuroscompostoComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    HomeComponent,
    JurossimplesComponent,
    JuroscompostoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

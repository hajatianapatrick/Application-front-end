import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AddRepasComponent } from './add-repas/add-repas.component';
import { RepasComponent } from './repas/repas.component';
const appRoutes: Routes = [
    { path: '', component: RepasComponent },
    { path: 'repas', component: RepasComponent },
    { path: 'addrepas', component: AddRepasComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddRepasComponent,
    RepasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
    appRoutes,
      { enableTracing: true } 
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
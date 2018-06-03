import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { SnailComponent } from './snail/snail.component';

const appRoutes: Routes = [
  { path: 'snail', component: SnailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SnailComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

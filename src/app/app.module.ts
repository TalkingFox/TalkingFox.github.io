import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { SnailComponent } from './snail/snail.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent},
  { path: 'snail', component: SnailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SnailComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true}),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

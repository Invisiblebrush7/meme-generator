import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material/material.module';
import { NewLineToBrPipe } from './shared/pipes/new-line-to-br.pipe';
import { SignupComponent } from './pages/signup/signup.component';
import { GeneratorComponent } from './pages/generator/generator.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';

@NgModule({
  declarations: [AppComponent, NewLineToBrPipe, SignupComponent, GeneratorComponent, ProfileComponent, LoginComponent, ForbiddenComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

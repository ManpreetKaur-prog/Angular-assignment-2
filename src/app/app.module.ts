import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogguardService } from './services/blogguard.service';
const applicationRoutes: Routes= [
  {path:'', component: BlogsComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[BlogguardService]}
]
@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogItemComponent,
    ButtonComponent,
    HeaderComponent,
    AddBlogComponent,
    DashboardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(applicationRoutes, {enableTracing: true}),
    CardModule,
    ButtonModule
  ],
  providers: [BlogguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

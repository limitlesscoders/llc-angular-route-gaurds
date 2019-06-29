import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CustomMaterialModule } from './custom-material.module';

import { AppComponent } from './app.component';
import { AuthGuard } from './auth-gaurd.service';
import { AuthService } from './auth.service';
import { ProductListComponent } from './product/product-list/product-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserService } from './user/user.service';
import { ProductService } from './product/product.service';

@NgModule({
  imports:[ 
        BrowserModule,
        FormsModule,
      
        CustomMaterialModule,

        AppRoutingModule ],
  declarations: [
         AppComponent,
         ProductListComponent,
         UserListComponent,
         UserDetailComponent,
         HomeComponent
        ],
  providers:[AuthGuard,AuthService,UserService,ProductService],      
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

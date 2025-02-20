import { Routes } from '@angular/router';
import { AuthComponent } from './core/layouts/auth/auth.component';
import { LoginComponent } from './core/layouts/auth/components/login/login.component';
import { RegisterComponent } from './core/layouts/auth/components/register/register.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { CategoryComponent } from './features/products/category/components/category/category.component';
import { NotfoundComponent } from './core/components/notfound/notfound.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { CartComponent } from './features/cart/cart/cart.component';
import { ProductsListComponent } from './features/products/components/products-list/products-list.component';
import { BrandListComponent } from './features/brands/components/brand-list/brand-list.component';
import { ProductDetailsComponent } from './features/products/components/product-details/product-details.component';

export const routes: Routes = [
    
    {path:'',component:MainLayoutComponent,children:[
        {path:'',redirectTo:'home',pathMatch:'full'},
        {path:'home',component:HomeComponent},
        {path:'categories',component:CategoryComponent},
        {path:'cart',component:CartComponent},
        {path:'products',component:ProductsListComponent},
        {path:'product-details/:id',component:ProductDetailsComponent},
        {path:'brands',component:BrandListComponent}
    ]},
    {path:'',component:AuthComponent,children:[
        {path:'login',component:LoginComponent},
        {path:'register',component:RegisterComponent}
    ]},
    {path:'**',component:NotfoundComponent},
];

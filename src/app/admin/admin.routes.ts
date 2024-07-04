import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministradoresComponent } from './administradores/administradores.component';
import { PruebaComponent } from './prueba/prueba.component';


export const ADMIN_ROUTES: Routes = [
    
    {path:'', component:DashboardComponent, pathMatch:'full'},
    {path:'dashboard', component:DashboardComponent},    
    {path:'administradores', component:AdministradoresComponent},
    {path:'prueba', component:PruebaComponent},     
    
];


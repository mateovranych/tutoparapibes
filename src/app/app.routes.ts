import { Routes } from '@angular/router';
import { IndexComponent } from './index/index/index.component';
import { HeaderComponent } from './index/header/header.component';
import { FooterComponent } from './index/footer/footer.component';
import { PruebaComponent } from './mayra/prueba/prueba.component';

export const routes: Routes = [

//EXPLICACIÓN MAYRA
{
    path: 'mayra',
    loadChildren:() =>
        import('./mayra/mayra.routes').then((x)=> x.MAYRA_ROUTES),
},

//RUTAS COMUNES
{path:'',component:IndexComponent},
{path:'header',component:HeaderComponent},
{path:'footer',component:FooterComponent}, 


//RUTAS COMPLEJAS CON CONSTANTES 
{
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes').then((x) => x.ADMIN_ROUTES),        
},
];


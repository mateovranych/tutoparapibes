import { Routes } from '@angular/router';
import { IndexComponent } from './index/index/index.component';
import { HeaderComponent } from './index/header/header.component';
import { FooterComponent } from './index/footer/footer.component';


export const routes: Routes = [


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


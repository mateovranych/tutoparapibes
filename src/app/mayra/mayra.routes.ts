import { Routes } from "@angular/router";
import { PruebaComponent } from "../admin/prueba/prueba.component";
import { TestComponent } from "./test/test.component";



export const MAYRA_ROUTES : Routes = [
    {path:'prueba',component:PruebaComponent},
    {path:'test',component:TestComponent}
]
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepuestosComponent } from './components/repuestos/repuestos.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';

const routes: Routes = [

  {
    path: 'vehiculos' , component:VehiculosComponent
  },
  {
    path: 'repuestos' , component:RepuestosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

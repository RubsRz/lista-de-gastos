import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosComponent } from './Components/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './Components/ingresar-presupuesto/ingresar-presupuesto.component';

const routes: Routes = [
  { path: 'ingresarPresupuesto', component: IngresarPresupuestoComponent},
  { path: 'gastos', component: GastosComponent},
  { path: '', redirectTo: '/ingresarPresupuesto', pathMatch:'full'},
  { path: '**', redirectTo: '/ingresarPresupuesto', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

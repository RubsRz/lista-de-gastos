import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastosComponent } from './Components/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './Components/ingresar-presupuesto/ingresar-presupuesto.component';
import { IngresarGastoComponent } from './Components/gastos/ingresar-gasto/ingresar-gasto.component';
import { ListarGastoComponent } from './Components/gastos/listar-gasto/listar-gasto.component';
import { HeaderComponent } from './Components/header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    IngresarPresupuestoComponent,
    IngresarGastoComponent,
    ListarGastoComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

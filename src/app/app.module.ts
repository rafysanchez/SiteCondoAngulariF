import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './app-material/app-material.module';

import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import './rxjs-operators';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { RecadosComponent } from './recados/recados.component';
import { EventosComponent } from './eventos/eventos.component';
import { MoradoresVisitantesComponent } from './moradores-visitantes/moradores-visitantes.component';
import { OcorrenciasComponent } from './ocorrencias/ocorrencias.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { SobreComponent } from './sobre/sobre.component';
import { AjudaComponent } from './ajuda/ajuda.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    VeiculosComponent,
    RecadosComponent,
    EventosComponent,
    MoradoresVisitantesComponent,
    OcorrenciasComponent,
    RelatoriosComponent,
    SobreComponent,
    AjudaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

//import do angular
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import{FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { configuracao } from 'src/environments/Firebase';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import do primeNg
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MenuModule} from 'primeng/menu';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {TableModule} from 'primeng/table';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {TabMenuModule} from 'primeng/tabmenu';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ToastModule} from 'primeng/toast';
import {MenubarModule} from 'primeng/menubar';
import {MessageService} from 'primeng/api';
import {SpinnerModule} from 'primeng/spinner';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
//components
import { AlterarSetorComponent } from './alterar-setor/alterar-setor.component';
import { AlterarUsuarioComponent } from './alterar-usuario/alterar-usuario.component';
import { AlterarViagemComponent } from './alterar-viagem/alterar-viagem.component';
import { AlterarParecerComponent } from './alterar-parecer/alterar-parecer.component';
import { CadastrarSetorComponent } from './cadastrar-setor/cadastrar-setor.component';
import { CadastrarCoordenadorComponent } from './cadastrar-coordenador/cadastrar-coordenador.component';
import { ListarCoordenadorComponent } from './listar-coordenador/listar-coordenador.component';
import { ListarSetorComponent } from './listar-setor/listar-setor.component';
import { ListarParecerComponent } from './listar-parecer/listar-parecer.component';
import { ListarViagemComponent } from './listar-viagem/listar-viagem.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { ListagemParaCoordenadorComponent } from './listar-usuarios-por-setor/listagem-para-coordenador.component';
import { LoginComponent } from './login/login.component';
import { MenuCoordenadorComponent } from './menu-coordenador/menu-coordenador.component';
import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { UsuarioComponent } from './cadastrar-usuario/usuario.component';
import { ViagemComponent } from './cadastrar-viagem/viagem.component';
import { VisualizacaoViagemComponent } from './visualizacao-viagem/visualizacao-viagem.component';
//servicos
import { UsuarioService } from './servicos/usuario.service';
import { ViagemService } from './servicos/viagem.service';
import { ParecerService } from './servicos/parecer.service';
import { CoordenadorService } from './servicos/coordenador.service';



export const rotas : Routes = [ 
  {path: "", component:LoginComponent},
  {path: "administrador/menu", component:MenuAdministradorComponent},
  {path: "administrador/listarTodosUsuarios", component:ListarUsuarioComponent},
  {path: "coordenador/menu", component:MenuCoordenadorComponent},
  {path: "coordenador/cadastro", component:CadastrarCoordenadorComponent},
  {path: "coordenador/ListagemUsuarios", component:ListagemParaCoordenadorComponent},
  {path: "coordenador/Parecer/Listar", component:ListarParecerComponent},
  {path: "coordenador/Parecer/atualizar/:id", component:AlterarParecerComponent},
  {path: "setor/listar", component:ListarSetorComponent},
  {path: "setor/visualizacao/:id", component:VisualizacaoViagemComponent},
  {path: "setor/atualizar/:id", component:AlterarSetorComponent},
  {path: "setor/cadastro", component:CadastrarSetorComponent},
  {path: "usuario/menu", component:MenuUsuarioComponent},
  {path: "usuario/atualizar/:id", component:AlterarUsuarioComponent},
  {path: "visita/atualizar/:id", component:AlterarViagemComponent},
  {path: "visita/visualizacao/:id", component:VisualizacaoViagemComponent},
  {path: "usuario/cadastro", component:UsuarioComponent},
  {path: "visita/cadastro", component:ViagemComponent},
  {path: "visita/listar/:id", component:ListarViagemComponent},
  
 



];

@NgModule({
  declarations: [
    UsuarioComponent,
    AppComponent,
    AlterarSetorComponent,
    AlterarParecerComponent,
    AlterarViagemComponent,
    AlterarUsuarioComponent,
    CadastrarSetorComponent,
    CadastrarCoordenadorComponent,
    ListarViagemComponent,
    ListagemParaCoordenadorComponent,
    ListarSetorComponent,
    ListarUsuarioComponent,
    ListarCoordenadorComponent,
    ListarParecerComponent,
    ListarViagemComponent,
    LoginComponent,
    ViagemComponent,
    VisualizacaoViagemComponent,
    MenuCoordenadorComponent,
    MenuAdministradorComponent,
    MenuUsuarioComponent,
    
    // VisitaComponent,
    // ListarVisitaComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    MenuModule,
    RouterModule.forRoot(rotas),
    FullCalendarModule,
    AngularFireModule.initializeApp(configuracao),
    TableModule,
    BreadcrumbModule,
    TabMenuModule,
    MenubarModule,
    SpinnerModule,
    CalendarModule,
    BrowserAnimationsModule,
    ToastModule,
    DropdownModule,
    InputTextareaModule
    
    
   


    
  ],
  
  providers: [ViagemService,AngularFirestore, UsuarioService, CoordenadorService,MessageService, ParecerService],
  bootstrap: [AppComponent]
  
})

export class AppModule { 

}



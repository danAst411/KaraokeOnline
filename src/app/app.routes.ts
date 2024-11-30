import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';


import { DashboardComponent } from './components/administrador/dashboard/dashboard.component';
import { ClientesComponent } from './components/administrador/clientes/clientes.component';
import { CancionesComponent } from './components/administrador/canciones/canciones.component';
import { PlaylistComponent } from './components/administrador/playlist/playlist.component';
import { SugerenciasComponent } from './components/administrador/sugerencias/sugerencias.component';
import { SistemaCalificacionesComponent } from './components/administrador/sistema-calificaciones/sistema-calificaciones.component';
import { AdminComponent } from './components/administrador/admin/admin.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PantallaKaraokeComponent } from './components/usuario/pantalla-karaoke/pantalla-karaoke.component';
import { PanelCancionesComponent } from './components/usuario/descubrir/panel-canciones/panel-canciones.component';
import { SugerenciasUsuariosComponent } from './components/usuario/descubrir/sugerencias-usuarios/sugerencias-usuarios.component';
import { ControlRemotoComponent } from './components/usuario/control-remoto/control-remoto.component';
import { ListadoSugerenciasComponent } from './components/usuario/listado-sugerencias/listado-sugerencias.component';
import { MisCancionesComponent } from './components/usuario/mis-canciones/mis-canciones.component';
import { ConfiguracionUsuarioComponent } from './components/usuario/configuracion-usuario/configuracion-usuario.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [

  {path: 'home', title: 'American Karaoke', component: LandingPageComponent },
  {path: '' , redirectTo: 'home',pathMatch: 'full'},
  {path: 'login', title: 'Login', component: LoginComponent },
  {path: 'karaoke', title: 'AmericanKaraoke', component: PantallaKaraokeComponent, children:[
    { 
      path: '', 
      redirectTo:'panel-canciones',
      pathMatch:'full',
      title: 'Descubrir' 
    },
    { 
      path: 'panel-canciones', 
      component: PanelCancionesComponent,
      title: 'Descubrir' 
    },

    { 
      path: 'sugerencias', 
      component: ListadoSugerenciasComponent,
      title: 'Sugerencias' 
    },
    { 
      path: 'mis-canciones', 
      component: MisCancionesComponent,
      title: 'Mis canciones' 
    },
    { 
      path: 'control-remoto', 
      component: ControlRemotoComponent,
      title: 'Control remoto' 
    },
    { 
      path: 'configuracion', 
      component: ConfiguracionUsuarioComponent,
      title: 'Ajustes' 
    }
  ]},

  { 
    
    path: 'admin', title: 'Administrador',component: AdminComponent, children: [
      { 
        path: '', 
        redirectTo:'dashboard',
        pathMatch:'full',
        title: 'Dashboard' 
      },
      { 

        path: 'dashboard', 
        component: DashboardComponent,
        title: 'Dashboard' 
      },
      { 
        path: 'clientes', 
        component: ClientesComponent,
        title: 'Clientes' 
      },
      { 
        path: 'canciones', 
        component: CancionesComponent,
        title: 'Canciones' 
      },
      { 
        path: 'playlist', 
        component: PlaylistComponent,
         title: 'Lista_de_Reproducción' 
      },
      { 
        path: 'sugerencias', 
        component: SugerenciasComponent,
         title: 'Sugerencias' 
      },
      { 
        path: 'calificacion', 
        component: SistemaCalificacionesComponent,
        title: 'Calificaciones' 
      },
    ]
  }
];

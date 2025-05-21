import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { DashboardComponent } from './components/administrador/dashboard/dashboard.component';
import { ClientesComponent } from './components/administrador/clientes/clientes.component';
import { CancionesComponent } from './components/administrador/canciones/canciones.component';
import { PlaylistComponent } from './components/administrador/playlist/playlist.component';
import { SugerenciasComponent } from './components/administrador/sugerencias/sugerencias.component';
import { SistemaCalificacionesComponent } from './components/administrador/sistema-calificaciones/sistema-calificaciones.component';
import { AdminComponent } from './components/administrador/admin/admin.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PantallaKaraokeComponent } from './components/usuario/pantalla-karaoke/pantalla-karaoke.component';
import { SugerenciasUsuariosComponent } from './components/usuario/descubrir/sugerencias-usuarios/sugerencias-usuarios.component';
import { ControlRemotoComponent } from './components/usuario/control-remoto/control-remoto.component';
import { ListadoSugerenciasComponent } from './components/usuario/listado-sugerencias/listado-sugerencias.component';
import { MisCancionesComponent } from './components/usuario/mis-canciones/mis-canciones.component';
import { ConfiguracionUsuarioComponent } from './components/usuario/configuracion-usuario/configuracion-usuario.component';

import { BusquedaCancionesComponent } from './components/usuario/busqueda-canciones/busqueda-canciones.component';
import { ReproductorComponent } from './components/usuario/reproductor/reproductor.component';
import { GenerosComponent } from './components/usuario/descubrir/generos/generos.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { ListaCancionesComponent } from './components/usuario/lista-canciones/lista-canciones.component';
import { ParticipantesComponent } from './components/usuario/participantes/participantes.component';
import { AuthGuard } from './guards/auth.guards';
import { AuthComponent } from './components/auth/auth/auth.component';
import { RegistroExitosoComponent } from './components/registro-exitoso/registro-exitoso.component';
import { BannerNoticiasComponent } from './components/usuario/banner-noticias/banner-noticias.component';
import { AdminBannerComponent } from './components/administrador/admin-banner/admin-banner.component';

export const routes: Routes = [

  {path: 'home', title: 'American Karaoke', component: LandingPageComponent }, 
  {path: 'login', title: 'Login', component: AuthComponent },
  {path: 'informacion', title: 'Informacion', component: InformacionComponent },
  { path: 'registro-exitoso', component: RegistroExitosoComponent },
  
  {path: 'karaoke', title: 'American Karaoke', 
    component: PantallaKaraokeComponent,
     
    children:[ 
        { 
          path: '', 
          component: ReproductorComponent,
          title: 'Enjoy the music' 
        },
      
        { 
          path: 'listas-creadas', 
          component: MisCancionesComponent,
          title: 'Mis canciones' 
        },
        { 
          path: 'buscar-canciones', 
          component: BusquedaCancionesComponent,
          title: 'Descubre' 
        },
        
        { 
          path: 'misPreferidas', 
          component: ListaCancionesComponent,
          title: 'Sugerencias' 
        },

        { 
          path: 'sugerenciasUsuario', 
          component: ListadoSugerenciasComponent,
          title: 'Sugerencias' 
        },

        { 
          path: 'perfil', 
          component: ConfiguracionUsuarioComponent,
          title: 'Perfil' 
        },
        { 
          path: 'generos', 
          component: GenerosComponent,
          title: 'Generos' 
        },

        { 
          path: '', 
          redirectTo:'karaoke',
          pathMatch:'full',
          title: 'Enjoy the music' 
        },

        { 
          path: 'participantes', 
          component: ParticipantesComponent,
          title: 'Participantes' 
        },
    
  ]},

  { path: 'admin', title: 'Administrador',
    component: AdminComponent,
    
    children: [
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

      { 
        path: 'banner_noticias', 
        component: AdminBannerComponent,
        title: 'Banner de Noticias' 
      },
    ]
  },
  
];


export class AppRoutingModule {}
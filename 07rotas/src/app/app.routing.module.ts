import { NgModule } from "@angular/core";
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './Components/cursos/cursos.component';
import { LoginComponent } from './Components/login/login.component';
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from './Components/home/home.component';
import { ModuleWithProviders } from '@angular/core';

const AppRoutes: Routes = [

    {path: 'cursos', component: CursosComponent},
    {path: 'curso/:id', component: CursoDetalheComponent},
    {path: 'login', component: LoginComponent},
    {path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
    {path: '', component: HomeComponent}
]


@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)]
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}
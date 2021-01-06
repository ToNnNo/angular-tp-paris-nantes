import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentationComponent } from './components/presentation/presentation.component';
import { TodoComponent } from './components/todo/todo.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FiltreComponent } from './components/filtre/filtre.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { LocaleComponent } from './components/locale/locale.component';
import { CustomfiltreComponent } from './components/customfiltre/customfiltre.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'filtre', component: FiltreComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'locale', component: LocaleComponent },
  { path: 'custom/filtre', component: CustomfiltreComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent } // wildcard (**/*.spec.ts)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

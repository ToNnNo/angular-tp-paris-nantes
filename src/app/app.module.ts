import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import de from '@angular/common/locales/de';
import ja from '@angular/common/locales/ja';

registerLocaleData(fr);
registerLocaleData(de);
registerLocaleData(ja);

import { AppComponent } from './app.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { TodoComponent } from './components/todo/todo.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FiltreComponent } from './components/filtre/filtre.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { LocaleComponent } from './components/locale/locale.component';
import { CustomfiltreComponent } from './components/customfiltre/customfiltre.component';
import { SortPipe } from './pipes/sort/sort.pipe';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { SigninComponent } from './components/signin/signin.component';
import { ServiceComponent } from './components/service/service.component';
import { ObservableComponent } from './components/observable/observable.component';
import { ParametersComponent } from './components/parameters/parameters.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    TodoComponent,
    HomeComponent,
    NotfoundComponent,
    FiltreComponent,
    DirectiveComponent,
    LocaleComponent,
    CustomfiltreComponent,
    SortPipe,
    FormulaireComponent,
    SigninComponent,
    ServiceComponent,
    ObservableComponent,
    ParametersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' } // Angular 9
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

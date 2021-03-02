import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';
import { AddExpensesComponent } from './components/add-expenses/add-expenses.component';
import { FormsModule } from '@angular/forms';

const routes : Routes = [
  {path : '', redirectTo : '/expenses', pathMatch : 'full'},
  {path : 'expenses', component : ExpensesListComponent},
  {path : 'findExpense/:id', component : AddExpensesComponent},
  {path : 'addexpenses', component : AddExpensesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ExpensesListComponent,
    AddExpensesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

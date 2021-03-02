import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Constant } from '../constants/constants';
import { Expenses } from '../models/expenses';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private getUrl : string = Constant.baseUrl + "/getExpenses";
  private addExpenseUrl : string = Constant.baseUrl + "/addExpenses";
  private findExpenseUrl : string = Constant.baseUrl + "/findExpense";
  private deleteUrl : string = Constant.baseUrl + "/deleteExpense";

  constructor(private http : HttpClient) { }

  getExpenses() : Observable<Expenses[]> {
    return this.http.get<Expenses[]>(this.getUrl).pipe (
      map(response => response)
    )
  }
  addExpenses(expenses : Expenses) : Observable<Expenses> {
    return this.http.post<Expenses>(this.addExpenseUrl, expenses);
  }
  findExpense(id : number) : Observable<Expenses> {
    return this.http.get<Expenses>(`${this.findExpenseUrl}/${id}`).pipe (
      map(response => response)
    );
  }

  deleteExpense(id : number) : Observable<any>{
    return this.http.delete<Expenses>(`${this.deleteUrl}/${id}`, {responseType : 'json'});
  }
}
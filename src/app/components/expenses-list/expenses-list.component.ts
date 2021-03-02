import { Component, OnInit } from '@angular/core';
import { Expenses } from 'src/app/models/expenses';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {

  expenses : Expenses[] = [];
  filters = {
    keyword: "",
    sortBy : 'Name'
  }

  constructor(private expenseService : ExpenseService) { }

  ngOnInit(): void {
    this.listExpenses();
  }

  listExpenses(){
    this.expenseService.getExpenses().subscribe(
      data => this.expenses = this.filterExpenses(data)
    )
  }
  
  filterExpenses(expensesList : Expenses[]) {
    return expensesList.filter((e) =>{
      return e.expense.toLowerCase().includes(this.filters.keyword.toLowerCase())
    }).sort((a, b) => {
      if (this.filters.sortBy === 'Name'){
        return a.expense.toLowerCase() < b.expense.toLowerCase() ? -1  : 1;
      }
      else {
        return a.amount > b.amount ? -1 : 1;
      }
    })
  }

}

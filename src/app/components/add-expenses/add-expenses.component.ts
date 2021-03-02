import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Expenses } from 'src/app/models/expenses';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.css']
})
export class AddExpensesComponent implements OnInit {

  expenses : Expenses = new Expenses;

  constructor(private expenseService : ExpenseService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const isIdPresent = this.activatedRoute.snapshot.paramMap.has("id");
    if (isIdPresent) {
      const checkId = this.activatedRoute.snapshot.paramMap.get("id");
      if (checkId != null) {
        const id = +checkId;
        this.expenseService.findExpense(id).subscribe(
          data => this.expenses = data
        )
      }
    }
  }
  addExpenses() {
    this.expenseService.addExpenses(this.expenses).subscribe(
      data => {
        console.log('resposed', data);
        this.router.navigateByUrl("/expenses");
      }
    )
  }  
  deleteExpense() {
    const isIdPresent = this.activatedRoute.snapshot.paramMap.has("id");
    if (isIdPresent) {
      const checkId = this.activatedRoute.snapshot.paramMap.get("id");
      if (checkId != null) {
        const id = +checkId;
        this.expenseService.deleteExpense(id).subscribe(
          data => {
            console.log("Expense is deleted");
            this.router.navigateByUrl("/expenses");
          } 
        )
      }
    }
  }
}

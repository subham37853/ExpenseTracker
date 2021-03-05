package com.shubho.expensetracker.controller;
import com.shubho.expensetracker.model.Expenses;
import com.shubho.expensetracker.service.ExpenseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/expenses/v1")
public class ExpenseController {

    private final ExpenseService expenseService;
    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @GetMapping("/getExpenses")
    public ResponseEntity<List<Expenses>> get() {
        List<Expenses> expenses = expenseService.findAll();
        return new ResponseEntity<>(expenses, HttpStatus.OK);
    }

    @PostMapping("/addExpenses")
    public ResponseEntity<Expenses> addExpense(@RequestBody Expenses expenses) {
        Expenses expenses1 = expenseService.addExpense(expenses);
        return new ResponseEntity<>(expenses1, HttpStatus.OK);
    }

    @GetMapping("/findExpense/{id}")
    public ResponseEntity<Expenses> findExpense(@PathVariable("id") Long id) {
        Expenses expenses1 = expenseService.findExpense(id);
        return new ResponseEntity<>(expenses1, HttpStatus.OK);
    }
    @DeleteMapping("/deleteExpense/{id}")
    public ResponseEntity<String> deleteExpense(@PathVariable("id") Long id) {
        expenseService.deleteExpense(id);
        return new ResponseEntity<>("Deleted Successfully", HttpStatus.OK);
    }
}

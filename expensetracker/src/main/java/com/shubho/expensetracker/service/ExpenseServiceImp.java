package com.shubho.expensetracker.service;

import com.shubho.expensetracker.model.Expenses;
import com.shubho.expensetracker.repository.ExpenseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExpenseServiceImp implements ExpenseService{
    private final ExpenseRepo expenseRepo;

    public ExpenseServiceImp(ExpenseRepo expenseRepo) {
        this.expenseRepo = expenseRepo;
    }

    @Override
    public List<Expenses> findAll() {
        return expenseRepo.findAll();
    }

    @Override
    public Expenses addExpense(Expenses expenses) {
        expenseRepo.save(expenses);
        return expenses;
    }
    @Override
    public Expenses findExpense(Long id) {
        Optional<Expenses> expensesOp = expenseRepo.findById(id);
        if (expensesOp.isEmpty()) return null;
        return expensesOp.get();
    }
    @Override
    public void deleteExpense(Long id) {
        expenseRepo.deleteById(id);
    }
}

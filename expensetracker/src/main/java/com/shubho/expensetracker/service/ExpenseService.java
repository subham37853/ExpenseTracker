package com.shubho.expensetracker.service;

import com.shubho.expensetracker.model.Expenses;
import java.util.*;

public interface ExpenseService {
    List<Expenses> findAll();
    Expenses addExpense(Expenses expenses);

    default Expenses findExpense(Long id) {
        return null;
    }
    default void deleteExpense(Long id) {}
}

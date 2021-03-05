package com.shubho.expensetracker.repository;

import com.shubho.expensetracker.model.Expenses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpenseRepo extends JpaRepository<Expenses, Long>{

}

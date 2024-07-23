package com.app.ems_server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.ems_server.model.Employee;
import java.util.List;

@Repository
public interface EmpRepository extends JpaRepository<Employee,Long> {


    @Query("select e from Employee e where e.first_name Like concat(:first_name,'%')")
    List<Employee> findByFirst_name(String first_name);

    
}  
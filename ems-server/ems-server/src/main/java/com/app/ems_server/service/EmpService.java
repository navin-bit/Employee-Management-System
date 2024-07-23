package com.app.ems_server.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.ems_server.model.Employee;
import com.app.ems_server.repository.EmpRepository;

@Service
public class EmpService {
  @Autowired
    private EmpRepository empRepository;

    public String addEmployee(Employee employee) {
        empRepository.save(employee);
        return "inserted....";

    }

    public Employee getEmpById(Long id) {
        return empRepository.findById(id).get();
    }

    public List<Employee> getAllEmp() {
        return empRepository.findAll();
    }

    public String UpdateByid(Long id, Employee UpdateEmployee) {
        Optional<Employee> emp = empRepository.findById(id);
        if (emp.isPresent()) {
            UpdateEmployee.setId(id);
            empRepository.save(UpdateEmployee);
            return "updated....";
        } else {
            return "not found....";
        }

    }

    public String deleteByid(Long id) {
        empRepository.deleteById(id);
        return "deleted....";
    }

    public String deleteAllEmp() {
        empRepository.deleteAll();
        return "deleted....";
    }

    public List<Employee> findByFirst_name(String first_name) {
        return empRepository.findByFirst_name(first_name);
    }

    
}

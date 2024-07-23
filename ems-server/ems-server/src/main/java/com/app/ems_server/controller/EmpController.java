package com.app.ems_server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.ems_server.model.Employee;
import com.app.ems_server.service.EmpService;

@RestController
@RequestMapping("/api")
public class EmpController {

    @Autowired
    private EmpService empService;

    @PostMapping("/Employees")
    public String addEmployee(@RequestBody Employee employee) {
        return empService.addEmployee(employee);
    }

    @GetMapping("/Employees")
    public List<Employee> getAllEmp() {
        return empService.getAllEmp();
    }

    @GetMapping("/Employees/{id}")
    public Employee getMethodName(@PathVariable Long id) {
        return empService.getEmpById(id);

    }

    @PutMapping("/Employees/{id}")
    public String UpdateByid(@PathVariable Long id, @RequestBody Employee UpdateEmployee) {
        return empService.UpdateByid(id, UpdateEmployee);
    }

    @DeleteMapping("/Employees/{id}")
    public String deleteByid(@PathVariable Long id) {
        return empService.deleteByid(id);
    }

    @DeleteMapping("/Employees")
    public String deleteAll() {
        return empService.deleteAllEmp();
    }

    @GetMapping("/Employees/emp")
    public List<Employee> findByFirst_name(@RequestParam("search") String first_name) {
        return empService.findByFirst_name(first_name);

    }

}

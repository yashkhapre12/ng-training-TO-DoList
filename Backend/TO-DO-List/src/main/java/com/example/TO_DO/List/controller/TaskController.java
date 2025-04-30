package com.example.TO_DO.List.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.TO_DO.List.entity.Task;
import com.example.TO_DO.List.services.TaskService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class TaskController {
    @Autowired
    private TaskService service;

    @GetMapping("/tasks")
    public List<Task> getTasks() {
        return service.getAllTasks();
    }

    @PostMapping("/task")
    public Task addTask(@RequestBody Task task) {
        return service.createTask(task);
    }

    @PutMapping("/task/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody Task task) {
        return service.updateTask(id, task);
    }

    @DeleteMapping("/task/{id}")
    public void deleteTask(@PathVariable Long id) {
        service.deleteTask(id);
    }
}



package com.example.TO_DO.List.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.TO_DO.List.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
}


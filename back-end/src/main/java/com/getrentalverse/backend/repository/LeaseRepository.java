package com.getrentalverse.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.getrentalverse.backend.model.Lease;

public interface LeaseRepository extends JpaRepository<Lease, Long> {

}

package com.getrentalverse.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.getrentalverse.backend.model.Property;

public interface PropertyRepository extends JpaRepository<Property, Long> {
	@Query("SELECT p FROM Property p WHERE p.user.id = :userId")
	List<Property> findAllPropertiesByUserId(@Param("userId") Long id);
}

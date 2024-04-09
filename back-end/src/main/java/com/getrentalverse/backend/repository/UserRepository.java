package com.getrentalverse.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.getrentalverse.backend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByUsername(String username);

	@Query("SELECT u FROM User u WHERE u.username = :username")
	User findUserByUsername(@Param("username") String username);
}

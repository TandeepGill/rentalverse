package com.getrentalverse.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.getrentalverse.backend.model.Token;

public interface TokenRepository extends JpaRepository<Token, Long> {
	@Query("SELECT t from Token t INNER JOIN User u ON t.user.id = u.id WHERE t.user.id = :userId AND t.loggedOut = false")

	List<Token> findAllTokenByUser(Long userId);
	
	Optional<Token> findByToken(String token);
}

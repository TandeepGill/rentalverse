package com.getrentalverse.backend.service;

import java.util.List;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.getrentalverse.backend.model.AuthenticationResponse;
import com.getrentalverse.backend.model.Token;
import com.getrentalverse.backend.model.User;
import com.getrentalverse.backend.repository.TokenRepository;
import com.getrentalverse.backend.repository.UserRepository;

@Service
public class AuthenticationService {

	private final UserRepository userRepository;

	private final PasswordEncoder passwordEncoder;

	private final JwtService jwtService;

	private final AuthenticationManager authenticationManager;

	private final TokenRepository tokenRepository;

	public AuthenticationService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService,
			AuthenticationManager authenticationManager, TokenRepository tokenRepository) {
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
		this.jwtService = jwtService;
		this.authenticationManager = authenticationManager;
		this.tokenRepository = tokenRepository;
	}

	public AuthenticationResponse register(User request) {

		if (userRepository.findByUsername(request.getUsername()).isPresent()) {
			return new AuthenticationResponse("User already exists");
		}

		User user = new User();

		user.setFirstName(request.getFirstName());
		user.setLastName(request.getLastName());
		user.setUsername(request.getUsername());
		user.setPassword(passwordEncoder.encode(request.getPassword()));
		user.setRole(request.getRole());

		user = userRepository.save(user);

		String jwt = jwtService.generateToken(user);
		
		saveUserToken(user, jwt);

		return new AuthenticationResponse(jwt);
	}

	private void saveUserToken(User user, String jwt) {
		Token token = new Token();
		token.setToken(jwt);
		token.setLoggedOut(false);
		token.setUser(user);
		tokenRepository.save(token);
	}

	public AuthenticationResponse authenticate(User request) {
		authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));

		User user = userRepository.findByUsername(request.getUsername()).orElseThrow();

		String token = jwtService.generateToken(user);
		
		revokeAllTokenByUser(user);
		
		saveUserToken(user, token);

		return new AuthenticationResponse(token);
	}

	private void revokeAllTokenByUser(User user) {
		List<Token> validTokenListByUser = tokenRepository.findAllTokenByUser(user.getId());
		
		if(!validTokenListByUser.isEmpty()) {
			validTokenListByUser.forEach(t -> t.setLoggedOut(true));
		}
		
		tokenRepository.saveAll(validTokenListByUser);
	}

}

package com.getrentalverse.backend.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.getrentalverse.backend.model.AuthenticationResponse;
import com.getrentalverse.backend.model.User;
import com.getrentalverse.backend.repository.UserRepository;

@Service
public class AuthenticationService {

	private final UserRepository userRepository;

	private final PasswordEncoder passwordEncoder;

	private final JwtService jwtService;

	private final AuthenticationManager authenticationManager;

	public AuthenticationService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService,
			AuthenticationManager authenticationManager) {
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
		this.jwtService = jwtService;
		this.authenticationManager = authenticationManager;
	}

	public AuthenticationResponse register(User request) {
		
		if(userRepository.findByUsername(request.getUsername()).isPresent()) {
			return new AuthenticationResponse("User already exists");
		}
		
		User user = new User();
		
		user.setFirstName(request.getFirstName());
		user.setLastName(request.getLastName());
		user.setUsername(request.getUsername());
		user.setPassword(passwordEncoder.encode(request.getPassword()));
		user.setRole(request.getRole());

		user = userRepository.save(user);

		String token = jwtService.generateToken(user);

		return new AuthenticationResponse(token);
	}

	public AuthenticationResponse authenticate(User request) {
		authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
		
		User user = userRepository.findByUsername(request.getUsername()).orElseThrow();
		
		String token = jwtService.generateToken(user);
		
		return new AuthenticationResponse(token);	
	}

}

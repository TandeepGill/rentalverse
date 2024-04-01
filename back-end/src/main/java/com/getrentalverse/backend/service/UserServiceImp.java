package com.getrentalverse.backend.service;

import org.springframework.stereotype.Service;

import com.getrentalverse.backend.model.User;
import com.getrentalverse.backend.repository.UserRepository;

@Service
public class UserServiceImp implements UserService {

	private UserRepository userRepository;
	private JwtService jwtService;

	public UserServiceImp(UserRepository userRepository, JwtService jwtService) {
		this.userRepository = userRepository;
		this.jwtService = jwtService;
	}

	@Override
	public User findUserByToken(String token) {
		String username = jwtService.extractUsername(token);
		
		return this.userRepository.findUserByUsername(username);
	}

}

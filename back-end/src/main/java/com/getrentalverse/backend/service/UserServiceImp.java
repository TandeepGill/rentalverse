package com.getrentalverse.backend.service;

import org.springframework.stereotype.Service;

import com.getrentalverse.backend.model.User;
import com.getrentalverse.backend.repository.UserRepository;

@Service
public class UserServiceImp implements UserService {

	private UserRepository userRepository;

	public UserServiceImp(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Override
	public User findUserByUsername(String username) {
		return this.userRepository.findUserByUsername(username);
	}

}

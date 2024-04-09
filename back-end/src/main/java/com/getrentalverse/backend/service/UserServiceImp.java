package com.getrentalverse.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.getrentalverse.backend.converter.UserDTOConverter;
import com.getrentalverse.backend.dto.UserDTO;
import com.getrentalverse.backend.model.User;
import com.getrentalverse.backend.repository.UserRepository;

@Service
public class UserServiceImp implements UserService {

	@Autowired
	private UserDTOConverter userDTOConverter;
	private UserRepository userRepository;
	private JwtService jwtService;

	public UserServiceImp(UserDTOConverter userDTOConverter, UserRepository userRepository, JwtService jwtService) {
		this.userDTOConverter = userDTOConverter;
		this.userRepository = userRepository;
		this.jwtService = jwtService;
	}

	@Override
	public UserDTO findUserByToken(String token) {
		String username = jwtService.extractUsername(token);
		User user = this.userRepository.findUserByUsername(username);
		System.out.println(user.getFirstName() + " " + user.getLastName() + " " + user.getUsername());
		UserDTO userDTO = userDTOConverter.convertUsertoUserDTO(user);
		System.out.println(userDTO.getFirstName() + " " + userDTO.getLastName() + " " + userDTO.getUsername());

		return userDTO;
	}

}

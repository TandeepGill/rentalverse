package com.getrentalverse.backend.converter;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.getrentalverse.backend.dto.UserDTO;
import com.getrentalverse.backend.model.User;

@Component
public class UserDTOConverter {

	@Autowired
	private ModelMapper modelMapper;

	public UserDTO convertUsertoUserDTO(User user) {
		UserDTO userDTO = modelMapper.map(user, UserDTO.class);
		return userDTO;
	}

	public User convertUserDTOtoUser(UserDTO userDTO) {
		User user = modelMapper.map(userDTO, User.class);
		return user;
	}

}

package com.getrentalverse.backend.service;

import com.getrentalverse.backend.dto.UserDTO;

public interface UserService {
	UserDTO findUserByToken(String token);
}

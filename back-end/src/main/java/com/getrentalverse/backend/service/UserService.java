package com.getrentalverse.backend.service;

import com.getrentalverse.backend.model.User;

public interface UserService {
	User findUserByUsername(String username);
}

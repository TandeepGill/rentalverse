package com.getrentalverse.backend.service;

import com.getrentalverse.backend.model.User;

public interface UserService {
	User findUserByToken(String token);
}

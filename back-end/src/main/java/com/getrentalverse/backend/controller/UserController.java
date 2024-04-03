package com.getrentalverse.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.getrentalverse.backend.dto.UserDTO;

import com.getrentalverse.backend.service.UserService;

@RestController
@RequestMapping("/api/v1/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping("/{token}")
	public ResponseEntity<?> findUserByToken(@PathVariable String token) {
		UserDTO userDTO = userService.findUserByToken(token);

		if (userDTO != null) {
			return ResponseEntity.status(HttpStatus.OK).body(userDTO);
		}

		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
}

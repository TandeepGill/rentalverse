package com.getrentalverse.backend.dto;

import com.getrentalverse.backend.model.Role;
import lombok.Data;

@Data
public class UserDTO {
	private Long id;
	private String firstName;
	private String lastName;
	private String username;
	private Role role;
}

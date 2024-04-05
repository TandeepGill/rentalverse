package com.getrentalverse.backend.dto;

import java.util.List;

import com.getrentalverse.backend.model.Property;
import com.getrentalverse.backend.model.Role;
import lombok.Data;

@Data
public class UserDTO {
	private Long id;
	private String firstName;
	private String lastName;
	private String username;
	private Role role;
	private List<Property> properties;
}

package com.getrentalverse.backend.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.getrentalverse.backend.model.Property;
import com.getrentalverse.backend.model.Role;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.ALWAYS)
public class UserDTO {

	private Long id;

	private String firstName;

	private String lastName;

	private String username;

	private Role role;

	private List<Property> properties;
}

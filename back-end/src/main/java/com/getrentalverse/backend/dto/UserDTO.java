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

	@JsonProperty
	private Long id;

	@JsonProperty
	private String firstName;

	@JsonProperty
	private String lastName;

	@JsonProperty
	private String username;

	@JsonProperty
	private Role role;

	@JsonProperty
	private List<Property> properties;
}

package com.getrentalverse.backend.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.getrentalverse.backend.model.Role;

@JsonInclude(JsonInclude.Include.ALWAYS)
public class UserDTO {

	private Long id;

	private String firstName;

	private String lastName;

	private String username;

	private Role role;

	private List<PropertyDTO> properties;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public List<PropertyDTO> getProperties() {
		return properties;
	}

	public void setProperties(List<PropertyDTO> properties) {
		this.properties = properties;
	}

}

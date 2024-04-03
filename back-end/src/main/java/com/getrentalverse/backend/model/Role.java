package com.getrentalverse.backend.model;

import com.fasterxml.jackson.annotation.JsonValue;

public enum Role {
	USER("user"), ADMIN("admin");

	private final String role;

	Role(String role) {
		this.role = role;
	}

	@JsonValue
	public String getRoleName() {
		return role;
	}
}
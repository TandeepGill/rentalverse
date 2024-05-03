package com.getrentalverse.backend.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.getrentalverse.backend.model.Lease;

@JsonInclude(JsonInclude.Include.ALWAYS)
public class PropertyDTO {
	private Long id;
	private String address1;
	private String address2;
	private String city;
	private String state;
	private String zip;
	private String country;
	private String bedroom;
	private String bathroom;
	private String sqft;
	private String image;

	private List<LeaseDTO> leases;

	@JsonIgnoreProperties("properties")
	private UserDTO user;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAddress1() {
		return address1;
	}

	public void setAddress1(String address1) {
		this.address1 = address1;
	}

	public String getAddress2() {
		return address2;
	}

	public void setAddress2(String address2) {
		this.address2 = address2;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZip() {
		return zip;
	}

	public void setZip(String zip) {
		this.zip = zip;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getBedroom() {
		return bedroom;
	}

	public void setBedroom(String bedroom) {
		this.bedroom = bedroom;
	}

	public String getBathroom() {
		return bathroom;
	}

	public void setBathroom(String bathroom) {
		this.bathroom = bathroom;
	}

	public String getSqft() {
		return sqft;
	}

	public void setSqft(String sqft) {
		this.sqft = sqft;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public List<LeaseDTO> getLeases() {
		return leases;
	}

	public void setLeases(List<LeaseDTO> leases) {
		this.leases = leases;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}

}

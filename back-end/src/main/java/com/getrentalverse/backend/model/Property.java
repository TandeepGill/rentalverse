package com.getrentalverse.backend.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "property")
public class Property {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "address_1")
	@NotBlank(message = "Address 1 cannot be blank. Please input the first line of your address.")
	private String address1;

	@Column(name = "address_2")
	private String address2;

	@Column(name = "city")
	@NotBlank(message = "City cannot be blank. Please input a city.")
	private String city;

	@Column(name = "state")
	@NotBlank(message = "State cannot be blank. Please input a state.")
	private String state;

	@Column(name = "zip")
	@NotBlank(message = "Zip code cannot be blank. Please input a zip code.")
	private String zip;

	@Column(name = "country")
	@NotBlank(message = "Country cannot be blank. Please input a country.")
	private String country;

	@Column(name = "bedroom")
	@NotBlank(message = "Bedroom cannot be blank. Please input a bedroom.")
	private String bedroom;

	@Column(name = "bathroom")
	@NotBlank(message = "Bathroom cannot be blank. Please input a bathroom.")
	private String bathroom;

	@Column(name = "sqft")
	@NotBlank(message = "Sqft cannot be blank. Please input the size of property in sqft.")
	private String sqft;

	@Column(name = "image")
	@NotBlank(message = "Image cannot be blank. Please input a url for your image.")
	private String image;

	@Column(name = "type")
	@NotBlank(message = "Type cannot be blank. Please input a type for your property.")
	private String type;

	@OneToMany(mappedBy = "property")
	private List<Lease> leases;

	@ManyToOne
	@JoinColumn(name = "FK_USER_ID")
	@JsonIgnoreProperties("properties")
	private User user;

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

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public List<Lease> getLeases() {
		return leases;
	}

	public void setLeases(List<Lease> leases) {
		this.leases = leases;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}

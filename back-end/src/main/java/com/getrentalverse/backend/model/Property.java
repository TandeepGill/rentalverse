package com.getrentalverse.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
	private int zip;

	@Column(name = "country")
	@NotBlank(message = "Country cannot be blank. Please input a country.")
	private String country;

	@Column(name = "bedroom")
	@NotBlank(message = "Bedroom cannot be blank. Please input a bedroom.")
	private int bedroom;

	@Column(name = "bathroom")
	@NotBlank(message = "Bathroom cannot be blank. Please input a bathroom.")
	private int bathroom;

	@Column(name = "sqft")
	@NotBlank(message = "Sqft cannot be blank. Please input the size of property in sqft.")
	private int sqft;

	@Column(name = "image")
	@NotBlank(message = "Image cannot be blank. Please input a url for your image.")
	private String image;

	@ManyToOne
	@JoinColumn(name = "FK_USER_ID")
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

	public int getZip() {
		return zip;
	}

	public void setZip(int zip) {
		this.zip = zip;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public int getBedroom() {
		return bedroom;
	}

	public void setBedroom(int bedroom) {
		this.bedroom = bedroom;
	}

	public int getBathroom() {
		return bathroom;
	}

	public void setBathroom(int bathroom) {
		this.bathroom = bathroom;
	}

	public int getSqft() {
		return sqft;
	}

	public void setSqft(int sqft) {
		this.sqft = sqft;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}

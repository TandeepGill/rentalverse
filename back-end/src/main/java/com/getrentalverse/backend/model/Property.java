package com.getrentalverse.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
}

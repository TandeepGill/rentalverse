package com.getrentalverse.backend.model;

import java.math.BigDecimal;
import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "lease")
public class Lease {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "first_name")
	@NotBlank(message = "First name cannot be blank. Please input a first name.")
	@Size(min = 2, max = 60, message = "First name must be 2 to 60 characters long.")
	private String firstName;

	@Column(name = "last_name")
	@NotBlank(message = "Last name cannot be blank. Please input a last name.")
	@Size(min = 2, max = 60, message = "Last name must be 2 to 60 characters long.")
	private String lastName;

	@Column(name = "start_date")
	@NotBlank(message = "Start date cannot be blank. Please input a start date.")
	private Date startDate;

	@Column(name = "end_date")
	@NotBlank(message = "End date cannot be blank. Please input an end date.")
	private Date endDate;

	@Column(name = "price")
	@NotBlank(message = "Price cannot be blank. Please input a price.")
	private BigDecimal price;

	@Column(name = "is_Current_Tenant")
	@NotBlank(message = "Is current tenant cannot be blank. Please input true or false.")
	private boolean isCurrentTenant;

	@ManyToOne
	@JoinColumn(name = "FK_PROPERTY_ID")
	@JsonIgnoreProperties("leases")
	private Property property;

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

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public boolean isCurrentTenant() {
		return isCurrentTenant;
	}

	public void setCurrentTenant(boolean isCurrentTenant) {
		this.isCurrentTenant = isCurrentTenant;
	}

	public Property getProperty() {
		return property;
	}

	public void setProperty(Property property) {
		this.property = property;
	}

}

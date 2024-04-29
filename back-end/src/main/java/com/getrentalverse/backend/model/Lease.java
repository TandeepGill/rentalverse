package com.getrentalverse.backend.model;

import java.math.BigDecimal;
import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

}

package com.getrentalverse.backend.dto;

import java.math.BigDecimal;
import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class LeaseDTO {
	private Long id;
	private String firstName;
	private String lastName;
	private Date startDate;
	private Date endDate;
	private BigDecimal price;
	private Boolean isCurrentTenant;

	@JsonIgnoreProperties("leases")
	private PropertyDTO property;

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

	public Boolean getIsCurrentTenant() {
		return isCurrentTenant;
	}

	public void setIsCurrentTenant(Boolean isCurrentTenant) {
		this.isCurrentTenant = isCurrentTenant;
	}

	public PropertyDTO getProperty() {
		return property;
	}

	public void setProperty(PropertyDTO property) {
		this.property = property;
	}

}

package com.getrentalverse.backend.service;

import java.util.List;

import com.getrentalverse.backend.model.Property;

public interface PropertyService {
	Property saveProperty(Property property);

	List<Property> findAllPropertiesByUserId(Long id);

	boolean updatePropertyById(Long id, Property property);

	boolean deleteParcelById(Long id);
}

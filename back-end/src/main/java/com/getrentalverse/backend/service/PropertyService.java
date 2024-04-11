package com.getrentalverse.backend.service;

import java.util.List;

import com.getrentalverse.backend.dto.PropertyDTO;
import com.getrentalverse.backend.model.Property;

public interface PropertyService {
	PropertyDTO saveProperty(Property property);

	List<PropertyDTO> findAllPropertiesByUserId(Long id);

	boolean updatePropertyById(Long id, Property property);

	boolean deleteParcelById(Long id);
}

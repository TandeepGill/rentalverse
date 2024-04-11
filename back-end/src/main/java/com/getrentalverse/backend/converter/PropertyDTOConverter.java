package com.getrentalverse.backend.converter;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.getrentalverse.backend.dto.PropertyDTO;
import com.getrentalverse.backend.model.Property;

@Component
public class PropertyDTOConverter {
	
	@Autowired
	private ModelMapper modelMapper;
	
	public PropertyDTO convertPropertytoPropertyDTO(Property property) {
		PropertyDTO propertyDTO = modelMapper.map(property, PropertyDTO.class);
		return propertyDTO;
	}
	
	public Property convertPropertyDTOtoProperty(PropertyDTOConverter propertyDTO) {
		Property property = modelMapper.map(propertyDTO, Property.class);
		return property;
	}
}

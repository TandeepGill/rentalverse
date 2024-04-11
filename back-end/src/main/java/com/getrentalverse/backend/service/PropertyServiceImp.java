package com.getrentalverse.backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.getrentalverse.backend.converter.PropertyDTOConverter;
import com.getrentalverse.backend.dto.PropertyDTO;
import com.getrentalverse.backend.model.Property;
import com.getrentalverse.backend.repository.PropertyRepository;

@Service
public class PropertyServiceImp implements PropertyService {

	@Autowired
	private PropertyDTOConverter propertyDTOConverter;
	private PropertyRepository propertyRepository;

	public PropertyServiceImp(PropertyDTOConverter propertyDTOConverter, PropertyRepository propertyRepository) {
		this.propertyDTOConverter = propertyDTOConverter;
		this.propertyRepository = propertyRepository;
	}

	@Override
	public PropertyDTO saveProperty(Property property) {
		Property savedProperty = this.propertyRepository.save(property);
		return this.propertyDTOConverter.convertPropertytoPropertyDTO(savedProperty);
	}

	@Override
	public List<PropertyDTO> findAllPropertiesByUserId(Long id) {
		List<Property> properties = this.propertyRepository.findAllPropertiesByUserId(id);
		List<PropertyDTO> propertiesDTO = new ArrayList<PropertyDTO>();

		for (Property property : properties) {
			PropertyDTO propertyDTO = propertyDTOConverter.convertPropertytoPropertyDTO(property);
			propertiesDTO.add(propertyDTO);
		}

		return propertiesDTO;
	}

	@Override
	public boolean updatePropertyById(Long id, Property property) {
		if (this.propertyRepository.existsById(property.getId())) {
			this.propertyRepository.save(property);
			return true;
		}

		return false;
	}

	@Override
	public boolean deleteParcelById(Long id) {
		if (this.propertyRepository.existsById(id)) {
			this.propertyRepository.deleteById(id);
			return true;
		}

		return false;
	}

}

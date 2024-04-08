package com.getrentalverse.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.getrentalverse.backend.model.Property;
import com.getrentalverse.backend.repository.PropertyRepository;

@Service
public class PropertyServiceImp implements PropertyService {

	@Autowired
	private PropertyRepository propertyRepository;

	public PropertyServiceImp(PropertyRepository propertyRepository) {
		this.propertyRepository = propertyRepository;
	}

	@Override
	public Property saveProperty(Property property) {
		return this.propertyRepository.save(property);
	}

	@Override
	public List<Property> findAllPropertiesByUserId(Long id) {
		return this.propertyRepository.findAllPropertiesByUserId(id);
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

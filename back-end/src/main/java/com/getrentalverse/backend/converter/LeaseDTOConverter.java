package com.getrentalverse.backend.converter;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.getrentalverse.backend.dto.LeaseDTO;
import com.getrentalverse.backend.model.Lease;

@Component
public class LeaseDTOConverter {

	@Autowired
	private ModelMapper modelMapper;

	public LeaseDTO convertLeasetoLeaseDTO(Lease lease) {
		LeaseDTO leaseDTO = modelMapper.map(lease, LeaseDTO.class);
		return leaseDTO;
	}

	public Lease convertLeaseDTOtoLease(LeaseDTO leaseDTO) {
		Lease lease = modelMapper.map(leaseDTO, Lease.class);
		return lease;
	}
}

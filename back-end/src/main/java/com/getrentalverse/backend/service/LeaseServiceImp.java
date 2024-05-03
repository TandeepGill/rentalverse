package com.getrentalverse.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.getrentalverse.backend.converter.LeaseDTOConverter;
import com.getrentalverse.backend.dto.LeaseDTO;
import com.getrentalverse.backend.model.Lease;
import com.getrentalverse.backend.repository.LeaseRepository;

@Service
public class LeaseServiceImp implements LeaseService {

	@Autowired
	private LeaseDTOConverter leaseDTOConverter;
	private LeaseRepository leaseRepository;

	public LeaseServiceImp(LeaseDTOConverter leaseDTOConverter, LeaseRepository leaseRepository) {
		this.leaseDTOConverter = leaseDTOConverter;
		this.leaseRepository = leaseRepository;
	}

	@Override
	public LeaseDTO saveLease(Lease lease) {
		Lease savedLease = this.leaseRepository.save(lease);
		return this.leaseDTOConverter.convertLeasetoLeaseDTO(savedLease);
	}

	@Override
	public boolean updateLeaseById(Long id, Lease lease) {
		if (this.leaseRepository.existsById(lease.getId())) {
			this.leaseRepository.save(lease);
			return true;
		}

		return false;
	}

	@Override
	public boolean deleteLeaseById(Long id) {
		if (this.leaseRepository.existsById(id)) {
			this.leaseRepository.deleteById(id);
			return true;
		}

		return false;
	}

}

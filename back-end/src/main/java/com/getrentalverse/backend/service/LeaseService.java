package com.getrentalverse.backend.service;

import com.getrentalverse.backend.dto.LeaseDTO;
import com.getrentalverse.backend.model.Lease;

public interface LeaseService {
	LeaseDTO saveLease(Lease lease);

	boolean updateLeaseById(Long id, Lease lease);

	boolean deleteLeaseById(Long id);
}

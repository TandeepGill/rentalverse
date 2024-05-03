package com.getrentalverse.backend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.getrentalverse.backend.model.Lease;
import com.getrentalverse.backend.service.LeaseService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/leases")
@CrossOrigin(origins = "http://localhost:3000")
public class LeaseController {

	@Autowired
	private LeaseService leaseService;

	@PostMapping
	public ResponseEntity<?> saveLease(@Valid @RequestBody Lease lease, BindingResult bindingResult) {
		if (bindingResult.hasErrors()) {
			Map<String, String> errors = new HashMap<>();

			for (FieldError error : bindingResult.getFieldErrors()) {

				errors.put(error.getField(), error.getDefaultMessage());
			}

			return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);

		}
		
		return new ResponseEntity<>(this.leaseService.saveLease(lease), HttpStatus.CREATED);
	}
}

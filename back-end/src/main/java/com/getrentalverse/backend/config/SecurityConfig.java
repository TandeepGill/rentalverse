package com.getrentalverse.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.getrentalverse.backend.filter.JwtAuthenticationFilter;
import com.getrentalverse.backend.service.UserDetailsServiceImp;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	private final UserDetailsServiceImp userDetailsServiceImp;

	private final JwtAuthenticationFilter jwtAuthenticationFilter;

	private final CustomAccessDeniedHandler customAccessDeniedHandler;

	private final CustomLogoutHandler customLogoutHandler;

	public SecurityConfig(UserDetailsServiceImp userDetailsServiceImp, JwtAuthenticationFilter jwtAuthenticationFilter,
			CustomAccessDeniedHandler customAccessDeniedHandler, CustomLogoutHandler customLogoutHandler) {
		this.userDetailsServiceImp = userDetailsServiceImp;
		this.jwtAuthenticationFilter = jwtAuthenticationFilter;
		this.customAccessDeniedHandler = customAccessDeniedHandler;
		this.customLogoutHandler = customLogoutHandler;
	}

	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		return http.csrf(AbstractHttpConfigurer::disable)
				.authorizeHttpRequests(req -> req.requestMatchers("/api/v1/auth/login/**", "/api/v1/auth/register/**").permitAll()
						.requestMatchers("/api/v1/auth/admin_only/**").hasAuthority("ADMIN").anyRequest().authenticated())
				.userDetailsService(userDetailsServiceImp)
				.exceptionHandling(e -> e.accessDeniedHandler(customAccessDeniedHandler)
						.authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED)))
				.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
				.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
				.logout(l -> l.logoutUrl("/logout").addLogoutHandler(customLogoutHandler).logoutSuccessHandler(
						(request, response, authentication) -> SecurityContextHolder.clearContext()))
				.build();
	}

	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
		return configuration.getAuthenticationManager();
	}
}

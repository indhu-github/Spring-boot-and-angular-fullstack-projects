package com.example.demo.service;

import com.example.demo.dto.ApiResponse;
import com.example.demo.dto.LoginDto;
import com.example.demo.dto.SignUpDto;

public interface UserService {

    ApiResponse signUp(SignUpDto signUpDto);

    ApiResponse login(LoginDto loginDto);
}

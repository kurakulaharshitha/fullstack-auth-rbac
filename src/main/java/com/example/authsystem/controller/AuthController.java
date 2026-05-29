package com.example.authsystem.controller;

import com.example.authsystem.jwt.JwtService;
import com.example.authsystem.model.User;
import com.example.authsystem.repository.UserRepository;
import com.example.authsystem.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/register")
    public String register(@RequestBody User user) {

        return authService.registerUser(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User loginUser) {

        User user = userRepository.findByEmail(loginUser.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (passwordEncoder.matches(
                loginUser.getPassword(),
                user.getPassword()
        )) {

            return jwtService.generateToken(user.getEmail());
        }

        throw new RuntimeException("Invalid Password");
    }
}
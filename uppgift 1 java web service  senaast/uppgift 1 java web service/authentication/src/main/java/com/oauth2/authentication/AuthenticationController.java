package com.oauth2.authentication;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {
    
    @GetMapping("/hello")
    public String hello(){
        return "Welcome! you are authenticated!";
    }

}

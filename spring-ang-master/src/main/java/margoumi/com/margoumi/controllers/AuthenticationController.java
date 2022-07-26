package margoumi.com.margoumi.controllers;

import margoumi.com.margoumi.models.User;
import margoumi.com.margoumi.service.AuthenticationService;
import margoumi.com.margoumi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/authentication")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private UserService userService;

    @PostMapping("/sign-up")
    public ResponseEntity<?> signUp(@RequestBody User user){
        if (userService.findByEmail(user.getEmail()).isPresent()){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        User Suser = userService.saveUser(user);
        return new ResponseEntity<>(Suser, HttpStatus.CREATED);
    }

    @PostMapping("/sign-in")
    public ResponseEntity<User> signIn(@RequestBody User user){
        User Suser = authenticationService.SignInAndReturnJWT(user);
        return new ResponseEntity<>(Suser, HttpStatus.OK);
    }
}

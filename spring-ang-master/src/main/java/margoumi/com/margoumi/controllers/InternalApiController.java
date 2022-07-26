package margoumi.com.margoumi.controllers;

import margoumi.com.margoumi.models.User;
import margoumi.com.margoumi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/internal")
public class InternalApiController {

    @Autowired
    private UserService userService;

    @PutMapping("/make-admin/{email}")
    public ResponseEntity<?> makeAdmin(@PathVariable String email){
         userService.makeAdmin(email);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

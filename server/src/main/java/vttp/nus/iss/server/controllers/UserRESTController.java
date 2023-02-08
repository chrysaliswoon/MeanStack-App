package vttp.nus.iss.server.controllers;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import vttp.nus.iss.server.models.User;
import vttp.nus.iss.server.services.UserService;

@Controller
@RequestMapping(path = "/api")
@CrossOrigin(origins="*") // Add CORS header to the response
public class UserRESTController {
    
    @Autowired
    private UserService userSvc;

    //? Create New User
    @PostMapping(path="/register", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> createUser(@RequestBody User user) {
        try {
            userSvc.createUser(user);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return  null;

    }
}

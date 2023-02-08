package vttp.nus.iss.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vttp.nus.iss.server.models.User;
import vttp.nus.iss.server.repositories.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepo;

    public boolean createUser(final User user) throws Exception {
        userRepo.createUser(user);

        return true;
    }

    
}

package vttp.nus.iss.server.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import vttp.nus.iss.server.models.User;
import static vttp.nus.iss.server.repositories.Queries.*;


@Repository
public class UserRepository {
    
    //? Establish connection with the SQL Database
    //? Inject an instance of JdbcTemplate.Must be configured to a specific database
    @Autowired
    private JdbcTemplate jdbcTemplate;

    //? Create new User
    public Integer createUser(User user) throws Exception {
        return jdbcTemplate.update(SQL_INSERT_USER, user.getFirstName(), user.getLastName(), user.getUsername(), user.getEmail(), user.getPassword());
    }
    
}

package vttp.nus.iss.server.repositories;

public interface Queries {
    
    public static String SQL_INSERT_USER = "INSERT INTO users (firstName, lastName, username, email, password) VALUES(?, ?, ?, ?, sha1(?))";

}

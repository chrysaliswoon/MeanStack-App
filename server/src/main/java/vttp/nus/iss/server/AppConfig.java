package vttp.nus.iss.server;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class AppConfig {

    @Bean
    public WebMvcConfigurer configureCORS() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMapping(CorsRegistry registry) {
                registry.addMapping("/api/*")
                        .allowedOrigins("*");
            }
        };
    }
}

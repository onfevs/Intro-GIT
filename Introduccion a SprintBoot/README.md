# Introduction a Spring Boot

- new directory 'resources' and add file 'cfg.xml' into src/main

### Maven repository

- https://mvnrepository.com/
- Spring Boot web
- https://spring.io/guides/gs/spring-boot/
- https://start.spring.io/

### Dependencies

- Mysql
- Hibernate
- Instalar dependecia de SprintBoot
- # Dependecia 
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
            <version>2.7.3</version>
        </dependency>
- Codigo en la App.java
            package com.hibernate.introduction;

            import org.springframework.boot.SpringApplication;
            import org.springframework.boot.autoconfigure.SpringBootApplication;

            @SpringBootApplication
            public class App {
                public static void main(String[] args) {
                    SpringApplication.run(App.class, args);
                }
            }
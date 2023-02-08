DROP SCHEMA IF EXISTS `website` ;
CREATE SCHEMA IF NOT EXISTS `website` DEFAULT CHARACTER SET latin1 ;
USE website;

-- | Field name | Field type |
-- |------------|------------|
-- |Name|String|
-- |Username|String|
-- |Email|String|
-- |Password|String|
-- |Created Date|Date|

CREATE TABLE users (
    id int AUTO_INCREMENT NOT NULL UNIQUE,
    firstName varchar(128) NOT NULL,
    lastName varchar(128) NOT NULL,
    username varchar(128) NOT NULL UNIQUE,
    email varchar(128) NOT NULL UNIQUE,
    password varchar(256) NOT NULL,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,

    PRIMARY KEY (email)
);


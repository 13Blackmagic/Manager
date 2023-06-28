-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

-- CREATE TABLE products (
--   item_id INT NOT NULL AUTO_INCREMENT,
--   product_name VARCHAR(45) NULL,
--   department_name VARCHAR(45) NULL,
--   price DECIMAL(10,2) NULL,
--   stock_quantity INT NULL,
--   PRIMARY KEY (item_id)
-- );

-- INSERT INTO products (product_name, department_name, price, stock_quantity)

-- SELECT 'Running Shoes', 'Shoes', 50.00, 100
-- UNION ALL
-- SELECT 'Golf Shoes', 'Shoes', 70.00, 100
-- UNION ALL
-- SELECT 'Dress Shoes', 'Shoes', 100.00, 100
-- UNION ALL
-- SELECT 'T-Shirt', 'Shirts', 20.00, 100
-- UNION ALL
-- SELECT 'Dress Shirt', 'Shirts', 35.00, 100
-- UNION ALL
-- SELECT 'Jeans', 'Pants', 50.00, 100
-- UNION ALL
-- SELECT 'Khakis', 'Pants', 50.00, 100
-- UNION ALL
-- SELECT 'Shorts', 'Pants', 35.00, 100
-- UNION ALL
-- SELECT 'Socks', 'Accessories', 10.00, 100
-- UNION ALL
-- SELECT 'Hat', 'Accessories', 20.00, 100
-- UNION ALL
-- SELECT 'Belt', 'Accessories', 20.00, 100
-- UNION ALL
-- SELECT 'Watch', 'Accessories', 50.00, 100;

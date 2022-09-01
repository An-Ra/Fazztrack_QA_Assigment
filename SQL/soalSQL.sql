CREATE DATABASE tugas1;
-- Soal No 1
CREATE TABLE product (
	id int,
    product_name varchar(255) NOT NULL,
    price int NOT NULL,
    created_at datetime NOT NULL,
    updated_at datetime NOT NULL
  );
  
CREATE TABLE transaction_product (
	transaction_id int NOT NULL,
    product_id int NOT NULL,
    quantity int NOT NULL
);

CREATE TABLE transaction (
	id int NOT NULL,
    user_id int,
    total_price int NOT NULL,
    created_at datetime,
    updated_at datetime
);

create table `user` (
	id int NOT NULL,
    username varchar(20) NOT NULL,
    password varchar(20) NOT NULL,
    created_at datetime,
    updated_at datetime
);

-- Soal No 2
ALTER TABLE product
ADD PRIMARY KEY(id),
MODIFY COLUMN id INT AUTO_INCREMENT;

ALTER TABLE `transaction`
ADD PRIMARY KEY(id),
MODIFY COLUMN id INT AUTO_INCREMENT;

ALTER TABLE `user`
ADD PRIMARY KEY(id),
MODIFY COLUMN id INT AUTO_INCREMENT;

ALTER TABLE `transaction`
ADD CONSTRAINT FK_userid
FOREIGN KEY(user_id) REFERENCES `user`(id);

ALTER TABLE transaction_product
ADD CONSTRAINT FK_transactionid
FOREIGN KEY(transaction_id) REFERENCES transaction(id),
ADD CONSTRAINT FK_productid
FOREIGN KEY(product_id) REFERENCES product(id);

-- Soal No 3
-- Soal No 3 A 
INSERT INTO user (username, password, created_at, updated_at)
VALUES 
('andi', 'andi123', '2022-08-27', '2022-08-28'),
('budi', 'budi_ganteng999', '2022-08-27', '2022-08-28');

-- Soal No 3 B
INSERT INTO product (product_name, price, created_at, updated_at)
VALUES 
('baju', '67000', '2022-08-17', '2022-08-17'),
('celana', '86000', '2022-08-18', '2022-08-18'),
('buku', '24000', '2022-08-19', '2022-08-19'),
('sepatu', '128000', '2022-08-20', '2022-08-20'),
('sepeda', '1500000', '2022-08-21', '2022-08-21'),
('bola', '17000', '2022-08-22', '2022-08-22'),
('komputer', '8956000', '2022-08-23', '2022-08-23'),
('gelas', '96400', '2022-08-24', '2022-08-24');

-- Soal No 3 C
INSERT INTO transaction (user_id, total_price, created_at, updated_at)
VALUES
(1, '392000', '2022-08-15', '2022-08-15'),
(2, '8484000', '2022-08-16', '2022-08-16'),
(2, '440000', '2022-08-19', '2022-08-19'),
(1, '448800', '2022-08-24', '2022-08-24');

-- Soal No 3 D
INSERT INTO transaction_product (transaction_id, product_id, quantity)
VALUES
(1, 1, 2),
(1, 2, 3),
(2, 7, 1),
(2, 4, 1),
(3, 2, 4),
(3, 3, 4),
(4, 8, 2),
(4, 4, 2);


-- Soal No 3 E
UPDATE transaction_product SET quantity = 1
WHERE transaction_product.transaction_id in (SELECT id FROM transaction 
WHERE user_id in (SELECT id FROM user WHERE username = 'andi')) AND
transaction_product.product_id in (SELECT id FROM product WHERE product_name = 'gelas');


-- Soal no 3 F
DELETE FROM transaction_product 
WHERE transaction_product.transaction_id in (SELECT id FROM transaction
WHERE total_price = (SELECT MIN(total_price) FROM transaction));

-- Soal No 4
SELECT id, product_name, price
FROM product
WHERE price >= 50000
ORDER BY price ASC
LIMIT 3,3;

--Soal No 5
-- Soal No 5 A
SELECT user.username, SUM(transaction.total_price) total_price from transaction
JOIN user ON transaction.user_id = user.id
GROUP BY user.username;

-- Soal No 5 B
SELECT product.product_name, SUM(transaction_product.quantity) total_quantity FROM product
JOIN transaction_product ON transaction_product.product_id = product.id
GROUP BY product.product_name
ORDER BY total_quantity DESC;

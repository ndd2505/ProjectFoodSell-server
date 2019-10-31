-- MySQL dump 10.13  Distrib 8.0.17, for macos10.14 (x86_64)
--
-- Host: localhost    Database: testuser
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `orderid` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `promotion` int(11) DEFAULT NULL,
  `address` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `timeorder` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `orderstatus` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`orderid`),
  KEY `userid` (`userid`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `customerinfo` (`cusid`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (2,2,'Nguyen Luong Huy',500000,0,'10 le van sy, phuong 3, quan 3',123456789,'huy@gmail.com','2018-10-22','Cancel'),(5,2,'huy',200000,0,'20 hanoi',987654321,'danh@gmail.com','2017-10-20','Cancel'),(15,NULL,'NguyenDuy',265000,0,'26 duong so 1 Phường 26 Quận Bình Thạnh',835034676,'duy255@gmail.com','23/9/2019 22h10m13s','Done'),(16,NULL,'NguyenDinhDuy',185000,0,'26 duong so 1 Phường Tân Định Quận 1',835034676,'test@gmail.com','23/9/2019 22h20m15s','Done'),(17,NULL,'Hieu',210000,0,'123 Phường 06 Quận 4',987657890,'hieu@gmail.com','24/9/2019 10h37m51s','Cancel'),(18,NULL,'Tan',340000,0,'123123 Phường Tân Hưng Quận 7',123987654,'tan@gmail.com','24/9/2019 10h38m46s','Cancel'),(19,NULL,'vo thanh danh',225000,0,'123 phan huy ich Phường 04 Quận Gò Vấp',326132996,'danh@gmail.com','24/9/2019 17h57m14s','Done'),(20,1,'duy',150000,0,'321 Phường Tăng Nhơn Phú A Quận 9',123987654,'duy255@gmail.com','28/9/2019 14h12m21s','Done'),(21,1,'NguyenDuy',200000,0,'26 duong so 1 Phường 22 Quận Bình Thạnh',123987654,'duy255@gmail.com','29/9/2019 18h19m5s','Undone'),(22,1,'Pham Cong Phuc',90000,0,'220 Le va  Phường Bến Nghé Quận 1',807078768,'a@gmail.com','29/9/2019 19h13m24s','Cancel');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-31 15:29:13

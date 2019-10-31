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
-- Table structure for table `productinfo`
--

DROP TABLE IF EXISTS `productinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productinfo` (
  `productid` int(11) NOT NULL AUTO_INCREMENT,
  `productname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `image` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `promotionprice` int(11) DEFAULT NULL,
  `info` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `type` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`productid`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productinfo`
--

LOCK TABLES `productinfo` WRITE;
/*!40000 ALTER TABLE `productinfo` DISABLE KEYS */;
INSERT INTO `productinfo` VALUES (1,'Ba Chỉ Nướng','../../../image/bachinuong.jpg',90000,90000,'Thịt ba chỉ nướng','Món Thêm'),(2,'Caramen Phô Mai','../../../image/caramenphomai.png',60000,60000,'Tráng miệng ít đường','mon trang mieng'),(3,'Cơm ba Chỉ Rang','../../../image/combachirang.png',50000,50000,'CƠm chiên với trứng thịt bò và dưa chua','Cơm'),(4,'Cơm Đùi Gà Chiên','../../../image/comduigachien.png',65000,65000,'Cơm trắng với đùi gà chiên','Cơm'),(5,'Cơm Tấm','../../../image/comtam.png',45000,45000,'Cơm tấm sườn bì chả','Cơm'),(6,'Cơm Sườn Xào Chua Ngọt','../../../image/comtamsuonxaochuangot.png',45000,45000,'Cơm trắng với sườn xào chua ngọt','Cơm'),(7,'Bánh Socola','../../../image/socola.png',45000,45000,'Bánh Socola ít đường','Tráng Miệng'),(8,'Sườn Nướng','../../../image/suonnuong.jpg',120000,120000,'Sườn heo nướng','Món Thêm'),(9,'Thịt gà Xiên Que','../../../image/thitgaxienque.jpg',45000,45000,'Gà ta nướng xiên que','Món Thêm'),(10,'Bánh Tiramisu','../../../image/tiramisu.png',45000,45000,'Bánh ngọt tiramisu','mon trang mieng'),(11,'Xiên Nướng Thịt Bò','../../../image/xiennuongthitbo.png',130000,130000,'Thịt bò xiên que nướng','mon nuong'),(12,'Cơm Gà Xối Mỡ','../../../image/comgaxoimo.png',70000,70000,'Cơm trưa văn phòng gà xối mỡ ','com trua'),(13,'Cơm Gà Nướng','../../../image/comganuong.png',60000,60000,'Cơm trắng với gà nướng','com trua'),(14,'Cơm lam gà nướng','../../../image/comlamganuong.png',160000,160000,'Cơm lam là đặc sản của các dân tộc thiểu số phía Bắc và Tây Nguyên','com trua'),(15,'Bún riêu cua','../../../image/bunrieucua.png',60000,60000,'Fresh water crab with rice noodle soup','bun'),(16,'Bún ốc','../../../image/bunoc.png',40000,40000,'Snail noodle soup or dipping sauce','Bún'),(17,'Bún Nem Nướng','../../../image/bunnemnuong.png',90000,90000,'Thịt lợn nướng ăn kèm với mì gạo & thảo mộc tươi','bun'),(18,'Bún Mộc','../../../image/bunmoc.png',55000,55000,'Phở chân heo với khoai môn Việt Nam','bun'),(19,'Xà lách rau dấm','../../../image/xalach.png',30000,30000,'Salad xanh với nước sốt tỏi và giấm','khai vi'),(20,'Gỏi Cuốn','../../../image/goicuon.png',70000,70000,'Nem cuốn rau củ-món ngon đơn giản dễ làm, mà lại cũng rất hấp dẫn','khai vi'),(21,'Cua rang muối','../../../image/cuarangmuoi.png',60000,60000,'cua rang với muối','hai san'),(22,'Cua sốt me','../../../image/cuasotme.png',12000,12000,'Cua biển sốt me','hai san'),(23,'Tôm càng nướng','../../../image/tomcangnuong.png',200000,200000,'tôm càng nướng','hai san'),(24,'Tôm sú nướng','../../../image/tomsunuong.png',300000,300000,'cua biển nướng nguyên con','hai san'),(26,'Com Chien','../../../image/comchienduongchau.jpg',40000,40000,'Com chien voi trung va rau cu','com chien'),(27,'Com Chien Ca Man','../../../image/comchiencaman.jpg',45000,45000,'Com chien voi trung va ca man','com chien'),(28,'Com Chien Dua Bo','../../../image/comchienduabo.jpg',45000,45000,'Com chien voi trung, thit bo va dua chua','com chien'),(29,'Com Thit Kho','../../../image/comthitkho.jpeg',40000,40000,'Com trang voi thit kho','com trang'),(30,'Pho Xao Bo','../../../image/phoxaobo.jpg',45000,45000,'Pho xao voi thit bo','mon xao'),(31,'Nui Xao Bo','../../../image/nuixaobo.jpg',45000,45000,'Nui xao voi thit bo','mon xao');
/*!40000 ALTER TABLE `productinfo` ENABLE KEYS */;
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

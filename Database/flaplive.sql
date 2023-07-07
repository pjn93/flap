-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 07, 2023 at 02:02 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flaplive`
--

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `uid` varchar(255) DEFAULT NULL,
  `eventname` varchar(255) NOT NULL,
  `starttime` datetime DEFAULT NULL,
  `endtime` datetime DEFAULT NULL,
  `city` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `category` varchar(255) NOT NULL,
  `bannerimage` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`uid`, `eventname`, `starttime`, `endtime`, `city`, `description`, `category`, `bannerimage`) VALUES
('u1', 'Colour Your World', '2023-10-05 23:07:00', '2023-10-10 23:07:00', 'Bhopal', 'Enhance your art with us....', 'Paintings', 'https://mynewtaskbucket.s3.ap-south-1.amazonaws.com/bannerimage1688715652290.jpg'),
('u1', 'Cooking Shooking', '2023-10-20 23:07:00', '2023-10-25 23:07:00', 'Gwalior', 'Show your cooking skills to us...', 'Cooking', 'https://mynewtaskbucket.s3.ap-south-1.amazonaws.com/bannerimage1688715803293.jpg'),
('u2', 'CricketZone', '2023-10-09 09:09:00', '2023-10-13 09:09:00', 'Indore', 'Live your childhood again with us...', 'Games', 'https://mynewtaskbucket.s3.ap-south-1.amazonaws.com/bannerimage1688720819471.jpg'),
('u1', 'Dance India Dance', '2023-09-09 09:09:00', '2023-09-12 09:09:00', 'Pune', 'If you love the dance than this event is just for you...', 'Dance', 'https://mynewtaskbucket.s3.ap-south-1.amazonaws.com/bannerimage1688720239806.jpg'),
('u2', 'Indian chef', '2023-12-20 23:07:00', '2023-12-25 23:07:00', 'Gwalior', 'Show your cooking skills to us...', 'Cooking', 'https://mynewtaskbucket.s3.ap-south-1.amazonaws.com/bannerimage1688728527708.jpg'),
('u1', 'Master Chef', '2023-12-20 23:07:00', '2023-12-25 23:07:00', 'Gwalior', 'Show your cooking skills to us...', 'Cooking', 'https://mynewtaskbucket.s3.ap-south-1.amazonaws.com/bannerimage1688715911368.jpg'),
('u1', 'Ye Sham Mastani', '2023-04-04 23:07:00', '2023-04-10 23:07:00', 'Indore', 'Bring childhood memories with retro night ', 'music', 'https://mynewtaskbucket.s3.ap-south-1.amazonaws.com/bannerimage1688715534002.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `uid` varchar(25) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`uid`, `name`, `email`, `password`) VALUES
('u1', 'user1', 'user1@gmail.com', '1stuser'),
('u2', 'user2', 'user2@gmail.com', '2nduser'),
('u3', 'user3', 'user3@gmail.com', '3rduser'),
('u4', 'user4', 'user4@gmail.com', '4rthuser');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`eventname`),
  ADD KEY `uid` (`uid`);

--
-- Indexes for table `signup`
--
ALTER TABLE `signup`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `news`
--
ALTER TABLE `news`
  ADD CONSTRAINT `news_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `signup` (`uid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

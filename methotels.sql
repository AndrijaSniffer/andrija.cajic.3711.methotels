-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2022 at 08:08 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `methotels`
--

-- --------------------------------------------------------

--
-- Table structure for table `dodatna_oprema`
--

CREATE TABLE `dodatne_opcije` (
  `dodatne_opcije_id` int(11) NOT NULL,
  `naziv` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `soba`
--

CREATE TABLE `soba` (
  `soba_id` int(11) NOT NULL,
  `naziv` varchar(255) NOT NULL,
  `broj_kreveta_za_odrasle` int(11) NOT NULL,
  `broj_kreveta_za_decu` int(11) NOT NULL,
  `jedinice` int(11) NOT NULL,
  `kvadratni_metri` int(11) NOT NULL,
  `opis` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `soba_dodatne_opcije`
--

CREATE TABLE `soba_dodatne_opcije` (
  `soba_dodatne_opcije_id` int(11) NOT NULL,
  `soba_id` int(11) NOT NULL,
  `dodatne_opcije_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dodatne_opcije`
--
ALTER TABLE `dodatne_opcije`
  ADD PRIMARY KEY (`dodatne_opcije_id`);

--
-- Indexes for table `soba`
--
ALTER TABLE `soba`
  ADD PRIMARY KEY (`soba_id`);

--
-- Indexes for table `soba_dodatne_opcije`
--
ALTER TABLE `soba_dodatne_opcije`
  ADD PRIMARY KEY (`soba_dodatne_opcije_id`),
  ADD KEY `soba_id` (`soba_id`),
  ADD KEY `dodatne_opcije_id` (`dodatne_opcije_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dodatne_opcije`
--
ALTER TABLE `dodatne_opcije`
  MODIFY `dodatne_opcije_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `soba`
--
ALTER TABLE `soba`
  MODIFY `soba_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `soba_dodatne_opcije`
--
ALTER TABLE `soba_dodatne_opcije`
  MODIFY `soba_dodatne_opcije_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `soba_dodatne_opcije`
--
ALTER TABLE `soba_dodatne_opcije`
  ADD CONSTRAINT `soba_dodatne_opcije_ibfk_1` FOREIGN KEY (`soba_id`) REFERENCES `soba` (`soba_id`),
  ADD CONSTRAINT `soba_dodatne_opcije_ibfk_2` FOREIGN KEY (`dodatne_opcije_id`) REFERENCES `dodatne_opcije` (`dodatne_opcije_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

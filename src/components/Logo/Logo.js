import React from 'react';
import logo from '../../assets/images/logo.svg';
import styles from './Logo.module.scss';

const Logo = () => {
  return <img src={logo} className={styles.logo} alt="logo" />;
};

export default Logo;

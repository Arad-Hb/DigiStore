import React from 'react'
import styles from './CountriesFlag.module.css'
import Flag from 'react-flagkit'

const CountriesFlag = () => {
  return (
    <div className={`${styles.countries}`}>
        <div className={`${styles.countryFlag}`}>
            <a href='#' className={`${styles.countryLink}`}>
                <Flag country="CA" size={33} />
                <span>Canada</span>
            </a>
        </div>
        <div className={`${styles.countryFlag}`}>
        <a href='#' className={`${styles.countryLink}`}>
            <Flag country="BE" size={33} />
            <span>Berlin</span>
        </a>
    </div>
    <div className={`${styles.countryFlag}`}>
        <a href='#' className={`${styles.countryLink}`}>
            <Flag country="BR" size={33} />
        </a>
    </div>
    <div className={`${styles.countryFlag}`}>
        <a href='#' className={`${styles.countryLink}`}>
            <Flag country="AX" size={33} />
        </a>
    </div>
    <div className={`${styles.countryFlag}`}>
        <a href='#' className={`${styles.countryLink}`}>
            <Flag country="CR" size={33} />
        </a>
    </div>
    <div className={`${styles.countryFlag}`}>
        <a href='#' className={`${styles.countryLink}`}>
            <Flag country="DK" size={33} />
        </a>
    </div>
    <div className={`${styles.countryFlag}`}>
        <a href='#' className={`${styles.countryLink}`}>
            <Flag country="ES" size={33} />
        </a>
    </div>
    <div className={`${styles.countryFlag}`}>
        <a href='#' className={`${styles.countryLink}`}>
            <Flag country="FI" size={33} />
        </a>
    </div>
    <div className={`${styles.countryFlag}`}>
        <a href='#' className={`${styles.countryLink}`}>
            <Flag country="SE" size={33} />
        </a>
    </div>
    <div className={`${styles.countryFlag}`}>
        <a href='#' className={`${styles.countryLink}`}>
            <Flag country="NZ" size={33} />
        </a>
    </div>
    <div className={`${styles.countryFlag}`}>
        <a href='# className={`${styles.countryLink}`}'>
            <Flag country="NO" size={33} />
        </a>
    </div>
    <div className={`${styles.countryFlag}`}>
        <a href='#' className={`${styles.countryLink}`}>
            <Flag country="IR" size={33} />
        </a>
    </div>
    <div className={`${styles.countryFlag}`}>
        <a href='#' className={`${styles.countryLink}`}>
            <Flag country="LU" size={33} />
        </a>
    </div>
    <div className={`${styles.countryFlag}`}>
        <a href='#' className={`${styles.countryLink}`}>
            <Flag country="MC" size={33} />
        </a>
    </div>
    <div className={`${styles.countryFlag}`}>
        <a href='#' className={`${styles.countryLink}`}>
            <Flag country="GB" size={33} />
        </a>
    </div>
    <div className={`${styles.countryFlag}`}>
        <a href='#' className={`${styles.countryLink}`}>
            <Flag country="FM" size={33} />
        </a>
    </div>
    <div className={`${styles.countryFlag}`}>
        <a href='#' className={`${styles.countryLink}`}>
            <Flag country="KR" size={33} />
        </a>
    </div>
    </div>
    
  )
}

export default CountriesFlag
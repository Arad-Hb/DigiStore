import React from 'react'
import styles from './Footer.module.css'
import { FaFacebookF, FaPlay,FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
        <div className={`${styles.footerHead}`}>
            <a href='#' className={`${styles.footerHeadLink}`}>
                <img className={`${styles.footerHeadLogo}`} src='https://images.mobileshop.eu/1547825075/footer/8232atandt.png' alt='atandt'/>
            </a>
            <a href='#' className={`${styles.footerHeadLink}`}>
                <img className={`${styles.footerHeadLogo}`} src='https://images.mobileshop.eu/1547821899/footer/bt.png' alt='bt'/>
            </a>
        </div>
        <div className={`${styles.footerMain}`}>
            <div className={`${styles.footerMainLogo}`}>
                <img src='https://images.mobileshop.eu/logo.png' className={`${styles.footerMainPic}`}/>
            </div>
            <div className={`${styles.footerContent}`}>
                <div className={`${styles.footerPayment}`}>
                    <h4>Payment Options</h4>
                    <ul className={`${styles.footerPaymentList}`}>
                        <li className={`${styles.footerPaymentItem}`}>
                            <a href='#' className={`${styles.footerPaymentLink}`}>
                                <img src='https://images.mobileshop.eu/payment/bank-transfer.png' className={`${styles.footerPaymentPic}`}/>
                            </a>
                        </li>
                        <li className={`${styles.footerPaymentItem}`}>
                            <a href='#' className={`${styles.footerPaymentLink}`}>
                                <img src='https://images.mobileshop.eu/payment/visa.png' className={`${styles.footerPaymentPic}`}/>
                            </a>
                        </li>
                        <li className={`${styles.footerPaymentItem}`}>
                            <a href='#' className={`${styles.footerPaymentLink}`}>
                                <img src='https://images.mobileshop.eu/payment/mastercard.png' className={`${styles.footerPaymentPic}`}/>
                            </a>
                        </li>
                        <li className={`${styles.footerPaymentItem}`}>
                            <a href='#' className={`${styles.footerPaymentLink}`}>
                                <img src='https://images.mobileshop.eu/payment/paypal.png' className={`${styles.footerPaymentPic}`}/>
                            </a>
                        </li>
                        <li className={`${styles.footerPaymentItem}`}>
                            <a href='#' className={`${styles.footerPaymentLink}`}>
                                <img src='https://images.mobileshop.eu/payment/cache.png' className={`${styles.footerPaymentPic}`}/>
                            </a>
                        </li>
                        <li className={`${styles.footerPaymentItem}`}>
                            <a href='#' className={`${styles.footerPaymentLink}`}>
                                <img src='https://images.mobileshop.eu/payment/card.png' className={`${styles.footerPaymentPic}`}/>
                            </a>
                        </li>
                        <li className={`${styles.footerPaymentItem}`}>
                            <a href='#' className={`${styles.footerPaymentLink}`}>
                                More
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={`${styles.footerPolicy}`}>
                    <h4>About us</h4>
                    <ul className={`${styles.footerList}`}>
                        <li>
                            <a href='#' className={`${styles.footerPolicyLink}`}>About the company</a>
                        </li>
                        <li>
                            <a href='#' className={`${styles.footerPolicyLink}`}>Contact</a>
                        </li>
                        <li>
                            <a href='#' className={`${styles.footerPolicyLink}`}>Career</a>
                        </li>
                        <li>
                            <a href='#' className={`${styles.footerPolicyLink}`}>Blog</a>
                        </li>
                        <li>
                            <a href='#' className={`${styles.footerPolicyLink}`}>Terms & Conditions</a>
                        </li>
                        <li>
                            <a href='#' className={`${styles.footerPolicyLink}`}>Privacy Policy</a>
                        </li>
                        <li>
                            <a href='#' className={`${styles.footerPolicyLink}`}>Cookies policy</a>
                        </li>
                        <li>
                            <a href='#' className={`${styles.footerPolicyLink}`}>Sell on Mobileshop</a>
                        </li>
                    </ul>
                </div>
                <div className={`${styles.footerWarranty}`}>
                    <h4>ASSISTANCE</h4>
                    <ul className={`${styles.footerList}`}>
                        <li>
                            <a href='#' className={`${styles.footerWarrantyLink}`}>How To Buy</a>
                        </li>
                        <li>
                            <a href='#' className={`${styles.footerWarrantyLink}`}>Shipping</a>
                        </li>
                        <li>
                            <a href='#' className={`${styles.footerWarrantyLink}`}>Payment Options</a>
                        </li>
                        <li>
                            <a href='#' className={`${styles.footerWarrantyLink}`}>FAQ</a>
                        </li>
                        <li>
                            <a href='#' className={`${styles.footerWarrantyLink}`}>Warranty</a>
                        </li>
                        <li>
                            <a href='#' className={`${styles.footerWarrantyLink}`}>Cancelations & Returnings</a>
                        </li>
                    </ul>
                </div>
                <div className={`${styles.footerContact}`}>
                    <h4>CONTACT</h4>
                    <ul className={`${styles.footerList}`}>
                        <li>
                            <span className={`${styles.footerContactTitle}`}>Call Center</span>
                            <a href='#' className={`${styles.footerContactLink}`}>+421233329584</a>
                        </li>
                        <li>
                            <span className={`${styles.footerContactTitle}`}>Email</span>
                            <a href='#' className={`${styles.footerContactLink}`}>info@mobileshop.eu</a>
                        </li>
                        <li>
                            <span className={`${styles.footerContactTitle}`}>GET SOCIAL</span>
                            <div className={`${styles.footerContactIcons}`}>
                                <a href='#' className={`${styles.footerContactLink}`}><FaFacebookF/></a>
                                <a href='#' className={`${styles.footerContactLink}`}><FaPlay/></a>
                                <a href='#' className={`${styles.footerContactLink}`}><FaInstagram/></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={`${styles.footerEnd}`}>
            Copyright © 2010-2024 MobileShop.eu. All rights reserved. All product pictures on site are property of Mobileshop.eu | Web Design: Art & Code / Creative Studio. 
            <a href='#' className={`${styles.footerEndLink}`}>|Privacy Policy</a>
            <a href='#' className={`${styles.footerEndLink}`}>|Terms Of Service</a>
        </div>
    </>
  )
}

export default Footer
import React from "react";
import logo from "../../assets/logo.png";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-toper">
        <img src={logo} alt="" />
        <div>
          <a href="">MEDIA</a>
          <a href="">NEWS</a>
          <a href="">IMPACT</a>
          <a href="">PRIVACY POLICY</a>
          <a href="">DISCLAIMER</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
          >
            <path
              d="M18.8302 0C8.43042 0 0 8.43042 0 18.8302C0 29.2299 8.43042 37.6603 18.8302 37.6603C29.2299 37.6603 37.6603 29.2299 37.6603 18.8302C37.6603 8.43042 29.2299 0 18.8302 0ZM14.2207 26.6349H10.4076V14.3639H14.2207V26.6349ZM12.2906 12.8575C11.0863 12.8575 10.3075 12.0042 10.3075 10.949C10.3075 9.8721 11.1098 9.04436 12.3396 9.04436C13.5695 9.04436 14.3227 9.8721 14.3462 10.949C14.3462 12.0042 13.5695 12.8575 12.2906 12.8575ZM28.1472 26.6349H24.3341V19.8344C24.3341 18.2515 23.7809 17.1766 22.402 17.1766C21.3487 17.1766 20.723 17.9043 20.4464 18.6046C20.3444 18.8537 20.3189 19.2068 20.3189 19.5579V26.6329H16.5038V18.277C16.5038 16.7451 16.4548 15.4643 16.4038 14.3619H19.7167L19.8913 16.0664H19.9678C20.4699 15.2662 21.6998 14.0853 23.7574 14.0853C26.2661 14.0853 28.1472 15.7663 28.1472 19.3794V26.6349Z"
              fill="#EB1E25"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M39.3762 19.6147C39.3762 8.78741 30.5888 0 19.7615 0C8.93414 0 0.146729 8.78741 0.146729 19.6147C0.146729 29.1083 6.8942 37.013 15.8385 38.8372V25.4992H11.9156V19.6147H15.8385V14.7111C15.8385 10.9254 18.918 7.8459 22.7037 7.8459H27.6074V13.7303H23.6844C22.6056 13.7303 21.7229 14.613 21.7229 15.6918V19.6147H27.6074V25.4992H21.7229V39.1314C31.6284 38.1507 39.3762 29.7948 39.3762 19.6147Z"
              fill="#EB1E25"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.4771 39.2295C31.31 39.2295 40.0918 30.4477 40.0918 19.6147C40.0918 8.78182 31.31 0 20.4771 0C9.64413 0 0.862305 8.78182 0.862305 19.6147C0.862305 30.4477 9.64413 39.2295 20.4771 39.2295ZM24.5961 9.80752H16.3579C14.8493 9.80752 13.4025 10.4068 12.3357 11.4736C11.269 12.5403 10.6697 13.9872 10.6697 15.4958V23.734C10.6697 26.8724 13.2196 29.4223 16.3579 29.4223H24.5961C26.1048 29.4223 27.5516 28.823 28.6184 27.7562C29.6851 26.6895 30.2844 25.2426 30.2844 23.734V15.4958C30.2844 12.3574 27.7345 9.80752 24.5961 9.80752ZM13.6652 12.8031C14.3274 12.141 15.2254 11.769 16.1618 11.769H24.7923C26.744 11.769 28.3229 13.348 28.3229 15.2997V23.9301C28.3229 24.8665 27.951 25.7646 27.2888 26.4267C26.6267 27.0888 25.7287 27.4608 24.7923 27.4608H16.1618C14.2101 27.4608 12.6311 25.8818 12.6311 23.9301V15.2997C12.6311 14.3633 13.0031 13.4652 13.6652 12.8031ZM26.4928 13.5992C26.2629 13.3693 25.951 13.2401 25.6259 13.2401C25.3008 13.2401 24.989 13.3693 24.7591 13.5992C24.5292 13.8291 24.4 14.1409 24.4 14.466C24.4 14.7912 24.5292 15.103 24.7591 15.3329C24.989 15.5628 25.3008 15.6919 25.6259 15.6919C25.951 15.6919 26.2629 15.5628 26.4928 15.3329C26.7227 15.103 26.8518 14.7912 26.8518 14.466C26.8518 14.1409 26.7227 13.8291 26.4928 13.5992ZM23.9445 16.1475C23.0249 15.2278 21.7776 14.7112 20.477 14.7112C19.1765 14.7112 17.9292 15.2278 17.0096 16.1475C16.09 17.0671 15.5734 18.3144 15.5734 19.6149C15.5734 20.9154 16.09 22.1627 17.0096 23.0823C17.9292 24.0019 19.1765 24.5186 20.477 24.5186C21.7776 24.5186 23.0249 24.0019 23.9445 23.0823C24.8641 22.1627 25.3807 20.9154 25.3807 19.6149C25.3807 18.3144 24.8641 17.0671 23.9445 16.1475ZM18.3966 17.5344C18.9484 16.9827 19.6967 16.6727 20.477 16.6727C21.2574 16.6727 22.0057 16.9827 22.5575 17.5344C23.1093 18.0862 23.4193 18.8346 23.4193 19.6149C23.4193 20.3952 23.1093 21.1436 22.5575 21.6954C22.0057 22.2471 21.2574 22.5571 20.477 22.5571C19.6967 22.5571 18.9484 22.2471 18.3966 21.6954C17.8448 21.1436 17.5348 20.3952 17.5348 19.6149C17.5348 18.8346 17.8448 18.0862 18.3966 17.5344Z"
              fill="#EB1E25"
            />
          </svg>
        </div>
        <p style={{textAlign:"center"}}>Copyright © 2023 All Rights Reserved. Unnathi x GTech MuLearn</p>
      </div>
    </div>
  );
};

export default Footer;

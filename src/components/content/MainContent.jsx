import React from 'react';
import AbdullahImg from '../../assets/abdullahImg.jpg';
import MailIcon from '../../assets/mailIcon.svg';
import PhoneIcon from '../../assets/phoneIcon.svg';
import InstaIcon from '../../assets/InstaIcon.svg';
import Services from './Services';

export default function MainContent() {
  return (
    <>
      <div className="main-content">
        <div className="about-me-content">
          <h3 className="about-me-text">ABOUT ME</h3>
          <div className="about-me-desc">
            "As a experienced civil engineer specializing in renovations, interior design, and construction, I bring a
            unique blend of technical expertise and creative vision to every project. With a strong background in
            structural analysis and project management, I am committed to delivering innovative, high-quality solutions
            that transform spaces and exceed client expectations. My passion lies in seamlessly integrating modern
            design with functionality, ensuring that each project not only meets but elevates the standards of
            contemporary living and working environments."
          </div>
          <div className="about-me-details">
            <img src={PhoneIcon} alt="phone-icon" />
            <div>+917284858419</div>
          </div>
          <div className="about-me-details">
            <img src={InstaIcon} alt="insta-icon" />
            <a href={`https://www.instagram.com/suttarwala_construction`}>suttarwala construction</a>
          </div>
          <div className="about-me-details">
            <img src={MailIcon} alt="mail-icon" />
            <a href={`suttarwalaconstructions@gmail.com`}>suttarwalaconstructions@gmail.com</a>
          </div>
        </div>
        <img src={AbdullahImg} alt="mine-photo" className="main-content-img" />
      </div>
      <Services />
    </>
  );
}

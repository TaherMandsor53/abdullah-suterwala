import React from 'react';
import ConstructionImg from '../../assets/constructionImg.svg';
import DesignIcon from '../../assets/designIcon.svg';
import ProjectIcon from '../../assets/projectIcon.svg';
import InteriorDesignIcon from '../../assets/InteriorDesign.svg';
import RenovationIcon from '../../assets/RenovationIcon.svg';

export default function Services() {
  return (
    <div className="services-details">
      <h3 className="service-text">SERVICES</h3>
      <div className="service-content">
        <div className="section-1">
          <img src={ConstructionImg} alt="construction" className="section-img" />
          <div className="section-text">CONSTRUCTION</div>
        </div>
        <div className="section-1">
          <img src={DesignIcon} alt="construction" className="section-img" />
          <div className="section-text">DESIGNING</div>
        </div>
        <div className="section-1">
          <img src={ProjectIcon} alt="construction" className="section-img" />
          <div className="section-text">Trunky Projects</div>
        </div>
        <div className="section-1">
          <img src={InteriorDesignIcon} alt="construction" className="section-img" />
          <div className="section-text">Interior Designing</div>
        </div>
        <div className="section-1">
          <img src={RenovationIcon} alt="construction" className="section-img" />
          <div className="section-text">Renovation</div>
        </div>
      </div>
    </div>
  );
}

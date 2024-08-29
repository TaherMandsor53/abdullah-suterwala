import React from 'react';
import { Image } from 'antd';
import Img1 from '../../../assets/construction/1.jpg';
import Img2 from '../../../assets/construction/2.jpg';
import Img3 from '../../../assets/construction/3.jpg';
import Img4 from '../../../assets/construction/4.jpg';
import Img5 from '../../../assets/construction/5.jpg';
import Img6 from '../../../assets/construction/6.jpg';
import Img7 from '../../../assets/construction/7.jpg';
import Img8 from '../../../assets/construction/8.jpg';
import Img9 from '../../../assets/construction/9.jpg';
import Img10 from '../../../assets/construction/10.jpg';
import Img11 from '../../../assets/construction/11.jpg';
import Img12 from '../../../assets/construction/12.jpg';
import Img13 from '../../../assets/construction/13.jpg';
import Img14 from '../../../assets/construction/14.jpg';
import Img15 from '../../../assets/construction/15.jpg';
import Img16 from '../../../assets/construction/16.jpg';

export default function ConstructionProject() {
  return (
    <div className="construction-project-main">
      <Image.PreviewGroup
        preview={{
          onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
        }}
      >
        <div className="project-image-container">
          <Image width={300} height={300} src={Img1} className="project-img" />
          <Image width={300} height={300} src={Img2} className="project-img" />
          <Image width={300} height={300} src={Img3} className="project-img" />
          <Image width={300} height={300} src={Img4} className="project-img" />
          <Image width={300} height={300} src={Img5} className="project-img" />
          <Image width={300} height={300} src={Img6} className="project-img" />
          <Image width={300} height={300} src={Img7} className="project-img" />
          <Image width={300} height={300} src={Img8} className="project-img" />
          <Image width={300} height={300} src={Img9} className="project-img" />
          <Image width={300} height={300} src={Img10} className="project-img" />
          <Image width={300} height={300} src={Img11} className="project-img" />
          <Image width={300} height={300} src={Img12} className="project-img" />
          <Image width={300} height={300} src={Img13} className="project-img" />
          <Image width={300} height={300} src={Img14} className="project-img" />
          <Image width={300} height={300} src={Img15} className="project-img" />
          <Image width={300} height={300} src={Img16} className="project-img" />
        </div>
      </Image.PreviewGroup>
    </div>
  );
}

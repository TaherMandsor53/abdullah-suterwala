import React from 'react';
import { Image } from 'antd';
import Img1 from '../../../assets/bungalow/1.jpg';
import Img2 from '../../../assets/bungalow/2.jpg';
import Img3 from '../../../assets/bungalow/3.jpg';
import Img4 from '../../../assets/bungalow/4.jpg';
import Img5 from '../../../assets/bungalow/5.jpg';
import Img6 from '../../../assets/bungalow/6.jpg';
import Img7 from '../../../assets/bungalow/7.jpg';
import Img8 from '../../../assets/bungalow/8.jpg';
import Img9 from '../../../assets/bungalow/9.jpg';
import Img10 from '../../../assets/bungalow/10.jpg';
import Img11 from '../../../assets/bungalow/11.jpg';
import Img12 from '../../../assets/bungalow/12.jpg';
import Img13 from '../../../assets/bungalow/13.jpg';
import Img14 from '../../../assets/bungalow/14.jpg';
import Img15 from '../../../assets/bungalow/15.jpg';
import Img16 from '../../../assets/bungalow/16.jpg';
import Img17 from '../../../assets/bungalow/17.jpg';
import Img18 from '../../../assets/bungalow/18.jpg';
import Img19 from '../../../assets/bungalow/19.jpg';
import Img20 from '../../../assets/bungalow/20.jpg';
import Img21 from '../../../assets/bungalow/21.jpg';
import Img22 from '../../../assets/bungalow/22.jpg';
import Img23 from '../../../assets/bungalow/23.jpg';

export default function BungalowProject() {
  return (
    <div className="bungalow-project-main">
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
          <Image width={300} height={300} src={Img17} className="project-img" />
          <Image width={300} height={300} src={Img18} className="project-img" />
          <Image width={300} height={300} src={Img19} className="project-img" />
          <Image width={300} height={300} src={Img20} className="project-img" />
          <Image width={300} height={300} src={Img21} className="project-img" />
          <Image width={300} height={300} src={Img22} className="project-img" />
          <Image width={300} height={300} src={Img23} className="project-img" />
        </div>
      </Image.PreviewGroup>
    </div>
  );
}

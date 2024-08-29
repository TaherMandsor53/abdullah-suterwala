import React from 'react';
import { Image } from 'antd';
import Img1 from '../../../assets/interior/1.jpg';
import Img2 from '../../../assets/interior/2.jpg';
import Img3 from '../../../assets/interior/3.jpg';
import Img4 from '../../../assets/interior/4.jpg';
import Img5 from '../../../assets/interior/5.jpg';
import Img6 from '../../../assets/interior/6.jpg';
import Img7 from '../../../assets/interior/7.jpg';
import Img8 from '../../../assets/interior/8.jpg';
import Img9 from '../../../assets/interior/9.jpg';
import Img10 from '../../../assets/interior/10.jpg';
import Img11 from '../../../assets/interior/11.jpg';
import Img12 from '../../../assets/interior/12.jpg';
import Img13 from '../../../assets/interior/13.jpg';
import Img14 from '../../../assets/interior/14.jpg';
import Img15 from '../../../assets/interior/15.jpg';
import Img16 from '../../../assets/interior/16.jpg';
import Img17 from '../../../assets/interior/17.jpg';
import Img18 from '../../../assets/interior/18.jpg';
import Img19 from '../../../assets/interior/19.jpg';
import Img20 from '../../../assets/interior/20.jpg';
import Img21 from '../../../assets/interior/21.jpg';
import Img22 from '../../../assets/interior/22.jpg';
import Img23 from '../../../assets/interior/23.jpg';
import Img24 from '../../../assets/interior/24.jpg';
import Img25 from '../../../assets/interior/25.jpg';
import Img26 from '../../../assets/interior/26.jpg';
import Img27 from '../../../assets/interior/27.jpg';
import Img28 from '../../../assets/interior/28.jpg';
import Img29 from '../../../assets/interior/29.jpg';
import Img30 from '../../../assets/interior/30.jpg';
import Img31 from '../../../assets/interior/31.jpg';
import Img32 from '../../../assets/interior/32.jpg';

export default function InteriorProject() {
  return (
    <div className="interior-project-main">
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
          <Image width={300} height={300} src={Img24} className="project-img" />
          <Image width={300} height={300} src={Img25} className="project-img" />
          <Image width={300} height={300} src={Img26} className="project-img" />
          <Image width={300} height={300} src={Img27} className="project-img" />
          <Image width={300} height={300} src={Img28} className="project-img" />
          <Image width={300} height={300} src={Img29} className="project-img" />
          <Image width={300} height={300} src={Img30} className="project-img" />
          <Image width={300} height={300} src={Img31} className="project-img" />
          <Image width={300} height={300} src={Img32} className="project-img" />
        </div>
      </Image.PreviewGroup>
    </div>
  );
}

import React, { FC } from 'react';

import Image from 'react-bootstrap/Image';

import FooterImg from 'assets/img/footer.png';

const Footer: FC = () => {
  return (
    <div className="margin-top-40">
      <Image src={FooterImg} className="w-100"/>
    </div>
  )
};

export default Footer;

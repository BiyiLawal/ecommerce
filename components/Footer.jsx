import React from 'react';
import { AiOutlineTwitter, AiFillGithub, AiOutlineMail} from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Biyi</p>
      <p> All rights reserved</p>
      <p className='icons'>
        <Link href="https://twitter.com/Biyi_Lawal" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <AiOutlineTwitter />
          </a>
        </Link>
        <Link href="https://github.com/BiyiLawal" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <AiFillGithub />
          </a>
        </Link>
        <a href = "mailto: biyilawal90@gmail.com"><AiOutlineMail/></a>
      </p>
    </div>
  )
}

export default Footer
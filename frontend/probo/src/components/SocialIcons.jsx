import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter} from 'react-icons/fa6';

const SocialIcons = () => {
  return (
    <div className='flex gap-10 text-slate-900 justify-center mt-10'>
      <a href="https://github.com/Naiduyenduva" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>
      <a href="https://www.linkedin.com/in/laxmu-naidu-yenduva-b2a5ba26a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
      <a href="mailto:laxmunaidu226@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope size={30} />
      </a>
      <a href="https://twitter.com/Lucky49871195" target="_blank" rel="noopener noreferrer">
      <FaXTwitter size={30} />
      </a>
    </div>
  );
};

export default SocialIcons;
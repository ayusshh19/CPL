import React from 'react';
import facebook from  '../assets/footer/facebook.svg'
import insta from  '../assets/footer/insta.svg'
import mail from  '../assets/footer/mail.svg'
import twitter from  '../assets/footer/twitter.svg'
import phone from  '../assets/footer/phone.svg'
import dmceloc from  '../assets/footer/dmceloc.png'
const Footer = () => {
  const personcontact = [
    {name:"Pushkaraj Chaudhary",numbers:"+91 7028617298" ,position:"General Secretary"},
    {name:"Roshani Nalawade",numbers:"+91 7028617298" ,position:"CO-GS"},
    {name:"Ayush Shukla",numbers:"+91 9892250482" ,position:"Technical Head"},
  ]
  return (
    <footer className="bg-[#151030] text-white py-4 text-center flex flex-col">
      {/* First Row - Left and Right Divs */}
      <div className="flex flex-col md:flex-row my-5 md:my-20">
        {/* Left Div - Image */}
        <div className="w-full md:w-[50%] mb-4 md:mb-0">
          <img src={dmceloc} alt="dmce Logo" className="mx-auto max-h-[8cm]" />
        </div>

        {/* Right Div - List and Instagram Icons */}
        <div className="w-full md:w-[50%] flex flex-col items-center p-4 md:p-8">
          {/* List with Phone Icons */}
          <ul className="list-none p-0 text-center" style={{ fontSize: '18px', fontFamily: 'Arial, sans-serif' }}>
            {personcontact.map((contactPerson) => (
              <li key={contactPerson.numbers} className="flex items-center justify-left mb-2 md:mb-4">
                <img src={phone} alt="Phone Icon" className="mr-2" style={{ width: '20px', height: '20px', fill: 'white' }} />
                <div className='w-full text-center'><h4 className=' font-bold'>{contactPerson.name}</h4>
                <h4 className='text-md'>{contactPerson.position}</h4></div>
              </li>
            ))}
          </ul>

          {/* Bottom Row - List of 4 Icons */}
          <div className="w-full flex items-center justify-center mt-2 md:mt-4">
            {[
              { name: 'insta', link: 'https://www.instagram.com/csidmce/' ,src: insta },
              { name: 'facebook', link: 'your-link-facebook', src: facebook},
              { name: 'twitter', link: 'your-link-twitter' ,src: twitter},
              { name: 'mail', link: 'your-link-mail' ,src: mail},
            ].map((icon, index) => (
              <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer" className="mx-2">
                <img src={icon.src} alt={`${icon.name} Icon`} className="cursor-pointer" style={{ width: '2.5rem', height: '2.5rem' }} />
              </a>
            ))}
          </div>
        </div>
      
      </div>

      {/* Second Row - Bottom Copyright Text */}
      <div className="mt-2 md:mt-4" style={{ fontSize: '16px', fontFamily: 'Arial, sans-serif' }}>
        <p>&copy; 2024 Developed By Technical Team Of CSI DMCE With ❤️ </p>
      </div>
    </footer>
  );
};

export default Footer;

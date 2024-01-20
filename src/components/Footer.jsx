import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#151030] text-white py-4 text-center flex flex-col">
      {/* First Row - Left and Right Divs */}
      <div className="flex flex-col md:flex-row my-5 md:my-20">
        {/* Left Div - Image */}
        <div className="w-full md:w-[50%] mb-4 md:mb-0">
          <img src="src/assets/footer/dmceloc.png" alt="dmce Logo" className="mx-auto max-h-[8cm]" />
        </div>

        {/* Right Div - List and Instagram Icons */}
        <div className="w-full md:w-[50%] flex flex-col items-center p-4 md:p-8">
          {/* List with Phone Icons */}
          <ul className="list-none p-0 text-center" style={{ fontSize: '18px', fontFamily: 'Arial, sans-serif' }}>
            {[1, 2, 3].map((contactPerson) => (
              <li key={contactPerson} className="flex items-center mb-2 md:mb-4">
                <img src="src/assets/footer/phone.svg" alt="Phone Icon" className="mr-2" style={{ width: '20px', height: '20px', fill: 'white' }} />
                Contact Person {contactPerson}
              </li>
            ))}
          </ul>

          {/* Bottom Row - List of 4 Icons */}
          <div className="w-full flex items-center justify-center mt-2 md:mt-4">
            {[
              { name: 'insta', link: 'https://www.instagram.com/csidmce/' },
              { name: 'facebook', link: 'your-link-facebook' },
              { name: 'twitter', link: 'your-link-twitter' },
              { name: 'mail', link: 'your-link-mail' },
            ].map((icon, index) => (
              <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer" className="mx-2">
                <img src={`src/assets/footer/${icon.name}.svg`} alt={`${icon.name} Icon`} className="cursor-pointer" style={{ width: '2.5rem', height: '2.5rem' }} />
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

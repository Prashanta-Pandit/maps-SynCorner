import React from 'react';

const Footer = () => {

  const getCurrentYear = () => new Date().getFullYear();

    return (
     <footer className="fixed bottom-0 left-0 w-full z-50 bg-black">
        <div className="text-center py-2">
          <span className="ml-4 text-sm font-normal text-white">
                {getCurrentYear()} © SynCorner.com | All rights reserved 
          </span>
        </div>
      </footer>
    )
}

export default Footer;
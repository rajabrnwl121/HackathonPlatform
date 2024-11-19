import React from 'react';

const Navbar = () => {
    return (
        <div className='w-full h-[9vh] bg-[#161A1E] flex items-center'>
            <div className='flex items-center justify-start ml-[15px] h-full'>
                <span className='font-bold text-[4vh] text-[#0DB276]'>Code</span>
                <img src='images/logo.webp' alt='logo' className='h-[4vh] w-[4vw]' />
            </div>
        </div>
    );
};

export default Navbar;
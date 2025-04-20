import React from 'react'
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const JobsLayout = ({ children }) => {

    const handleReload = () => {
        window.location.href = '/'      
    }

    return (
        <div>
            <div className='relative flex flex-col w-full justify-center py-5 px-7 border border-b-2 border-slate-200/50 bg-blue-100/20'>
                <div><Link className='text-blue-500 font-bold text-2xl p-0' onClick={handleReload}>CODEROUND</Link></div>
                <Link className='absolute right-10' to='/profile'>
                    <CgProfile className='rounded-full' size={30} />
                </Link>
            </div>
            <div className='my-[50px]'>
                {children}
            </div>
        </div>
    )
}

export default JobsLayout

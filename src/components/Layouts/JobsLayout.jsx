import React from 'react'
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const JobsLayout = ({ children }) => {

    const handleReload = () => {
        window.location.href = '/'
    }

    return (
        <div>
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='relative flex flex-col w-full justify-center py-5 px-7 border border-b-2 border-slate-200/50 bg-blue-100/20'
            >
                <div>
                    <motion.div
                        className='inline-block'
                        whileHover={{ scale: 1.1, color: "#3B82F6" }}
                        whileTap={{ scale: 0.95 }}
                        style={{ originX: 0.5 }}
                    >
                        <Link
                            className='text-blue-500 font-bold text-2xl p-0'
                            onClick={handleReload}
                        >
                            CODEROUND
                        </Link>
                    </motion.div>
                </div>
                <motion.div
                    className='absolute right-10'
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9, rotate: 15 }}
                >
                    <Link to='/profile'>
                        <CgProfile className='rounded-full' size={30} />
                    </Link>
                </motion.div>
            </motion.div>
            <div className='my-[50px]'>
                {children}
            </div>
        </div>
    )
}

export default JobsLayout

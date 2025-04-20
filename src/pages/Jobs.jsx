import React, { useContext, useEffect, useState } from 'react'
import JobsLayout from '../components/Layouts/JobsLayout'
import SearchIcon from '../assets/searching.png'
import SearchInput from '../components/Input/SearchInput'
import JobsList from '../components/Jobs/JobsList'
import JobDesc from '../components/Cards/JobDesc'
import { Jobs_List } from '../utils/helper'
import { jobList } from '../utils/data'
import { JobContext } from '../context/jobContext'
import { FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

const Jobs = () => {
  const [jobValue, setJobValue] = useState("")
  const [locValue, setLocValue] = useState("")
  const [selectedTypes, setSelectedTypes] = useState([])
  const [jobDict, setJobDict] = useState(jobList)

  const { selected, updateSelected } = useContext(JobContext)

  
  const applyFilters = (title, location, types) => {
    let filtered = Jobs_List(title, location);
    if (types.length > 0) {
      filtered = filtered.filter((job) => types.includes(job.type));
    }
    setJobDict(filtered);
    updateSelected(filtered.length > 0 ? filtered[0].id : 1);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    applyFilters(jobValue, locValue, selectedTypes);
  };

  const toggleJobType = (type) => {
    const updatedTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type];

    setSelectedTypes(updatedTypes);
    applyFilters(jobValue, locValue, updatedTypes);
  };

  return (
    <JobsLayout>
      <div className='w-full flex flex-col gap-10 justify-center items-center'>
        <motion.div
          className='w-full flex flex-row justify-center items-center max-[850px]:hidden'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <h1 className='text-7xl text-blue-400/90'>Your Job Search</h1>
            <h1 className='text-5xl'>Starts Here!</h1>
          </div>
          <motion.img
            src={SearchIcon}
            className='h-60'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          />
        </motion.div>



        <SearchInput
          jobValue={jobValue}
          locValue={locValue}
          onJobChange={({ target }) => setJobValue(target.value)}
          onLocChange={({ target }) => setLocValue(target.value)}
          onSubmit={handleSubmit}
        />
        <div className="flex gap-4 flex-wrap justify-center">
          {["Full-time", "Part-time", "Remote"].map((type) => (
            <div key={type} className="relative">
              <button
                className={`px-4 py-1 rounded-full border cursor-pointer ${selectedTypes.includes(type)
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 hover:bg-slate-200"
                  }`}
                onClick={() => toggleJobType(type)}
              >
                {type}
              </button>
              {selectedTypes.includes(type) && (
                <span
                  onClick={() => toggleJobType(type)}
                  className="absolute -top-2 -right-2 text-xs w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center cursor-pointer"
                >
                  ×
                </span>
              )}
            </div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          {
            jobDict.length > 0 ?
              (
                <>
                <motion.div
                  key="job-list"
                  className='w-full flex flex-col sm:flex-row gap-10'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <motion.div
                    className='sm:w-2/5 px-4 sm:pl-[150px]'
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    <JobsList jobDict={jobDict} />
                  </motion.div>

                  <motion.div
                    className='sm:w-3/5 px-4 sm:pr-[110px]'
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 50, opacity: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    {selected && <JobDesc jobDict={jobDict} />}
                  </motion.div>
                </motion.div>
                </>
              ) : (
                <motion.div
                  key="no-jobs"
                  className="text-center text-gray-600 my-12 flex flex-col items-center gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 1 }}
                >
                  <h2 className="text-2xl font-semibold">No jobs found 😕</h2>
                  <p className="text-md text-gray-500">Try changing your search keywords or location.</p>
                  <button
                    onClick={() => {
                      setJobValue("");
                      setLocValue("");
                      setJobDict(jobList);
                      setSelectedTypes([])
                    }}
                    className="mt-4 px-5 py-2 rounded-full cursor-pointer bg-blue-500 text-white hover:bg-blue-600 transition-all text-sm flex items-center gap-2"
                  >
                    <FaSearch size={14} /> <span>Explore All Jobs</span>
                  </button>
                </motion.div>
              )
          }
        </AnimatePresence>
      </div>
    </JobsLayout>
  )
}

export default Jobs;

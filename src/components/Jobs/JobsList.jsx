import React, { useContext } from 'react'
import JobCard from '../Cards/JobCard'


const JobsList = ({ jobDict }) => {
  return (
    <div className='flex flex-col gap-0 h-[700px] overflow-y-scroll cursor-pointer'>
        {
            jobDict.map((job,index) => {
                return (
                <JobCard 
                    key={index}
                    id={job.id}
                    company={job.company_name}
                    title={job.job_title}
                    location={job.location}
                />
                )
            })
        }
    </div>
  )
}

export default JobsList

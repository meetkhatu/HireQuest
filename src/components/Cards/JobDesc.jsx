import React, { useContext } from 'react'
import { JobContext } from '../../context/jobContext'


const JobDesc = ({ jobDict }) => {

  const { selected } = useContext(JobContext)
  const job = jobDict.find(j => j.id === selected)
  if(!job)
    return (<></>)
  const handleApply = () => {
    window.open(job.apply_link, "_blank");
  }

  return (
    <div className='p-5 border-2 border-slate-300 rounded-xl relative'>
      <h1 className='text-xl font-medium mb-4'>{job.company_name}</h1>
      <h1 className='text-2xl font-semibold mb-4'>{job.job_title}</h1>
      <h1 className='text-md font-display text-slate-600 mb-4'>{job.location}<span className='ml-2 font-extrabold'>·</span><span className='ml-2'>{job.type}</span></h1>

      <hr className='text-slate-300 mb-4' />
      
      <button className='absolute right-5 top-3 font-semibold border p-3 rounded-lg bg-green-300 hover:bg-green-400 cursor-pointer'
        onClick={handleApply}
      >
        Apply Now
      </button>

      <p className='mb-4'>{job.job_description["Job Overview"]}</p>
      <p className='mb-4'>Key Responsibilities:</p>
      {
        job.job_description["Key Responsibilities"].map((respon, key) => {
          return(
            <p key={key}>-{respon}</p>
          )
        })
      }
      <p className='my-4'>Qualifications:</p>
      {
        job.job_description["Qualifications"].map((respon, key) => {
          return(
            <p key={key}>-{respon}</p>
          )
        })
      }
      <p className='my-4'>What You’ll Gain:</p>
      {
        job.job_description["What You’ll Gain"].map((respon, key) => {
          return(
            <p key={key}>-{respon}</p>
          )
        })
      }
    </div>
  )
}

export default JobDesc

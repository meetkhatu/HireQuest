import React, { useContext } from 'react'
import { JobContext } from '../../context/jobContext'

const Job = ({ id, company, title, type, location }) => {

  const { selected, updateSelected } = useContext(JobContext)

  return (
    <div className={`flex flex-col justify-start p-5 ${id === selected-1 || id === selected-1?'border-none':''} ${selected === id ? 'border-2 border-slate-300 rounded-xl bg-slate-100' : 'border-b-2 border-b-slate-300 hover:bg-slate-100 hover:rounded-xl'}`}
      onClick={()=>updateSelected(id)}>
      <h3 className='text-sm mb-2'>{company}</h3>
      <h2 className='text-lg font-semibold'>{title}</h2>
      <h3 className='text-sm mb-2'>{location}</h3>
      <h3>{type}</h3>
    </div>
  )
}

export default Job

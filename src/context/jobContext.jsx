import React, { createContext, useState } from 'react'

export const JobContext = createContext()

const JobProvider = ({ children }) => {
    const [selected, setSelected] = useState(1)

    const updateSelected = (id) => {
        setSelected(id)
    }

    return (
        <JobContext.Provider
            value={{
                selected,
                updateSelected
            }}
        >
            {children}
        </JobContext.Provider>
    )
}

export default JobProvider

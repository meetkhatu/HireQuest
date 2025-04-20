import { jobList } from "./data"



export const Jobs_List = (jobData, locData) => {
    if (!jobData && !locData) return jobList;

    return jobList.filter((job) => {
        const jobDataLower = jobData?.toLowerCase().trim() || "";
        const locDataLower = locData?.toLowerCase().trim() || "";

        const matchesTitle = job.job_title.toLowerCase().includes(jobDataLower);
        const matchesCompany = job.company_name.toLowerCase().includes(jobDataLower);

        const descriptionValues = Object.values(job.job_description)
            .flat()
            .join(" ")
            .toLowerCase();
        const matchesDescription = descriptionValues.includes(jobDataLower);

        const matchesJobData = jobData
            ? matchesTitle || matchesCompany || matchesDescription
            : true;

        const matchesLocData = locData
            ? job.location.toLowerCase().includes(locDataLower)
            : true;

        return matchesJobData && matchesLocData;
    });
};

export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export interface IPersonInfo {
    id: number
    name: string
    surname: string
    currentJobTitle: string
    imageFace: string
    linkGitHub: string
    linkLinkedIn: string
    linkTwitter: string
    aboutMe: string
    birthDay: string
    eMail: string
    numberTelephone: string
    address: {
        country: string
        city: string
        street: string
        flat: string
    }
    language: string
    skills: ISkillsPerson[]
    experience: IExperience[]
    education: IEducation[]
}

export interface ISkillsPerson {
    soft: string
    progress: string
}
export interface IExperience {
    periodDate: string
    company: string
    postTitle: string
    postText: string
}
export interface IEducation {
    periodDate: string
    educationPost: string
    educationPostTitle: string
    institution: string
    educationText: string
}
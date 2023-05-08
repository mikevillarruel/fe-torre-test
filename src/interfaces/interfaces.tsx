export interface User {
    id: string;
    username: string;
    name: string;
    skills?: Skill[];
    picture?: string;
    professional_headline?: string;
    verified: boolean;
}

export interface Skill {
    id: string;
    name: string;
    proficiency: Proficiency;
    recommendations: number;
    weight?: number;
}

export enum Proficiency {
    expert = "expert",
    master = "master",
    noExperienceInterested = "no-experience-interested",
    novice = "novice",
    proficient = "proficient",
}

export interface UserSkillDetails {
    skill: Skill;
    experiences: Experience[];
}

export interface Experience {
    id: string;
    name: string;
    organization: string;
    from_month?: string;
    from_year?: string;
    to_month?: string;
    to_year?: string;
}

import { useEffect, useState } from "react";
import { usersApi } from "../api/usersApi";
import { Skill, UserSkillDetails } from '../interfaces/interfaces';
import "./SkillDetail.css";

interface Props {
    username: string;
    skill: Skill;
}

export const SkillDetail = ({ username, skill }: Props) => {

    const [userSkillDetails, setUserSkillDetails] = useState<UserSkillDetails>()

    const getUserByUsername = async (username: string, skillId: string) => {
        try {
            const response = await usersApi.get<UserSkillDetails>(`/${username}/${skillId}`);
            setUserSkillDetails(response.data)
        } catch (error: any) {
            setUserSkillDetails(undefined)
        }
    }

    useEffect(() => {
        getUserByUsername(username, skill.id);
    }, [])


    return (
        <>
            <div className="skill-detail-container">
                <div className="skill-background">
                    <div>Recomendations: {skill.recommendations}</div>
                    <div>Weight: {skill.weight}</div>
                    {userSkillDetails && (
                        <>
                            <div>Related Experiences:</div>
                            <div>
                                {userSkillDetails.experiences.map(item => {
                                    return (
                                        <div>{item.organization}</div>
                                    )
                                })}
                            </div>
                        </>
                    )}
                </div>
            </div>

        </>
    )
}
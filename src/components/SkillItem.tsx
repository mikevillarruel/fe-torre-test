import { useState } from 'react';
import { Skill } from '../interfaces/interfaces';
import { SkillDetail } from './SkillDetail';
import './SkillItem.css';

interface Props {
    skill: Skill
    username: string;
}

export const SkillItem = ({ skill, username }: Props) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            <div className={isVisible ? 'active-container' : ''}>
                <div className={`skill ${isVisible ? 'active' : ''}`} onClick={() => {
                    setIsVisible(!isVisible)
                }}>
                    {skill.name}
                </div>
            </div>

            {isVisible && <SkillDetail username={username} skill={skill} />}
        </>
    )
}

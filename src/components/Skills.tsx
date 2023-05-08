import { Proficiency, Skill } from '../interfaces/interfaces';
import { SkillItem } from './SkillItem';
import './Skills.css';

interface SkillsByProficiencyItem {
    title: string;
    skills: Skill[];
}

interface SkillsByProficiency {
    [key: string]: SkillsByProficiencyItem;
}

interface Props {
    skills?: Skill[];
    username: string;
}

export const Skills = ({ skills, username }: Props) => {

    const skillsByProficiency: SkillsByProficiency = {
        [Proficiency.expert]: {
            title: 'Expert',
            skills: [],
        },
        [Proficiency.master]: {
            title: 'Master',
            skills: [],
        },
        [Proficiency.proficient]: {
            title: 'Proficient',
            skills: [],
        },
        [Proficiency.novice]: {
            title: 'Begginner',
            skills: [],
        },
        [Proficiency.noExperienceInterested]: {
            title: 'No experience, but interested',
            skills: [],
        },
    }

    skills?.forEach(skill => {
        skillsByProficiency[skill.proficiency]?.skills.push(skill);
    });

    return (
        <div className="skills-container">
            {
                Object.keys(skillsByProficiency).map((proficiency, index) => {
                    return (
                        <div key={index}>
                            <div className='title'>
                                {skillsByProficiency[proficiency].title}
                            </div>

                            {
                                skillsByProficiency[proficiency].skills.length === 0
                                    ? (
                                        <div className='no-skills'>
                                            No skills
                                        </div>
                                    )
                                    :
                                    <div className='skills'>
                                        {
                                            skillsByProficiency[proficiency].skills?.map((skill, index) => {
                                                return <SkillItem skill={skill} username={username} key={index} />
                                            })
                                        }
                                    </div>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

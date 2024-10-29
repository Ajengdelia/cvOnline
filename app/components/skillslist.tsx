import React from 'react';
import '../ajeng-delia.css'; // Pastikan untuk mengimpor CSS

interface Skill {
    name: string;
    level: string;
}

interface SkillProps {
    skill: Skill;
}

const SkillComponent: React.FC<SkillProps> = ({ skill }) => {
    return (
        <div className="skill">
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
        </div>
    );
};

const SkillsList: React.FC = () => {
    const skills: Skill[] = [
        { name: 'JavaScript', level: 'Expert' },
        { name: 'React', level: 'Intermediate' },
        { name: 'Node.js', level: 'Advanced' },
        { name: 'CSS', level: 'Intermediate' },
    ];

    return (
        <div className="skills-list">
            <h2>Keterampilan Saya</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>
                        <SkillComponent skill={skill} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillsList;

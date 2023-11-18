import SkillListItem from "../SkillListItem/SkillListItem";
import { Skill } from "../../src/interfaces";

type skillsArray = Skill[];

export default function SkillList({ skills }: { skills: skillsArray }) {
  return (
    <ul>
      {skills.map((s: Skill, idx: number) => (
        <SkillListItem name={s.name} level={s.level} key={idx} />
      ))}
    </ul>
  );
}

import "./SkillListItem.css";

export default function SkillListItem({
  name,
  level
}: {
  name: string;
  level: number;
}) {
  return (
    <li className="SkillListItem">
      <div>{name}</div>
      <div className="level">LEVEL&nbsp;{level}</div>
    </li>
  );
}

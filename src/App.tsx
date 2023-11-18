import { useState } from "react";
import "./styles.css";
import SkillList from "../components/SkillList/SkillList";
import SkillListForm from "../components/SkillListForm/SkillListForm";
import { Skill } from "./interfaces";
// import ToDoList from "../components/ToDoList/ToDoList";

// const todos: string[] = ["Have Fun", "Learn React", "Learn the MERN-Stack"];

/*
const skills: Array<{ name: string; level: number }> = [
{ name: "HTML", level: 5 },
{ name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 }
];
*/

export default function App() {
  const [skills, setSkills] = useState<Skill[]>([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 }
  ]);

  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      {/* <ToDoList todos={todos} /> */}
      <SkillList skills={skills} />
      <hr />
      <SkillListForm />
    </div>
  );
}

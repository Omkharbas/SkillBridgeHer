import { describe, expect, it } from "vitest";
import { getSkillsForCareer, initialSkills } from "../client/src/lib/data";

describe("career skill mapping", () => {
  it("maps a selected target role to its own technical requirements", () => {
    const skills = getSkillsForCareer("Cloud Engineer", initialSkills);
    const names = skills.filter(skill => skill.category === "Technical").map(skill => skill.name);

    expect(names).toEqual(["AWS", "Linux", "Terraform", "Networking"]);
    expect(skills.find(skill => skill.name === "AWS")?.required).toBe(8);
    expect(skills.find(skill => skill.name === "Communication")?.category).toBe("Soft");
  });

  it("strictly replaces tracked skills with the new role's requirements while preserving ratings for overlapping skills", () => {
    const skills = getSkillsForCareer("Cloud Engineer", [{ name: "Python", category: "Technical", current: 9, required: 8, importance: "High" }]);
    const names = skills.map(skill => skill.name);

    expect(names).toEqual(["AWS", "Linux", "Terraform", "Networking", "Teamwork", "Problem Solving", "Communication"]);
    expect(skills.find(skill => skill.name === "Networking")?.current).not.toBeUndefined();
  });
});

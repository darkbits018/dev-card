import { SkillTag } from './SkillTag';

interface SkillSectionProps {
  title: string;
  skills: string[];
}

export function SkillSection({ title, skills }: SkillSectionProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillTag key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}
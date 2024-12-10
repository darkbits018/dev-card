import { LucideIcon } from 'lucide-react';

interface SkillTagProps {
  skill: string;
  icon?: LucideIcon;
}

export function SkillTag({ skill, icon: Icon }: SkillTagProps) {
  return (
    <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-800 dark:text-gray-200 flex items-center gap-2 transition-transform hover:scale-105">
      {Icon && <Icon className="w-4 h-4" />}
      <span>{skill}</span>
    </span>
  );
}
import React from 'react';
import { Github, Linkedin, Twitter, Briefcase } from 'lucide-react';
import { SocialLink } from './SocialLink';

interface SocialLinksProps {
  portfolio: string;
  github: string;
  linkedin: string;
  twitter: string;
}

export function SocialLinks({ portfolio, github, linkedin, twitter }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-6 px-8 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <SocialLink href={portfolio} icon={Briefcase} label="Portfolio" />
      <SocialLink href={github} icon={Github} label="GitHub" />
      <SocialLink href={linkedin} icon={Linkedin} label="LinkedIn" />
      <SocialLink href={twitter} icon={Twitter} label="Twitter" />
    </div>
  );
}

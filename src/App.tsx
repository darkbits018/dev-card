import React from 'react';
import { ThemeProvider } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';
import { BackgroundGraphics } from './components/BackgroundGraphics';
import { ProfileHeader } from './components/ProfileHeader';
import { SocialLinks } from './components/SocialLinks';
import { SkillSection } from './components/SkillSection';
import { skills } from './data/skills';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors relative">
        <BackgroundGraphics />
        <ThemeToggle />
        
        <div className="container mx-auto px-4 py-16 max-w-4xl relative">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <ProfileHeader
              name="Abhay Patgar"
              title="Aspiring Backend Engineer | AI/ML Enthusiast | Passionate About Cloud, Innovation, 
              Continuous Growth, and Building an Open-Source Tools Ecosystem"
              email="abhaygp18.dev@gmail.com"
              phone="+91 9986905655"
              location="Bangalore, India"
            />
            
            <div className="p-8">
              <SocialLinks
                portfolio="https://abhaygpdevportfolio.netlify.app/"
                github="https://github.com/darkbits018"
                linkedin="https://www.linkedin.com/in/abhaygp"
                twitter="https://x.com/united_emotion"
              />

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
                  Skills & Expertise
                </h2>
                
                <div className="space-y-8">
                  <SkillSection title="Programming Languages" skills={skills.programmingLanguages} />
                  <SkillSection title="Frameworks & Libraries" skills={skills.frameworks} />
                  <SkillSection title="Databases" skills={skills.databases} />
                  <SkillSection title="Tools & Platforms" skills={skills.tools} />
                  <SkillSection title="Other Skills" skills={skills.other} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
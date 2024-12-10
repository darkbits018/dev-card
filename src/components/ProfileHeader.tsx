import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { SocialLink } from './SocialLink';
import { ProfileImage } from './ProfileImage';

interface ProfileHeaderProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
}

export function ProfileHeader({ name, title, email, phone, location }: ProfileHeaderProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-2xl" />
      <div className="relative px-8 pt-12 pb-8 text-center">
        <ProfileImage
          imageUrl="https://avatars.githubusercontent.com/u/63970037?v=4"
          name={name}
        />
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {name}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          {title}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <SocialLink href={`mailto:${email}`} icon={Mail} label={email} />
          <SocialLink href={`tel:${phone}`} icon={Phone} label={phone} />
          <SocialLink href="#" icon={MapPin} label={location} />
        </div>
      </div>
    </div>
  );
}
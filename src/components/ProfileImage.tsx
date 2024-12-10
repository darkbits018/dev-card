import React from 'react';
import { Code2 } from 'lucide-react';

interface ProfileImageProps {
  imageUrl: string;
  name: string;
}

export function ProfileImage({ imageUrl, name }: ProfileImageProps) {
  return (
    <div className="w-32 h-32 mx-auto mb-4 relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1">
        <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 p-1">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 shadow-lg">
        <Code2 className="w-5 h-5 text-white" />
      </div>
    </div>
  );
}
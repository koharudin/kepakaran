// app/about/layout.tsx
import React from 'react';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>About Us Section</h2>
      {children}
    </div>
  );
}

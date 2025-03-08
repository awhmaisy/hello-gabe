'use client';

import { ReactNode } from 'react';

interface ScrollableContentProps {
  children: ReactNode;
}

export default function ScrollableContent({ children }: ScrollableContentProps) {
  return (
    <div className="scrollable-content">
      <div className="scrollable-content-inner">
        {children}
      </div>
    </div>
  );
} 
import { useEffect } from 'react';

// Custom hook to manage document title
export const useDocumentTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title ? `${title} | My portfolio` : 'My portfolio';
    
    // Cleanup function to restore previous title
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};
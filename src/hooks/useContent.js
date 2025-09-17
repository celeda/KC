import { useState, useEffect } from 'react';
import rawContent from '@/content.json';

const useContent = () => {
  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = () => {
      try {
        setContent(rawContent);
      } catch (error) {
        console.error("Error loading content.json:", error);
        setContent({}); 
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, []);

  const getValueByPath = (path, defaultValue = '') => {
    if (isLoading) return defaultValue;
    if (!content || Object.keys(content).length === 0) return defaultValue;
    if (typeof path !== 'string' || !path) return defaultValue;

    const keys = path.split('.');
    let current = content;
    for (const key of keys) {
      const arrayMatch = key.match(/^(.*)\[(\d+)\]$/);
      if (arrayMatch) {
        const arrayKey = arrayMatch[1];
        const arrayIndex = parseInt(arrayMatch[2]);
        if (current && typeof current === 'object' && arrayKey in current && Array.isArray(current[arrayKey]) && current[arrayKey][arrayIndex] !== undefined) {
          current = current[arrayKey][arrayIndex];
        } else {
          return defaultValue;
        }
      } else {
        if (current && typeof current === 'object' && key in current) {
          current = current[key];
        } else {
          return defaultValue;
        }
      }
    }
    return current !== undefined ? current : defaultValue;
  };

  return { content, isLoading, getValueByPath };
};

export default useContent;
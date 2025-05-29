'use client';

import { useState, useEffect, useCallback } from 'react';
import { getLocalStorageItem, setLocalStorageItem } from '@/lib/localStorage';

const HISTORY_KEY = 'e-clone-browsing-history';
const MAX_HISTORY_ITEMS = 5;

export function useBrowsingHistory() {
  const [history, setHistory] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedHistory = getLocalStorageItem<string[]>(HISTORY_KEY, []);
      setHistory(storedHistory);
      setIsLoaded(true);
    }
  }, []);

  const addProductToHistory = useCallback((productName: string) => {
    if (typeof window === 'undefined' || !productName) return;

    setHistory(prevHistory => {
      // Remove existing instance of productName to move it to the front
      const filteredHistory = prevHistory.filter(name => name !== productName);
      const newHistory = [productName, ...filteredHistory].slice(0, MAX_HISTORY_ITEMS);
      setLocalStorageItem(HISTORY_KEY, newHistory);
      return newHistory;
    });
  }, []);

  return { browsingHistory: history, addProductToHistory, isHistoryLoaded: isLoaded };
}

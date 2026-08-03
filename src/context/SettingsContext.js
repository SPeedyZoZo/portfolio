import React, { createContext, useContext, useEffect, useState } from 'react';

export const TRAIL_COLORS = [
  { id: 'white', label: 'Classic', value: 'var(--text-primary)' },
  { id: 'teal', label: 'Teal', value: '#13ADC7' },
  { id: 'purple', label: 'Purple', value: '#945DD6' },
  { id: 'orange', label: 'Orange', value: '#F46737' },
  { id: 'magenta', label: 'Magenta', value: '#B133FF' },
  { id: 'aqua', label: 'Aqua', value: '#00DBD8' },
];

const DEFAULT_SETTINGS = {
  trailEnabled: true,
  trailColor: TRAIL_COLORS[0].value,
  trailSize: 10,
  trailLength: 2000,
  trailDensity: 10,
  introAnimationEnabled: true,
  backgroundMotionEnabled: true,
  theme: 'dark',
};

const STORAGE_KEY = 'portfolio-settings';

const SettingsContext = createContext({
  settings: DEFAULT_SETTINGS,
  updateSettings: () => {},
  resetSettings: () => {},
});

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setSettings((prev) => ({ ...prev, ...JSON.parse(stored) }));
      }
    } catch (err) {
      // localStorage unavailable or corrupt value — fall back to defaults silently
    }
  }, []);

  const updateSettings = (patch) => {
    setSettings((prev) => {
      const next = { ...prev, ...patch };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (err) {
        // ignore write failures (e.g. private browsing storage limits)
      }
      return next;
    });
  };

  const resetSettings = () => updateSettings(DEFAULT_SETTINGS);

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, resetSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);

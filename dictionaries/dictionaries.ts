import 'server-only';

const dictionaries = {
  en: async () => (await import('./en.json')).default,
  vi: async () => (await import('./vi.json')).default,
  ko: async () => (await import('./ko.json')).default,
};

export const getDictionary = async (locale: "en" | "vi" | "ko") => {
  if (!dictionaries[locale]) {
    throw new Error(`Invalid locale: ${locale}`);
  }
  return dictionaries[locale]();
};

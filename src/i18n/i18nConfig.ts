import defaultLangTranslations from './translations/en.json'

export const defaultLang = 'en'
export { defaultLangTranslations }

/*
  Include your languages here.
  Keys must comply with ISO Language Codes (two-letter codes)
  https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
*/

export const supportedLangs = {
  en: 'English',
  es: 'Español'
}

/*
  Here you can import and include all you translations into the bundle.
  Otherwise, other translations will be loaded from files on the server.
*/
export const preloadedTranslations = {
  en: defaultLangTranslations
}

/*
  Import all your translations as types.
*/
type en = typeof import('./translations/en.json')
type es = typeof import('./translations/es.json')

export type TSupportedLanguages = typeof supportedLangs
/*
  For proper typings, add all your translation types here via ampersand (&).
*/
export type TTranslations = (en & es) | { [key: string]: any }

export const langUrl = '/lang/{lang}.json'

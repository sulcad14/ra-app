import RaCzech from 'ra-language-czech';
import RaEnglish from 'ra-language-english';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import HfCzech from '../langs/cs';
import HfEnglish from '../langs/en';

const langs = {
    "cs": { ...RaCzech, ...HfCzech },
    "en": { ...RaEnglish, ...HfEnglish }
};

/* en translations */
export const Localizator = polyglotI18nProvider(locale => langs[locale] || langs["en"], "en");

/* cs translations */
// export const Localizator = polyglotI18nProvider(locale => langs[locale] || langs["en"], "cs");

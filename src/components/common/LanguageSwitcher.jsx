import { useTranslation } from 'react-i18next';
import Cookies from 'universal-cookie';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const cookies = new Cookies();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    cookies.set('i18next', language, { path: '/', maxAge: 60 * 10 }); // 10 minutes
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('id')}>Indonesian</button>
    </div>
  );
};

export default LanguageSwitcher;

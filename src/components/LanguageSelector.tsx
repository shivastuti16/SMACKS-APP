import { useRouter } from 'next/router';

const LanguageSelector = () => {
  const router = useRouter();

  const changeLanguage = (lang: string) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  return (
    <select onChange={(e) => changeLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="ko">한국어</option>
      <option value="zh">中文</option>
      <option value="hi">हिंदी</option>
    </select>
  );
};

export default LanguageSelector;

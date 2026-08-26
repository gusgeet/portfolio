import { createContext, useState } from 'react';

export const TranslateContext = createContext();

const TranslateProvider = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(false);

  return (
    <TranslateContext.Provider value={[isEnglish, setIsEnglish]}>
      {children}
    </TranslateContext.Provider>
  );
};

export default TranslateProvider;

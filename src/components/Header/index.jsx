import React from 'react';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation("translation");

  return (
    <div className="flex p-5 justify-between items-center dark:bg-default-100/90">
        <div>
            <h1 className="text-4xl font-bold">{t("Header.main-title")}</h1>
        </div>
        <div>
            <ThemeSwitcher size={48}/>
        </div>
    </div>
  )
};

export default Header;
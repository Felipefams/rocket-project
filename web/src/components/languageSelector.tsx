import { useTranslation } from 'react-i18next';

function LanguageSelector() {
    const { i18n } = useTranslation();

    const handleLanguageChange = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <li>
            <select data-testid="languageSelector"
                className="py-2 pl-3 pr-4 text-gray-900 
        rounded bg-myBlack hover:bg-myBlack md:hover:bg-myBlack 
        md:border-0 md:p-0 dark:text-myIvory outline-none focus:ring-myBlack"
                value={i18n.language}
                onChange={(e) => handleLanguageChange(e.target.value)}
            >
                <option
                    className={`dark:hover:bg-myLightGray md:dark:hover:bg-transparent`}
                    value="en"
                >
                    🇺🇸 English
                </option>
                <option
                    className={`dark:hover:bg-myLightGray md:dark:hover:bg-transparent`}
                    value="pt"
                >
                    🇧🇷 Português
                </option>
                <option
                    className={`dark:hover:bg-myLightGray md:dark:hover:bg-transparent`}
                    value="zh"
                >
                    🇨🇳 中文
                </option>
            </select>
        </li>
    );
}

export default LanguageSelector;
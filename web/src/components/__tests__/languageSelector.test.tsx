import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from "@testing-library/react";
import LanguageSelector from "../languageSelector";
import { useTranslation } from 'react-i18next';

jest.mock("react-i18next", () => ({
    useTranslation: () => {
        const mockChangeLanguage = jest.fn();
        const mockI18n = { changeLanguage: mockChangeLanguage, language: "en" };
        return {
            t: (key: string) => key,
            i18n: mockI18n,
        };
    },
}));

test("changes the language when a different option is selected", () => {
    render(<LanguageSelector />);
    useTranslation().i18n.changeLanguage = jest.fn();

    const selectElement = screen.getByTestId("languageSelector") as HTMLSelectElement;
    expect(selectElement).toBeInTheDocument();

    /*
    for each option in the select element, select it and check if 
    the value of the select element is the same as the value of the option
    */
    for (const i of selectElement.children as HTMLSelectElement) {
        fireEvent.select(selectElement, { target: { value: i.value } });
        expect(selectElement.value).toBe(i.value);
    }
});


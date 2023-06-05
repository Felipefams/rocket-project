
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import { Footer } from "../footer";

jest.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

test("renders the Footer component correctly", () => {
    const { getByText } = render(<Footer />);
    
    // Assert that the menu links are rendered correctly
    expect(getByText("home")).toBeInTheDocument();
    expect(getByText("about")).toBeInTheDocument();
    expect(getByText("services")).toBeInTheDocument();
    expect(getByText("team")).toBeInTheDocument();
    expect(getByText("contact")).toBeInTheDocument();
  
    // Assert that the copyright text is rendered correctly
    expect(getByText("©2023 Felipe Morais | all-rights-reserved")).toBeInTheDocument();
  });
  

import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from "@testing-library/react";
import { AddButton } from "../tableButtons";

describe("Test all Buttons", () => {

    test("calls handle and sets isEdit to false when AddButton is clicked", () => {
        const handleMock = jest.fn();
        const setIsEditMock = jest.fn();
        render(<AddButton handle={handleMock} setIsEdit={setIsEditMock} />);

        const addButton = screen.getByText("add");
        fireEvent.click(addButton);

        expect(handleMock).toHaveBeenCalled();
        expect(setIsEditMock).toHaveBeenCalledWith(false);
    });
});



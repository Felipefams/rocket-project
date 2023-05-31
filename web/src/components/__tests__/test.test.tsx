// eslint-disable-next-line @typescript-eslint/no-unused-vars
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { ToTest } from '../componentToTest';

describe('Test', () => {
    test('if true', () => {
        expect(true).toBe(true);
    });
    it("should render this component", () => {
        render(<ToTest />);
        const testElement = screen.getByTestId("test");
        expect(testElement).toBeInTheDocument();
    });
});
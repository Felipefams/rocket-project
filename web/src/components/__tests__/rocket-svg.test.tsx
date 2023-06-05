import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import { RocketSVG } from "../rocket-svg";

test('renders the RocketSVG component with correct fill and className', () => {
    const fill = 'red';
    const className = '';

    render(<RocketSVG fill={fill} className={className} />);

    const svgElement = screen.getByTestId('rocket-svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('fill', fill);
    expect(svgElement).toHaveAttribute('class', className);
});

import { render, screen } from "@testing-library/react"
import { Input } from "./Input"

describe('Input tests', () => {
	it('Button render', () => {
		render(<Input />);

		expect(screen.getByText('Add')).toBeInTheDocument();
	})

	
} )
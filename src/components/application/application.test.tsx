import Application from './application';
import { render, screen } from '@testing-library/react';

describe('Application', () => {
    test('renders correctly', () => {
        render(<Application />);

        const pageHeading = screen.getByRole('heading', {
            level: 1
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole('heading', {
            level: 2
        });
        
        expect(sectionHeading).toBeInTheDocument();
        
        const nameInput = screen.getByRole('textbox', {
            name: 'Name'
        });
        expect(nameInput).toBeInTheDocument();

        const nameInput2 = screen.getByLabelText('Name', {
            selector: 'input'
        });

        expect(nameInput2).toBeInTheDocument();

        const nameInput3 = screen.getByPlaceholderText('Fullname');
        expect(nameInput3).toBeInTheDocument();

        const paragraphElement = screen.getByText('All fields are mandatory');
        expect(paragraphElement).toBeInTheDocument();
        
        const bioInput = screen.getByRole('textbox', {
            name: 'Bio'
        });
        expect(bioInput).toBeInTheDocument();

        const jobLocationInput = screen.getByRole('combobox');
        expect(jobLocationInput).toBeInTheDocument();

        const termsInput = screen.getByRole('checkbox');
        expect(termsInput).toBeInTheDocument();

        const submitButton = screen.getByRole('button');
        expect(submitButton).toBeInTheDocument();
    })
})

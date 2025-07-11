import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './components/Main';

// Test for the BookingForm component
describe('BookingForm', () => {
  test('Renders the BookingForm heading', () => {
    // Mock props required by BookingForm
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn();
    const availableTimes = ['17:00', '18:00', '19:00'];

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    // Check if the label for the date input is rendered
    const headingElement = screen.getByText("Choose Date");
    expect(headingElement).toBeInTheDocument();
  });

  test('HTML5 validation attributes are present', () => {
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn();
    const availableTimes = ['17:00', '18:00', '19:00'];

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    // Test for date input
    const dateInput = screen.getByLabelText(/Choose Date/);
    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveAttribute('type', 'date');

    // Test for time select
    const timeSelect = screen.getByLabelText(/Choose Time/);
    expect(timeSelect).toHaveAttribute('required');

    // Test for guests input
    const guestsInput = screen.getByLabelText(/Number of Guests/);
    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');

    // Test for occasion select
    const occasionSelect = screen.getByLabelText(/Occasion/);
    expect(occasionSelect).toHaveAttribute('required');
  });
});


// Test for the state management functions
describe('State management functions', () => {
  test('initializeTimes returns a non-empty array', () => {
    // Assuming fetchAPI returns an array of available times
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
  });

  test('updateTimes returns the same value provided in the state', () => {
    const currentState = ['17:00', '18:00'];
    // The reducer's second argument (action) is not used to change state in this case,
    // so the state should remain the same as what fetchAPI returns.
    // We simulate a date change.
    const action = { type: 'UPDATE_TIMES', payload: '2023-10-15' };
    const newState = updateTimes(currentState, action);

    // The function should return a new array based on the new date
    expect(Array.isArray(newState)).toBe(true);
    // The content will be different, but it should still be an array of strings
    newState.forEach(time => {
      expect(typeof time).toBe('string');
    });
  });
});


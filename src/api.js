// This file simulates API calls for fetching and submitting data.

// Function to generate seeded random numbers for consistent results
const seededRandom = (seed) => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return () => (s = s * a % m) / m;
};

// Function to fetch available booking times for a given date
export const fetchAPI = (date) => {
    let result = [];
    // Use the date's day to seed the random number generator
    let random = seededRandom(date.getDate());

    // Generate a list of random times between 17:00 and 23:00
    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) result.push(i + ':00');
        if (random() > 0.5) result.push(i + ':30');
    }
    return result;
};

// Function to simulate a successful form submission
export const submitAPI = (formData) => {
    return true;
};

// --- Reducer functions for use with useReducer hook ---

// The reducer function updates state based on the dispatched action
export const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    // When the date changes, fetch new times for that date
    return fetchAPI(new Date(action.payload));
  }
  return state; // Return current state if action type is not matched
};

// The initializer function provides the initial state for available times
export const initializeTimes = () => {
  // Fetch times for today's date initially
  return fetchAPI(new Date());
};

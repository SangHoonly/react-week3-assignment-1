import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import App from './App';

test('App', () => {
  const utils = render(<App />);
  console.log(utils);
});

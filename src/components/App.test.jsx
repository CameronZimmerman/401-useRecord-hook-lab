/**
 * @jest-environment jsdom
 */

import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import App from './app/App';

describe('App.jsx', () => {
  it('Should be able to change color, undo, redo', () => {
    render(<App />);

    const picker = screen.getByRole('input');
    fireEvent.change(picker, { target: { value: '#00FF00' } });
    fireEvent.change(picker, { target: { value: '#FF0000' } });

    expect(picker.value).toBe('#ff0000');

    const undo = screen.getByRole('undo');
    fireEvent.click(undo);
    expect(picker.value).toBe('#00ff00');

    const redo = screen.getByRole('redo');
    fireEvent.click(redo);
    expect(picker.value).toBe('#ff0000');
  });
});

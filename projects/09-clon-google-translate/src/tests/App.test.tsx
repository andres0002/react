// js
// react
// third
import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
// own
import App from '../App';

test('My App works as expected', async () => {
    const user = userEvent.setup();

    const app = render(<App />);

    const textareaFrom = app.getByPlaceholderText('Introducir texto');

    await user.type(textareaFrom, 'Hola mundo');

    // Aca va lo traducido, tengo el /Hola mundo/ por que no tengo API_KEY con cuota.
    const result = await app.findByDisplayValue(/Hola mundo/i, {}, {timeout: 5000});

    expect(result).toBeTruthy();
})
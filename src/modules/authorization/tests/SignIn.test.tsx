import React from 'react'
import { render, screen } from '@testing-library/react'
import SignIn from '../views/SignIn'

test('renders sign in form', () => {
	render(<SignIn login={() => {}} />)
	const emailField = screen.getByLabelText(/Email Address/i)
	expect(emailField).toBeInTheDocument()

	const passwordField = screen.getByLabelText(/Password/i)
	expect(passwordField).toBeInTheDocument()

	const signInButton = screen.getByRole('button')
	expect(signInButton).toHaveTextContent(/Sign In/i)
})

import React from 'react';

import { Form } from 'react-bootstrap';

const EmailInput = () => {
  return (
		<Form.Group className="mb-3" controlId="email">
			<Form.Label>Email address</Form.Label>
			<Form.Control
				name='email'
				className='shadow-sm'
				pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
				required type="email"
				placeholder="steven@gmail.com"
			/>
			<Form.Text className="text-muted">
				We'll never share your email with anyone else.
			</Form.Text>
			<Form.Control.Feedback type="invalid">
				Please provide a valid email format.
			</Form.Control.Feedback>
		</Form.Group>
  );
};

export default EmailInput;

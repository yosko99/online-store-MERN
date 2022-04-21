import React from 'react';

import { Form } from 'react-bootstrap';

const NameInput = () => {
  return (
		<Form.Group className="mb-3" controlId="name">
			<Form.Label>
				Name
			</Form.Label>
			<Form.Control
				name='name'
				className='rounded-pill'
				pattern='[a-zA-Zа-яА-Я\s]+'
				required type="text"
				placeholder="Steven Wilson"
			/>
		</Form.Group>
  );
};

export default NameInput;

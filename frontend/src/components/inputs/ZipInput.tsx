import React from 'react';

import { Form } from 'react-bootstrap';

const ZipInput = () => {
  return (
		<Form.Group className="mb-3" controlId="zipcode">
			<Form.Label>
				Postal Code
			</Form.Label>
			<Form.Control
				name='zipcode'
				className='shadow-sm'
				pattern='\d{4,}'
				required type="text"
				placeholder="1234"
			/>
		</Form.Group>
  );
};

export default ZipInput;

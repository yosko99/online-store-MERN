import React, { useContext } from 'react';

import { faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkContainer } from 'react-router-bootstrap';

import { TokenContext } from '../../../context/TokenContext';
import CenteredItems from '../../../styles/CenteredItems';

const LoginIcon = () => {
  const token = useContext(TokenContext);

  const handleClick = () => {
    if (token!.token !== null) {
			token!.setToken(null);
			localStorage.removeItem('cart');
    }
  };

  return (
		<LinkContainer onClick={() => handleClick()} to={token!.token !== null ? '/' : '/login'}>
			<CenteredItems role="button" className='me-3 text-nowrap'>
				<FontAwesomeIcon className='me-2' icon={token!.token !== null ? faSignOut : faSignIn }/>
				<small>
					{token!.token !== null ? 'Sign out' : 'Login'}
				</small>
			</CenteredItems>
		</LinkContainer>
  );
};

export default LoginIcon;
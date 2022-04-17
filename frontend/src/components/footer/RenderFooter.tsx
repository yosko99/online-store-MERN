import React, { FC } from 'react';

import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faStore, faHome, faEnvelope, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkContainer } from 'react-router-bootstrap';

import Loading from '../loading/Loading';

interface CategoryData {
	name: string;
}

interface Props {
	categories: CategoryData[];
	isLoading: boolean;
}

const RenderFooter: FC<Props> = ({ isLoading, categories }) => {
  const brands: IconDefinition[] = [faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter];

  return (
		<footer className="text-center text-lg-start bg-light text-black">
			<section
				className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container">
				<div className="me-5 d-none d-lg-block ">
					<span>Get connected with us on social networks:</span>
				</div>

				<div>
					{brands.map((brand: IconDefinition, index: number) => (
						<FontAwesomeIcon
							key={index}
							className='me-3'
							icon={brand} />
					))}
				</div>
			</section>

			<section className="">
				<div className="container text-center text-md-start mt-5">
					<div className="row mt-3">
						<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">
								<FontAwesomeIcon icon={faStore} className='me-3' />
								Rexlan E-Commerce
							</h6>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit ipsam illum suscipit eaque autem error perspiciatis saepe alias itaque iste.
							</p>
						</div>

						<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">
								Categories
							</h6>
							{isLoading
							  ? <Loading />
							    : categories.map((category: CategoryData) => (
										<LinkContainer
											key={category.name}
											className='text-uppercase'
											role="button"
											to={`/category/${category.name}`}
										>
											<p>
												{category.name}
											</p>
										</LinkContainer>
							  ))
							}
						</div>

						<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">
								Useful links
							</h6>
							<p>
								<a href="#!" className="text-reset">Pricing</a>
							</p>
							<p>
								<a href="#!" className="text-reset">Settings</a>
							</p>
							<p>
								<a href="#!" className="text-reset">Orders</a>
							</p>
							<p>
								<a href="#!" className="text-reset">Help</a>
							</p>
						</div>

						<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
							<h6 className="text-uppercase fw-bold mb-4">
								Contact
							</h6>
							<p>
								<FontAwesomeIcon icon={faHome} className='me-1'/> Rousse, Bulgaria
							</p>
							<p>
								<FontAwesomeIcon icon={faEnvelope} className='me-1'/> yusuf.bikov99@gmail.com
							</p>
							<p>
								<FontAwesomeIcon icon={faPhone} className='me-1'/> + 01 234 567 88
							</p>
							<p>
								<FontAwesomeIcon icon={faPrint} className='me-1'/> + 01 234 567 88
							</p>
						</div>
					</div>
				</div>
			</section>

			<div className="text-center p-4">
				© 2021 Copyright:
				<a className="text-reset fw-bold" href="https://github.com/yosko99">yosko99</a>
			</div>
		</footer>
  );
};

export default RenderFooter;
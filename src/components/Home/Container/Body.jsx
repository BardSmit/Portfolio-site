import React from 'react';
import {ReactComponent as ReactLogo} from '../../../assets/svg/devv.svg';
import { Link } from 'react-router-dom';
import "./body.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button } from 'reactstrap';
function Body() {
  return (
        <main>
            <div className='position-relative'>
                <section className='section section-lg section-shaped pb-250'>
                <div className="shape shape-style-1 bg-gradient-info"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
                    <div className='py-lg-md d-flex container'>
                        <div className='col px-0'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <h1 className="display-3 text-color">Hi all, I'm Jane </h1>
                                    <p className="lead text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloribus illo quasi id omnis itaque ipsum officiis cum, quaerat ipsa mollitia in recusandae expedita fugit a aliquam provident unde blanditiis.</p>
                                    <div className='btn-wrapper text-lg'>
                                        <Link to="/" className='ml-1'>
                                            <Button className='btn-cust btn-fb'>
                                                <FacebookIcon/>
                                            </Button>
                                        </Link>
                                        <Link to="/" className='ml-1'>
                                        <Button className='btn-cust btn-twt'>
                                        <TwitterIcon/>
                                        </Button>
                                        </Link>
                                        <Link to="/" className='ml-1'>
                                            <Button className='btn-cust btn-git'>
                                            <GitHubIcon/>
                                            </Button>
                                        </Link>
                                        <Link to="/" className='ml-1'>
                                        <Button className='btn-cust btn-link'>
                                            <LinkedInIcon/>
                                        </Button>
                                        </Link>
                                        <Link to="/" className='ml-1'>
                                        <Button className='btn-cust btn-insta'>
                                            <InstagramIcon/>
                                        </Button>
                                        </Link>
                                    </div>
                                    <div className='btn-wrapper'>
                                        <Button className='btn-resume'>
                                            Download CV
                                        </Button>
                                        <Button className='btn-resume ml-2'>
                                            Contact
                                        </Button>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div>
                                        <ReactLogo/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
  )
}

export default Body
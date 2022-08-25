import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import Icon from '@material-tailwind/react/Icon';
import Image from '@material-tailwind/react/Image';
import Button from '@material-tailwind/react/Button';
import Img from 'assets/img/logo.png'
export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar color="transparent" navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <a
                        href="/"
                        rel="noreferrer"
                        className="flex"
                    >  
                        <Image className='w-10 rounded-full' src={Img}/>
                        <NavbarBrand>Comunidade Cristã Vida</NavbarBrand>
                    </a>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <div className="flex flex-col z-50 lg:flex-row lg:items-center">
                            <NavLink
                                href="/"                                
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon name="home" size="2xl" />
                                &nbsp;Início
                            </NavLink>
                            <NavLink
                                href="/profile"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon name="apps" size="2xl" />
                                &nbsp;Programação
                            </NavLink>
                            <div className="text-white">
                                <Dropdown
                                    color="transparent"
                                    size="sm"
                                    buttonType="link"
                                    buttonText={
                                        <div className="py-2.5 font-medium flex items-center">
                                            <Icon
                                                name="person"
                                                size="2xl"
                                                color="white"
                                            />
                                            <span className="ml-2">
                                                Login
                                            </span>
                                        </div>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/">
                                        <DropdownItem color="lightBlue">
                                            Início
                                        </DropdownItem>
                                    </Link>                                    
                                    <Link to="/login">
                                        <DropdownItem color="lightBlue">
                                            Login
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/register">
                                        <DropdownItem color="lightBlue">
                                            Register
                                        </DropdownItem>
                                    </Link>
                                </Dropdown>
                            </div>                            
                        </div>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}

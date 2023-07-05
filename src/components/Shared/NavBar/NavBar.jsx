import React from 'react';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from "@material-tailwind/react";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const NavBar = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);
    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium text-lg"
            >
                <AnchorLink href="#about" className="flex items-center">
                    About
                </AnchorLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium text-lg"
            >
                <AnchorLink href="#resume" className="flex items-center">
                    Resume
                </AnchorLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium text-lg"
            >
                <AnchorLink href="#projects" className="flex items-center">
                    Projects
                </AnchorLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium text-lg"
            >
                <AnchorLink href="#contact" className="flex items-center">
                    Contact
                </AnchorLink>
            </Typography>
        </ul>
    );
    return (
        <>
            <Navbar className="sticky  top-0 z-10 max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="/"
                        className="mr-4 cursor-pointer py-1.5 font-medium text-lg"
                    >
                        Masum Rahman
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>

                        <AnchorLink href='#contact'>
                            <Button
                                variant="gradient"
                                size="sm"
                                className="hidden lg:inline-block text-md"
                            >
                                Hire Me
                            </Button>
                        </AnchorLink>

                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}

                    <AnchorLink href='#contact'>
                        <Button variant="gradient" size="sm" fullWidth className="mb-2">
                            Hire Me
                        </Button>
                    </AnchorLink>

                </MobileNav>
            </Navbar>
        </>
    );
};

export default NavBar;
import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";

const Projects = () => {
    return (
        <div id='projects' className='mx-auto w-9/12 pt-12'>
            <Typography className='my-8 text-center' variant="h2" color="blue" textGradient>
                My Projects
            </Typography>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <Card className="max-w-[24rem] overflow-hidden">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            alt="ui/ux review check"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Foodaholic
                        </Typography>
                        <Typography className='h-32'>
                            Bootstrap, React Bootstrap, Firebase Login (Email-Password,Google, GitHub), React Route, Private Route, React Lazy Load, React Toastify, React to PDF, Cors, Express Js
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 flex justify-evenly items-center">
                        <a href="https://foodaholic-22ee5.web.app/"><Button>Live Demo</Button></a>
                        <Menu
                            animate={{
                                mount: { y: 0 },
                                unmount: { y: 25 },
                            }}
                        >
                            <MenuHandler>
                                <Button>Source Code</Button>
                            </MenuHandler>
                            <MenuList>
                                <a href="https://github.com/masum73/chef-recipe-hunter-client"><MenuItem>Front-end</MenuItem></a>
                                <a href="https://github.com/masum73/chef-recipe-hunter-server"><MenuItem>Back-end</MenuItem></a>
                            </MenuList>
                        </Menu>
                    </CardFooter>
                </Card>
                <Card className="max-w-[24rem] overflow-hidden">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1609713292783-5e45ec29b62d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                            alt="ui/ux review check"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            ToyTime
                        </Typography>
                        <Typography className='h-32'>
                            Material Tailwind, React, React Route, Private Route, Firebase (Email-Password,Google), React Tabs, React Helmet, Hero Icons, Sweet Alert 2, Aos, Cors, Dotenv, Express Js, CRUD, MongoDB
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 flex justify-evenly items-center">
                        <a href="https://toy-time.web.app/"><Button>Live Demo</Button></a>
                        <Menu
                            animate={{
                                mount: { y: 0 },
                                unmount: { y: 25 },
                            }}
                        >
                            <MenuHandler>
                                <Button>Source Code</Button>
                            </MenuHandler>
                            <MenuList>
                                <a href="https://github.com/masum73/toy-marketplace-client"><MenuItem>Front-end</MenuItem></a>
                                <a href="https://github.com/masum73/toy-marketplace-server"><MenuItem>Back-end</MenuItem></a>
                            </MenuList>
                        </Menu>
                    </CardFooter>
                </Card>
                <Card className="max-w-[24rem] overflow-hidden">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1621419203051-f4e463849784?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                            alt="ui/ux review check"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Musical Melody
                        </Typography>
                        <Typography className='h-32'>
                            Material Tailwind, React, React Route, Private Route, Firebase (Email-Password,Google), Axios, React Query, Sweet Alert 2 and many more.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 flex justify-evenly items-center">
                        <Button>Live Demo</Button>
                        <Button>Source Code</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default Projects;
import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";

const Projects = () => {
    return (
        <div id='projects' className='mx-auto w-9/12'>
            <Typography className='my-8 text-center' variant="h3" color="blue" textGradient>
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
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                            alt="ui/ux review check"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                            and near to &quot;Naviglio&quot; where you can enjoy the main night life
                            in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 flex justify-evenly items-center">
                        <Button>Live Demo</Button>
                        <Button>Source Code</Button>
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
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                            alt="ui/ux review check"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                            and near to &quot;Naviglio&quot; where you can enjoy the main night life
                            in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 flex justify-evenly items-center">
                        <Button>Live Demo</Button>
                        <Button>Source Code</Button>
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
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                            alt="ui/ux review check"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                            and near to &quot;Naviglio&quot; where you can enjoy the main night life
                            in Barcelona.
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
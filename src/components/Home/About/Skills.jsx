import { Progress, Typography } from '@material-tailwind/react';
import React from 'react';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

const Skills = () => {
    const data = [
        {
            label: "Testing",
            value: "testing",
            desc: <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Test Planning and Strategy</Typography>
                        <Typography color="indigo" variant="h6">80%</Typography>
                    </div>
                    <Progress value={80} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Test Case Design and Execution</Typography>
                        <Typography color="indigo" variant="h6">90%</Typography>
                    </div>
                    <Progress value={90} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Functional Testing</Typography>
                        <Typography color="indigo" variant="h6">85%</Typography>
                    </div>
                    <Progress value={85} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Non-Functional Testing</Typography>
                        <Typography color="indigo" variant="h6">70%</Typography>
                    </div>
                    <Progress value={70} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Test Automation</Typography>
                        <Typography color="indigo" variant="h6">50%</Typography>
                    </div>
                    <Progress value={50} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Programming Language</Typography>
                        <Typography color="indigo" variant="h6">80%</Typography>
                    </div>
                    <Progress value={80} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Agile Methodologies</Typography>
                        <Typography color="indigo" variant="h6">85%</Typography>
                    </div>
                    <Progress value={85} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Communication and Collaboration</Typography>
                        <Typography color="indigo" variant="h6">75%</Typography>
                    </div>
                    <Progress value={75} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Analytical and Problem-Solving</Typography>
                        <Typography color="indigo" variant="h6">70%</Typography>
                    </div>
                    <Progress value={70} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Domain Knowledge</Typography>
                        <Typography color="indigo" variant="h6">90%</Typography>
                    </div>
                    <Progress value={90} />
                </div>
            </div>,
        },
        {
            label: "Front-End",
            value: "front-end",
            desc: <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">HTML5 & CSS3</Typography>
                        <Typography color="indigo" variant="h6">80%</Typography>
                    </div>
                    <Progress value={80} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Bootstrap & React-Bootstrap</Typography>
                        <Typography color="indigo" variant="h6">75%</Typography>
                    </div>
                    <Progress value={75} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Tailwind CSS</Typography>
                        <Typography color="indigo" variant="h6">85%</Typography>
                    </div>
                    <Progress value={85} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">DaisyUI, Material Tailwind, Flowbite, Ant Design</Typography>
                        <Typography color="indigo" variant="h6">90%</Typography>
                    </div>
                    <Progress value={90} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">JavaScript, DOM, ES6</Typography>
                        <Typography color="indigo" variant="h6">85%</Typography>
                    </div>
                    <Progress value={85} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">React, Router, Hooks, Context API</Typography>
                        <Typography color="indigo" variant="h6">85%</Typography>
                    </div>
                    <Progress value={85} />
                </div>
            </div>,
        },
        {
            label: "Back-End",
            value: "back-end",
            desc: <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Node JS</Typography>
                        <Typography color="indigo" variant="h6">75%</Typography>
                    </div>
                    <Progress value={75} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Express JS</Typography>
                        <Typography color="indigo" variant="h6">80%</Typography>
                    </div>
                    <Progress value={80} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">MongoDB</Typography>
                        <Typography color="indigo" variant="h6">85%</Typography>
                    </div>
                    <Progress value={85} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Firebase</Typography>
                        <Typography color="indigo" variant="h6">90%</Typography>
                    </div>
                    <Progress value={90} />
                </div>
               
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">JWT</Typography>
                        <Typography color="indigo" variant="h6">70%</Typography>
                    </div>
                    <Progress value={70} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Cors, Dotenv</Typography>
                        <Typography color="indigo" variant="h6">85%</Typography>
                    </div>
                    <Progress value={85} />
                </div>
            </div>,
        },
        {
            label: "Others",
            value: "others",
            desc: <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">GitHub</Typography>
                        <Typography color="indigo" variant="h6">80%</Typography>
                    </div>
                    <Progress value={80} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Netlify</Typography>
                        <Typography color="indigo" variant="h6">85%</Typography>
                    </div>
                    <Progress value={85} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Vercel</Typography>
                        <Typography color="indigo" variant="h6">85%</Typography>
                    </div>
                    <Progress value={85} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Azure</Typography>
                        <Typography color="indigo" variant="h6">80%</Typography>
                    </div>
                    <Progress value={80} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Jira</Typography>
                        <Typography color="indigo" variant="h6">70%</Typography>
                    </div>
                    <Progress value={70} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Postman</Typography>
                        <Typography color="indigo" variant="h6">70%</Typography>
                    </div>
                    <Progress value={70} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">SwaggerHub</Typography>
                        <Typography color="indigo" variant="h6">75%</Typography>
                    </div>
                    <Progress value={75} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Canva</Typography>
                        <Typography color="indigo" variant="h6">50%</Typography>
                    </div>
                    <Progress value={50} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Adobe XD</Typography>
                        <Typography color="indigo" variant="h6">60%</Typography>
                    </div>
                    <Progress value={60} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="Black" variant="h6">Figma</Typography>
                        <Typography color="indigo" variant="h6">70%</Typography>
                    </div>
                    <Progress value={70} />
                </div>
            </div>,
        }
    ];

    return (
        <div className='mx-auto w-9/12'>
            <Typography className='my-8 text-center' variant="h2" color="blue" textGradient>
                My Skills
            </Typography>
            <Tabs id="custom-animation" value="testing">
                <TabsHeader>
                    {data.map(({ label, value }) => (
                        <Tab key={value} value={value}>
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody
                    animate={{
                        initial: { y: 250 },
                        mount: { y: 0 },
                        unmount: { y: 250 },
                    }}
                >
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value} >
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    );
};

export default Skills;
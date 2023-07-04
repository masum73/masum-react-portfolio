import { Typography } from '@material-tailwind/react';
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
            desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people 
          who are like offended by it, it doesn't matter.`,
        },
        {
            label: "Front-End",
            value: "front-end",
            desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Back-End",
            value: "back-end",
            desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
        {
            label: "Others",
            value: "others",
            desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        // {
        //     label: "Svelte",
        //     value: "svelte",
        //     desc: `We're not always in the position that we want to be at.
        //   We're constantly growing. We're constantly making mistakes. We're
        //   constantly trying to express ourselves and actualize our dreams.`,
        // },
    ];

    return (
        <div className='mx-auto w-9/12'>
            <Typography className='my-8 text-center' variant="h3" color="blue" textGradient>
                My Skills
            </Typography>
            <Tabs value="html">
                <TabsHeader>
                    {data.map(({ label, value }) => (
                        <Tab key={value} value={value}>
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value}>
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    );
};

export default Skills;
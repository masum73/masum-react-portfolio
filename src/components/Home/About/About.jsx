import { Typography } from '@material-tailwind/react';
import React from 'react';

const About = () => {
    return (
        <div id='about' className='mx-auto w-9/12 pt-12'>
           
            <Typography className='my-5 text-center' variant="h2" color="blue" textGradient>
                About Me
            </Typography>
            <Typography className='text-center' variant="lead" color="blue-gray">
                Hey, I'm a SQA engineer by profession with a deep passion for web development.
            </Typography>

            <Typography className='my-5' variant="paragraph">
                Throughout my career, I have acquired extensive knowledge and hands-on experience in software quality assurance, ensuring that products meet the highest standards of functionality, performance, and usability. I find great satisfaction in uncovering bugs, conducting thorough testing, and collaborating with developers to enhance the overall quality of software systems.
            </Typography>
            <Typography className='my-5' variant="paragraph">
                Beyond my role as a SQA engineer, I immerse myself in the world of web development by creating robust applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The endless possibilities of crafting beautiful and intuitive user experiences drive my curiosity and ambition. I continually strive to expand my skill set and stay up-to-date with the latest industry trends, frameworks, and best practices.
            </Typography>
        
        </div>
    );
};

export default About;
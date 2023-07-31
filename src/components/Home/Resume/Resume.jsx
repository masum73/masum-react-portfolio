import { Button, Typography } from '@material-tailwind/react';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork, MdWorkHistory } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import { PiCertificate } from "react-icons/pi";
const Resume = () => {
    return (
        <div id='resume' className='mx-auto pt-12'>
            <Typography className='my-8 text-center' variant="h2" color="blue" textGradient>
                Resume
            </Typography>
            <Button onClick={() => window.location.href = 'https://drive.google.com/uc?id=1acxZxdqLgBe0L0ceAd83yVaWCcbjEvKE&export=download'} color='indigo' className='flex justify-center items-center mx-auto my-8' ripple={true}>Download</Button>

            <div className='px-5' style={{ backgroundColor: "#808080" }}>
                <VerticalTimeline>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="Feb 2021 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <h3 className="vertical-timeline-element-title">Software Quality Assurance Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">ReliSource Technologies LTD, Gulshan, Dhaka</h4>
                        <p>
                            Working on a Financial Project in Web
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Sept 2020 - Feb 2021"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MdWorkHistory />}
                    >
                        <h3 className="vertical-timeline-element-title">Quality Assurance Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Beyond Innovations & Technologies Limited, Banani, Dhaka</h4>
                        <p>
                            Worked on HealthCare, Social Projects in Android and IOS Apps
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Oct 2019 - Jan 2020"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MdWorkHistory />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Information Technology Assistant (Internship)</h3>
                        <h4 className="vertical-timeline-element-subtitle">The City Bank Ltd, Gulshan, Dhaka</h4>
                        <p>
                            Worked on core banking software project
                        </p>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        date="2016-2020"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<IoSchoolSharp />}
                    >
                        <h3 className="vertical-timeline-element-title">Computer Science & Engineering</h3>
                        <h4 className="vertical-timeline-element-subtitle">American International University - Bangladesh</h4>
                        <p>
                            Graduated with 89% grades
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2014-2015"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<IoSchoolSharp />}
                    >
                        <h3 className="vertical-timeline-element-title">HSC</h3>
                        <h4 className="vertical-timeline-element-subtitle">Govt. M.M. City College, Khulna</h4>
                        <p>
                            Passed with 81% grades
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2012-2013"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<IoSchoolSharp />}
                    >
                        <h3 className="vertical-timeline-element-title">SSC</h3>
                        <h4 className="vertical-timeline-element-subtitle">Khulna Zilla School, Khulna</h4>
                        <p>
                            Passed with 100% grades
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--certificates"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        date="June-2021"
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<PiCertificate />}
                    >
                        <h3 className="vertical-timeline-element-title">ISTQB® Certified Tester, Foundation Level</h3>
                        <h4 className="vertical-timeline-element-subtitle">Credential ID 21-CTFL-191151-12</h4>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Resume;
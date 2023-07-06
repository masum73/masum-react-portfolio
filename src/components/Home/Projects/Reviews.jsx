import { Typography } from '@material-tailwind/react';
import React from 'react';

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import {
    Card,
    CardHeader,
    CardBody,
    Avatar,
} from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

const Reviews = () => {
    return (
        <div className='mx-auto w-9/12 pt-12'>
            <Typography className='my-8 text-center' variant="h2" color="blue" textGradient>
                Reviews
            </Typography>
            {/* <div className='grid grid-cols-1 md:grid-cols-3'>
                <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
                    <CardHeader
                        color="transparent"
                        floated={false}
                        shadow={false}
                        className="mx-0 flex items-center gap-4 pt-0 pb-8"
                    >
                        <Avatar
                            size="lg"
                            variant="circular"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            alt="candice wu"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray">
                                    Candice Wu
                                </Typography>
                                <div className="5 flex items-center gap-0">
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                </div>
                            </div>
                            <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                        </div>
                    </CardHeader>
                    <CardBody className="mb-6 p-0">
                        <Typography>
                            &quot;I found solution to all my design needs from Creative Tim. I use
                            them as a freelancer in my hobby projects for fun! And its really
                            affordable, very humble guys !!!&quot;
                        </Typography>
                    </CardBody>
                </Card>
                <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
                    <CardHeader
                        color="transparent"
                        floated={false}
                        shadow={false}
                        className="mx-0 flex items-center gap-4 pt-0 pb-8"
                    >
                        <Avatar
                            size="lg"
                            variant="circular"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            alt="candice wu"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray">
                                    Candice Wu
                                </Typography>
                                <div className="5 flex items-center gap-0">
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                </div>
                            </div>
                            <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                        </div>
                    </CardHeader>
                    <CardBody className="mb-6 p-0">
                        <Typography>
                            &quot;I found solution to all my design needs from Creative Tim. I use
                            them as a freelancer in my hobby projects for fun! And its really
                            affordable, very humble guys !!!&quot;
                        </Typography>
                    </CardBody>
                </Card>
                <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
                    <CardHeader
                        color="transparent"
                        floated={false}
                        shadow={false}
                        className="mx-0 flex items-center gap-4 pt-0 pb-8"
                    >
                        <Avatar
                            size="lg"
                            variant="circular"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            alt="candice wu"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray">
                                    Candice Wu
                                </Typography>
                                <div className="5 flex items-center gap-0">
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                </div>
                            </div>
                            <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                        </div>
                    </CardHeader>
                    <CardBody className="mb-6 p-0">
                        <Typography>
                            &quot;I found solution to all my design needs from Creative Tim. I use
                            them as a freelancer in my hobby projects for fun! And its really
                            affordable, very humble guys !!!&quot;
                        </Typography>
                    </CardBody>
                </Card>
            </div> */}
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className=""
                slidesPerView={3}
            >
                <SwiperSlide>
                    <Card color="gray" shadow={false} className="w-[26rem] px-8 py-5 mt-5 mb-16">
                        <CardHeader
                            color="transparent"
                            floated={false}
                            shadow={false}
                            className="mx-0 flex items-center gap-4 pt-0 pb-8"
                        >
                            <Avatar
                                size="lg"
                                variant="circular"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                alt="candice wu"
                            />
                            <div className="flex w-full flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <Typography variant="h5" color="blue-gray">
                                        Candice Wu
                                    </Typography>
                                    <div className="5 flex items-center gap-0">
                                        <StarIcon className="h-5 w-5 text-yellow-700" />
                                        <StarIcon className="h-5 w-5 text-yellow-700" />
                                        <StarIcon className="h-5 w-5 text-yellow-700" />
                                        <StarIcon className="h-5 w-5 text-yellow-700" />
                                        <StarIcon className="h-5 w-5 text-yellow-700" />
                                    </div>
                                </div>
                                <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                            </div>
                        </CardHeader>
                        <CardBody className="mb-6 p-0">
                            <Typography>
                                &quot;I found solution to all my design needs from Creative Tim. I use
                                them as a freelancer in my hobby projects for fun! And its really
                                affordable, very humble guys !!!&quot;
                            </Typography>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card color="gray" shadow={false} className="w-[26rem] px-8 py-5 mt-5 mb-16">
                        <CardHeader
                            color="transparent"
                            floated={false}
                            shadow={false}
                            className="mx-0 flex items-center gap-4 pt-0 pb-8"
                        >
                            <Avatar
                                size="lg"
                                variant="circular"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                alt="candice wu"
                            />
                            <div className="flex w-full flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <Typography variant="h5" color="blue-gray">
                                        Candice Wu
                                    </Typography>
                                    <div className="5 flex items-center gap-0">
                                        <StarIcon className="h-5 w-5 text-yellow-700" />
                                        <StarIcon className="h-5 w-5 text-yellow-700" />
                                        <StarIcon className="h-5 w-5 text-yellow-700" />
                                        <StarIcon className="h-5 w-5 text-yellow-700" />
                                        <StarIcon className="h-5 w-5 text-yellow-700" />
                                    </div>
                                </div>
                                <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                            </div>
                        </CardHeader>
                        <CardBody className="mb-6 p-0">
                            <Typography>
                                &quot;I found solution to all my design needs from Creative Tim. I use
                                them as a freelancer in my hobby projects for fun! And its really
                                affordable, very humble guys !!!&quot;
                            </Typography>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card color="gray" shadow={false} className="w-[26rem] px-8 py-5 mt-5 mb-16">
                        <CardHeader
                            color="transparent"
                            floated={false}
                            shadow={false}
                            className="mx-0 flex items-center gap-4 pt-0 pb-8"
                        >
                            <Avatar
                                size="lg"
                                variant="circular"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                alt="candice wu"
                            />
                            <div className="flex w-full flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <Typography variant="h5" color="blue-gray">
                                        Candice Wu
                                    </Typography>
                                    <div className="5 flex items-center gap-0">
                                        <StarIcon className="h-5 w-5 text-yellow-700" />
                                        <StarIcon className="h-5 w-5 text-yellow-700" />
                                        <StarIcon className="h-5 w-5 text-yellow-700" />
                                        <StarIcon className="h-5 w-5 text-yellow-700" />
                                        <StarIcon className="h-5 w-5 text-yellow-700" />
                                    </div>
                                </div>
                                <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                            </div>
                        </CardHeader>
                        <CardBody className="mb-6 p-0">
                            <Typography>
                                &quot;I found solution to all my design needs from Creative Tim. I use
                                them as a freelancer in my hobby projects for fun! And its really
                                affordable, very humble guys !!!&quot;
                            </Typography>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card color="gray" shadow={false} className="w-[26rem] px-8 py-5 mt-5 mb-16">
                        <CardHeader
                            color="transparent"
                            floated={false}
                            shadow={false}
                            className="mx-0 flex items-center gap-4 pt-0 pb-8"
                        >
                            <Avatar
                                size="lg"
                                variant="circular"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                alt="candice wu"
                            />
                            <div className="flex w-full flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <Typography variant="h5" color="blue-gray">
                                        Candice Wu
                                    </Typography>
                                    <div className="5 flex items-center gap-0">
                                        <StarIcon className="h-5 w-5 text-yellow-700" />
                                        <StarIcon className="h-5 w-5 text-yellow-700" />
                                        <StarIcon className="h-5 w-5 text-yellow-700" />
                                        <StarIcon className="h-5 w-5 text-yellow-700" />
                                        <StarIcon className="h-5 w-5 text-yellow-700" />
                                    </div>
                                </div>
                                <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                            </div>
                        </CardHeader>
                        <CardBody className="mb-6 p-0">
                            <Typography>
                                &quot;I found solution to all my design needs from Creative Tim. I use
                                them as a freelancer in my hobby projects for fun! And its really
                                affordable, very humble guys !!!&quot;
                            </Typography>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                {/* <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>

        </div>
    )
};

export default Reviews;
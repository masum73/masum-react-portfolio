
import React from 'react';
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
} from "@material-tailwind/react";

import emailjs from '@emailjs/browser';

import Swal from 'sweetalert2';

const Contact = () => {
    
    
    const handleMail = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        // console.log(name, email, message);

        const templateParam = {
            from_name: name,
            from_email: email,
            message: message,
        }

        emailjs.send("service_cseopoo", "template_kqnt80i", templateParam, "3m65YYwDDB-pPiRux")
        
        event.target.reset();

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your message has been sent',
            showConfirmButton: false,
            timer: 1500
          })
    }
    return (
        <div id='contact' className='mx-auto w-9/12 pt-12'>
            <Typography className='my-8 text-center' variant="h2" color="blue" textGradient>
                Contact Me
            </Typography>
            <div className="flex gap-4 text-blue-gray-900 justify-center items-center">
                <Typography as="a" href="https://github.com/masum73" className="opacity-80 transition-opacity hover:opacity-100">
                    <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </Typography>
                <Typography as="a" href="https://www.linkedin.com/in/masumrahman73/" className="opacity-80 transition-opacity hover:opacity-100">
                    <svg className='h-12 w-12' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 50 50" aria-hidden="true">
                        <path
                            fill-rule="evenodd"
                            d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"
                            clip-rule="evenodd"
                        >
                        </path>
                    </svg>
                </Typography>
                <Typography as="a" href="https://www.facebook.com/masumrahman732" className="opacity-80 transition-opacity hover:opacity-100">
                    <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            fill-rule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </Typography>
            </div>
            <div className='mx-auto w-9/12 flex justify-center items-center mb-6'>
                <Card color="transparent" shadow={false}>
                    <form onSubmit={handleMail} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-80">
                        <div className="mb-4 flex flex-col gap-6">
                            <Input name='name' size="lg" label="Name" />
                            <Input name='email' size="lg" label="Email" />
                            <Textarea name='message' label="Message" />
                        </div>
                        <Button type='submit' className="mt-6 font-bold text-md" fullWidth>
                            Send
                        </Button>

                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Contact;
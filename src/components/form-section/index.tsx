import React, {useState} from "react";
import { useForm } from '@formspree/react';
import { useSnackbar } from "notistack";

import SleekButton from "../sleek-button/sleek-button";
import styles from './index.module.css';

const FormComp = () => {
    const [submitted, setSubmitted] = useState<boolean>(false)
    const [state, handleSubmit] = useForm('contactForm');
    const { enqueueSnackbar } = useSnackbar();

    const errorAlert = (msg:string) => {
        return (
            enqueueSnackbar(msg,{variant:'error'})
        )
    }

    const successAlert=(msg:string)=>{
        return(
            enqueueSnackbar(msg,{variant:'success'})
        )
    }

    if(submitted && state.succeeded){
        successAlert("Mail sent successfully");
        setSubmitted(false);
    }
    if(submitted && state.errors){
        successAlert("An error occured while sending mail")
        setSubmitted(false);
    }
    
    return (
        <>
            <div className={`${styles.wrapper} w-full`}>
                <div className="container py-8 sm:py-16 md:py-24 lg:py-32 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                        <div className="text-left mx-4">
                            <div className="pt-8 rounded-xlg">
                                <img className="rounded-lg" src="../../assets/images/contact2.png" width="500px" height="740px" alt="form-picture" />
                            </div>
                        </div>
                        <div className="text-white mx-4 ">
                            <h3 className="my-8 text-lg">Fill in the form</h3>
                            <form onSubmit={handleSubmit} className="text-black">
                                <div className="my-12">
                                    <input className="w-full rounded-lg border-0 px-6 py-3" type="text" name="name" id="name" placeholder="Your name" />
                                </div>
                                <div className="my-12">
                                    <input className="w-full rounded-lg border-0 px-6 py-3" type="text" name="phone" id="phone" placeholder="Phone number" />
                                </div>
                                <div className="my-12">
                                    <input className="w-full rounded-lg border-0 px-6 py-3" type="text" name="email" id="email" placeholder="Email address" />
                                </div>
                                <div className="my-12">
                                    <input className="w-full rounded-lg border-0 px-6 py-3" type="text" name="subject" id="subject" placeholder="Subject" />
                                </div>
                                <div className="my-12">
                                    <textarea className="w-full rounded-lg border-0 px-6 py-3" name="message" id="message" cols={30} rows={10}></textarea>
                                </div>

                                <div className="my-12">
                                    <div onClick={() => {setSubmitted(true)}}>
                                        <SleekButton label="Submit" size="lg" mode="light"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormComp;
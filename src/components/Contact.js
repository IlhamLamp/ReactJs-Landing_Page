import React from "react";

// i
import { contactData } from "../helpers/data";

const Contact = () => {
    // desctructured contactData
    const { title, subtitle, email, subject, message } = contactData;

    return (
        <section className="bg-accent-primary">
            <div
                className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md"
                data-aos='fade-down'
                data-aos-offset='300'
            >
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">{title}</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-white/50 sm:text-xl">{subtitle}</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="form-text font-contact">{email}</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-primary dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@mail.com" required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="form-text font-contact">{subject}</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-primary dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="form-text font-contact">{message}</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:placeholder-gray-400 dark:text-primary dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>

                    {/* Button */}
                    <a href="#_" className="px-5 py-2.5 relative rounded group font-medium text-white inline-block group-hover:bg-indigo-500 shadow-lg shadow-gray-500/50">
                        <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-gray-500"></span>
                        <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-gray-500"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-gray-600"></span>
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-500 from-pink-500"></span>
                        <span className="relative">Submit</span>
                    </a>
                </form>
            </div>
        </section>
    )
}

export default Contact;
// import dbConnect from '@/lib/dbConnect';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import Link from 'next/link';

const ServicesSection = async () => {
    // const res = await fetch('/services.json')

    const serviceCollection = await dbConnect(collectionNameObj.servicesCollection);
    const data = await serviceCollection.find({}).toArray();


    return (
        <section className="py-16 bg-base-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <p className="text-primary font-medium mb-2">Service</p>
                    <h2 className="text-4xl font-bold text-secondary mb-4">Our Service Area</h2>
                    <p className="text-accent max-w-2xl mx-auto">
                        The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even Slightly Believable.
                    </p>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {data.map((service) => (
                        <div key={service._id} className="bg-base-100 rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-200 p-5">
                            {/* Service Image */}
                            <div className="relative h-48 overflow-hidden rounded-t-lg">
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Service Content */}
                            <div className="pt-4">
                                <h3 className="text-xl font-bold text-secondary mb-4">{service.title}</h3>

                                {/* Price and Arrow */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <span className="text-accent mr-2">Price:</span>
                                        <span className="text-primary font-bold text-lg">${service.price}</span>
                                    </div>
                                    <Link href={`/services/${service._id}`}><FaArrowRight className="text-primary text-lg hover:translate-x-1 transition-transform duration-200 cursor-pointer" /></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* More Services Button */}
                <div className="text-center">
                    <button className="border-2 border-primary text-primary hover:bg-primary hover:text-base-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                        More Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
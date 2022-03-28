import { CheckIcon } from '@heroicons/react/solid';
import React from 'react';
import Benifits from '../Benifits/Benifits';

const PricingDetails = (props) => {
    const {name  , price , benefits } = props.details
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 py-2 rounded-lg text-2xl'>{name}</h2>
            <p>
                <span className='text-6xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>month</span>
            </p>
            <div>
                <h3 className='text-xl font-bold text-left'>Benifits</h3>
                {
                    benefits.map(benefit => <Benifits benefit = {benefit}></Benifits>)
                }
                
            </div>
        </div>
    );
};

export default PricingDetails;
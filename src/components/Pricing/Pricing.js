import React from 'react';
import PricingDetails from '../PricingDetails/PricingDetails';


const Pricing = () => {
    const pricingDetails = [
        {id:1 , name:'Free' , price:0 , benefits: [
            'Lifetime Free' , 'Unlimited Deals' , 'Localied Deals' , 'Crazy Deals' , 'Fantastic Deals'
        ]},
        {id:2 , name:'Regular' , price:9.99 , benefits: [
            'Everything On Free' , 'Unlimited Deals' , 'Localied Deals' , 'Crazy Deals' , 'Fantastic Deals'
        ]},
        {id:3 , name:'Premimum' , price:19.99 , benefits: [
            'Everything On Regular' , 'Unlimited Deals' , 'Localied Deals' , 'Crazy Deals' , 'Fantastic Deals'
        ]},
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-4'>
            <h1 className='text-6xl font-mono text-white'>BEst deal of the tream</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consectetur consequatur. Exercitationem sunt minima vitae inventore saepe nobis quae quis.</p>
            <div className='grid md:grid-cols-3 gap-3 m-3'>
                {
                   pricingDetails.map(details => <PricingDetails key={details.id} details = {details} >

                    </PricingDetails>) 
                }
                {/* {
                    pricingOption.map(option => <PricingOPtion
                    key={option.id}
                    option = {option}
                    ></PricingOPtion>)
                } */}
            </div>
        </div>

    );
};

export default Pricing;
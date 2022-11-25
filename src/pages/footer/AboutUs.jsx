import React from 'react'

const AboutUs = () => {
    return (
        <div className='container bg-slate-300 h-[400px] w-full'>
            <div className='flex justify-center items-center text-[40px]'>Introduction About Company</div>
            <div className='bg-red-200 flex  justify-between items-center w-full'>
                <div className='w-1/3 bg-green-200 flex items-center justify-center'>
                    <img src='https://remitano.com/about/bitcoin-about.png' alt='ncoin' className='w-[200px] h-[200px]' />
                </div>
                <div className='w-2/3 flex flex-col justify-between'>
                    <div>Remitano provides escrowed P2P Bitcoin marketplace where people buy and sell Bitcoin easily and safely with notable simple UI, friendly online customer support 24/7 and lowest fee compared with major players on the market. Our team is comprised mostly by banking professionals with extensive experience in financial products, E-currencies, Payment System and Agile Software Development, and others.</div>
                    <div>Currently, it has service in many countries including Australia, Malaysia, Nigeria, Vietnam, Cambodia, China and is growing everyday.</div>
                    <div>Please contact us at the following email:</div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
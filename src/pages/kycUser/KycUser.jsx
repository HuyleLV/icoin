import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { fetchData } from '../../api/useGetCountry';
import { FaBeer, FaClosedCaptioning, FaExclamationCircle, FaWindowClose } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { uploadImage } from './useKycUser';

const KycUser = () => {

    const [countryState, setCountryState] = useState({
        loading: false,
        countries: [],
        errorMessage: "",
    });

    useEffect(() => {
        fetchData(countryState, setCountryState);
    }, []);

    const { loading, errorMessage, countries } = countryState;

    const [selectedCountry, setSelectedCountry] = useState();

    const [imgCardFront, setImgCardFront] = useState({
        url: '',
        public_id: ''
    });
    const [imgCardBack, setImgCardBack] = useState({
        url: '',
        public_id: ''
    });
    const [imgLicense, setImgLicense] = useState({
        url: '',
        public_id: ''
    });
    const [imgPassport, setImgPassport] = useState({
        url: '',
        public_id: ''
    });
    const [imgSSN, setImgSSN] = useState({
        url: '',
        public_id: ''
    });
    const [imgEIN, setImgEIN] = useState({
        url: '',
        public_id: ''
    });



    //   find selected country data
    //search selected country
    const searchSelectedCountry = countries.find((obj) => {
        if (obj.name.common === selectedCountry) {
            return true;
        }
        return false;
    });

    const uploadImageFront = e => {
        const files = e.target.files[0];
        uploadImage(files, setImgCardFront)
    }

    const uploadImageBack = e => {
        const files = e.target.files[0];
        uploadImage(files, setImgCardBack)
    }

    const uploadImageLicenseDriver = e => {
        const files = e.target.files[0];
        uploadImage(files, setImgLicense)
    }

    const uploadPassport = e => {
        const files = e.target.files[0];
        uploadImage(files, setImgPassport)
    }

    const uploadSSN = e => {
        const files = e.target.files[0];
        uploadImage(files, setImgSSN)
    }

    const uploadEIN = e => {
        const files = e.target.files[0];
        uploadImage(files, setImgEIN)
    }

    const _handleDeleteImage = async (data) => {
        try {
            await axios.post('https://api.cloudinary.com/v1_1/dik3ynw8s/destroy', "rmfyvz07zf2m6widdltu");
            console.log('oke')
        } catch (error) {

        }
    }

    const _handleVerify = () => {
        const urlFront = imgCardFront.url;
        const urlBack = imgCardBack.url;
        const urlLicense = imgLicense.url;
        const urlPassport = imgPassport.url;
        const urlSSN = imgSSN.url;
        const urlEIN = imgEIN.url;
        const idImageFront = imgCardFront.public_id;
        const idImageBack = imgCardBack.public_id;
        const idImageLicense = imgLicense.public_id;
        const idImagePassport = imgPassport.public_id;
        const idImageSSN = imgSSN.public_id;
        const idImageEIN = imgEIN.public_id;
    }

    return (
        <section className='flex justify-center'>
            <div className="bg-white shadow h-full pb-20 mx-5 my-20 sm:w-full lg:mx-auto w-4/6" style={{ width: '60%' }}>
                <div className="pl-5 h-32 flex justify-start items-center">
                    <p className="uppercase font-bold text-3xl text-left">
                        Identity Detail
                    </p>
                </div>
                {/* Main box */}
                <div className="flex justify-start items-center pl-5 mt-3">
                    <span className="text-left">
                        Select country/flag
                    </span>
                </div>
                <div className='pl-5'>
                    <select
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        className="border rounded-sm xs:w-full w-[250px] mt-2"
                    >
                        <option defaultValue="">--Select Country--</option>
                        <option value="United State">United State</option>
                        <option value="VietNam">Viet Nam</option>
                        {countries.filter((el) => !el.name.common.includes('America') && !el.name.common.includes('United State') && !el.name.common.includes('Vietnam')).map((item) => {
                            return (
                                <option key={uuidv4()} value={item.name.common}>
                                    {item.name.common}
                                </option>
                            );
                        })}
                    </select>
                </div>
                {
                    selectedCountry && selectedCountry !== '' ? (
                        <div className="flex justify-start items-center pl-5 mt-5">
                            <FaExclamationCircle color='red' />
                            <p className="text-left pl-2 m-0">
                                Please upload your identify
                            </p>
                        </div>
                    ) : (
                        <div className="flex justify-start items-center pl-5 mt-2">
                            <FaExclamationCircle color='red' />
                            <p className="text-left pl-2 m-0">
                                Please choose your country
                            </p>
                        </div>
                    )
                }
                {/* Box */}

                <div className="ml-5 border-t mt-3">

                </div>
                {
                    selectedCountry && selectedCountry !== '' ? (
                        <>
                            <div className="enterInfor flex-wrap flex flex-w mt-3">
                                <div className="leftBox">
                                    <div className="flex flex-col pl-5 my-2">
                                        <span className="text-left">
                                            Full name
                                        </span>
                                        <input className='border rounded w-[250px] mt-2' />
                                    </div>

                                    <div className="flex flex-col pl-5 my-2">
                                        <span className="text-left p-0">
                                            Phone Number
                                        </span>
                                        <input className='border rounded xs:w-full w-[250px] mt-2' />
                                    </div>

                                    <div className="flex flex-col pl-5 my-2">
                                        <span className="text-left p-0">
                                            Identify Card Number
                                        </span>
                                        <input className='border rounded xs:w-full w-[250px] mt-2' />
                                    </div>

                                    <div className="flex flex-col pl-5 my-2">
                                        <span className="text-left">
                                            Date Of Birth
                                        </span>
                                        <input className='border rounded w-[250px] mt-2' />
                                    </div>
                                </div>
                                {/* right box */}
                                <div className="rightBox">
                                    <div className="flex flex-col pl-5 my-2">
                                        <span className="text-left">
                                            Address
                                        </span>
                                        <input className='border rounded w-[250px] mt-2' />
                                    </div>
                                    {
                                        selectedCountry && (selectedCountry.includes('America') || selectedCountry.includes('United State')) ? (
                                            <>
                                                <div className="flex flex-col pl-5 my-2">
                                                    <span className="text-left p-0">
                                                        SSN Number
                                                    </span>
                                                    <input className='border rounded xs:w-full w-[250px] mt-2' />
                                                </div>

                                                <div className="flex flex-col pl-5 my-2">
                                                    <span className="text-left p-0">
                                                        Employer Identification Number
                                                    </span>
                                                    <input className='border rounded xs:w-full w-[250px] mt-2' />
                                                </div>
                                            </>
                                        ) : null
                                    }
                                </div>
                                <div className="avatar">
                                    <div className="my-2 mx-3 max-w-xs sm:w-xs rounded-lg">
                                        <div className="m-4">
                                            <label className="inline-block mb-2 text-gray-500">Photo Face of Person</label>
                                            <div className="flex items-center justify-center w-full">
                                                <label
                                                    className="flex flex-col w-32 h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                                    <div className={`flex flex-col items-center justify-center w-full h-full ${imgCardFront.url !== '' ? 'pt-0 relative' : 'pt-7'}`}>
                                                        {
                                                            imgCardFront.url !== '' ?
                                                                (
                                                                    <>
                                                                        <AiOutlineClose className='absolute top-1 right-1' />
                                                                        <img className='object-cover w-32 h-32' src={imgCardFront.url} />
                                                                    </>
                                                                )
                                                                : (
                                                                    <>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                                        </svg>
                                                                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                                            Attach a image</p>
                                                                    </>
                                                                )
                                                        }
                                                    </div>
                                                    <input type="file" className="opacity-0" onChange={uploadImageFront} />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* form kyc */}

                            <div className="flex justify-center flex-wrap mt-8">
                                {
                                    selectedCountry && selectedCountry !== '' ? (
                                        <>
                                            <div className="my-2 mx-3 max-w-xs sm:w-xs rounded-lg shadow-xl bg-gray-50">
                                                <div className="m-4">
                                                    <label className="inline-block mb-2 text-gray-500">Identity Card Front</label>
                                                    <div className="flex items-center justify-center w-full">
                                                        <label
                                                            className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                                            <div className={`flex flex-col items-center justify-center w-full h-full ${imgCardFront.url !== '' ? 'pt-0 relative' : 'pt-7'}`}>
                                                                {
                                                                    imgCardFront.url !== '' ?
                                                                        (
                                                                            <>
                                                                                <AiOutlineClose className='absolute top-1 right-1' />
                                                                                <img className='object-cover w-full h-full' src={imgCardFront.url} />
                                                                            </>
                                                                        )
                                                                        : (
                                                                            <>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                                                </svg>
                                                                                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                                                    Attach a image</p>
                                                                            </>
                                                                        )
                                                                }
                                                            </div>
                                                            <input type="file" className="opacity-0" onChange={uploadImageFront} />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-2 mx-3 max-w-xs sm:w-xs rounded-lg shadow-xl bg-gray-50">
                                                <div className="m-4">
                                                    <label className="inline-block mb-2 text-gray-500">Identity Card Back</label>
                                                    <div className="flex items-center justify-center w-full">
                                                        <label
                                                            className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                                            <div className={`flex flex-col items-center justify-center w-full h-full ${imgCardBack.url !== '' ? 'pt-0' : 'pt-7'}`}>
                                                                {
                                                                    imgCardBack.url !== '' ?
                                                                        (
                                                                            <>
                                                                                <img className='object-cover w-full h-full' src={imgCardBack.url} />
                                                                            </>
                                                                        )
                                                                        : (
                                                                            <>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                                                </svg>
                                                                                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                                                    Attach a image</p>
                                                                            </>
                                                                        )
                                                                }
                                                            </div>
                                                            <input type="file" className="opacity-0" onChange={uploadImageBack} />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-2 mx-3 max-w-xs sm:w-xs rounded-lg shadow-xl bg-gray-50">
                                                <div className="m-4">
                                                    <label className="inline-block mb-2 text-gray-500">License Photo</label>
                                                    <div className="flex items-center justify-center w-full">
                                                        <label
                                                            className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                                            <div className={`flex flex-col items-center justify-center w-full h-full ${imgLicense.url !== '' ? 'pt-0' : 'pt-7'}`}>
                                                                {
                                                                    imgLicense.url !== '' ?
                                                                        (
                                                                            <>
                                                                                <img className='object-cover w-full h-full' src={imgLicense.url} />
                                                                            </>
                                                                        )
                                                                        : (
                                                                            <>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                                                </svg>
                                                                                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                                                    Attach a image</p>
                                                                            </>
                                                                        )
                                                                }
                                                            </div>
                                                            <input type="file" className="opacity-0" onChange={uploadImageLicenseDriver} />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : null
                                }
                            </div>
                            <div className="flex justify-center flex-wrap mt-8">

                                {
                                    selectedCountry && (selectedCountry.includes('America') || selectedCountry.includes('United State')) ? (
                                        <>
                                            <div className="my-2 mx-3 max-w-xs sm:w-xs rounded-lg shadow-xl bg-gray-50">
                                                <div className="m-4">
                                                    <label className="inline-block mb-2 text-gray-500">Passport Photo</label>
                                                    <div className="flex items-center justify-center w-full">
                                                        <label
                                                            className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                                            <div className={`flex flex-col items-center justify-center w-full h-full ${imgPassport.url !== '' ? 'pt-0' : 'pt-7'}`}>
                                                                {
                                                                    imgPassport.url !== '' ?
                                                                        (
                                                                            <>
                                                                                <img className='object-cover w-full h-full' src={imgPassport.url} />
                                                                            </>
                                                                        )
                                                                        : (
                                                                            <>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                                                </svg>
                                                                                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                                                    Attach a image</p>
                                                                            </>
                                                                        )
                                                                }
                                                            </div>
                                                            <input type="file" className="opacity-0" onChange={uploadPassport} />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-2 mx-3 max-w-xs sm:w-xs rounded-lg shadow-xl bg-gray-50">
                                                <div className="m-4">
                                                    <label className="inline-block mb-2 text-gray-500">SSN Photos</label>
                                                    <div className="flex items-center justify-center w-full">
                                                        <label
                                                            className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                                            <div className={`flex flex-col items-center justify-center w-full h-full ${imgSSN.url !== '' ? 'pt-0' : 'pt-7'}`}>
                                                                {
                                                                    imgSSN.url !== '' ?
                                                                        (
                                                                            <>
                                                                                <img className='object-cover w-full h-full' src={imgSSN.url} />
                                                                            </>
                                                                        )
                                                                        : (
                                                                            <>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                                                </svg>
                                                                                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                                                    Attach a image</p>
                                                                            </>
                                                                        )
                                                                }
                                                            </div>
                                                            <input type="file" className="opacity-0" onChange={uploadSSN} />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-2 mx-3 max-w-xs sm:w-xs rounded-lg shadow-xl bg-gray-50">
                                                <div className="m-4">
                                                    <label className="inline-block mb-2 text-gray-500">EIN</label>
                                                    <div className="flex items-center justify-center w-full">
                                                        <label
                                                            className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                                            <div className={`flex flex-col items-center justify-center w-full h-full ${imgEIN.url !== '' ? 'pt-0' : 'pt-7'}`}>
                                                                {
                                                                    imgEIN.url !== '' ?
                                                                        (
                                                                            <>
                                                                                <img className='object-cover w-full h-full' src={imgEIN.url} />
                                                                            </>
                                                                        )
                                                                        : (
                                                                            <>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                                                </svg>
                                                                                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                                                    Attach a image</p>
                                                                            </>
                                                                        )
                                                                }
                                                            </div>
                                                            <input type="file" className="opacity-0" onChange={uploadEIN} />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : null
                                }
                            </div>
                        </>
                    ) : null
                }
                {
                    selectedCountry && selectedCountry !== '' ? (
                        <div className='text-center mt-5'>
                            <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Verify User</button>
                        </div>
                    ) : null
                }
            </div>
        </section >
    )
}

export default KycUser

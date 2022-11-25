import React, { useState } from 'react'
import { sendCodeRefer } from './useModalCodeRefer'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const ModalCodeRefer = ({ setShowModal, setResCodeRefer }) => {

    const _user = localStorage.getItem("_user");
    const user_id = JSON.parse(_user).user_id;
    const [codeReferInput, setCodeReferInput] = useState('')
    const [message, setMessage] = useState('')
    const handleSendCodeRefer = async () => {
        //goi api
        const res = await sendCodeRefer({ user_id, codeReferInput })
        if (res.success === false) {
            setMessage(res.mes)
        }
        else {

            setShowModal(false)
        }


        // setShowModal(false)
    }


    return (
        <>
            <div
                className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto min-w-[400px]">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-center justify-center p-4 border-b border-solid border-slate-200 rounded-t">
                            <h2 className="text-xl font-semibold flex items-center justify-center">
                                Type Code Referral
                            </h2>
                            <button
                                className="flex items-center justify-center pb-4 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent text-black  h-6 w-7 text-2xl block outline-none focus:outline-none">
                                    x
                                </span>
                            </button>

                        </div>
                        <span className='flex justify-center items-center text-red-500'>{message}</span>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <div className="textLong rounded flex flex-col my-2">
                                <span className='font-semibold'>Code Referral</span>
                                <input required placeholder='Enter Code Referral or Skip' type='text' className='border w-full h-8 pl-2'
                                    value={codeReferInput}
                                    onChange={(e) => setCodeReferInput(e.target.value)}
                                />
                            </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-between p-3 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Skip
                            </button>
                            <button
                                className="bg-emerald-400 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                // onClick={() => setShowModal(false)}
                                onClick={handleSendCodeRefer}
                            >
                                Ok
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            {/* <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            /> */}
        </>
    )
}

export default ModalCodeRefer
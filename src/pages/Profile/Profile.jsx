import React, { useEffect, useState } from 'react'
import { getProfile } from '../../api/useGetProfile'
import { styleGlobal } from '../../utils/styleGloba'
const Profile = () => {
    const id = 9
    const [user, setUser] = useState([])
    useEffect(() => {
        getProfile(setUser, id)

    }, [])

    return (
        <div className='w-full container py-5'>
            <div className="boxHeader h-20 border text-white p-2 rounded h-16" style={{ background: styleGlobal.backgroundColor2 }}>
                <p className='p-0 m-0'>Estimated assets value: </p>
            </div>

            <div className="flex flex-col justify-center h-full">

                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
                    <header className="px-5 py-4 bg-slate-200 border-b border-gray-100">
                        <h2 className="font-semibold text-gray-800">Tóm lược về thuyan2411pig</h2>
                    </header>
                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>


                                    </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                    {user && user.length > 0 ? (
                                        user.map((item, index) => (
                                            <tr key={index}>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="font-medium text-gray-800">ID TAI KHOAN</div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left">{item.user.id}</div>
                                                </td>

                                            </tr>
                                        ))
                                    ) : null
                                    }


                                    <tr>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="font-medium text-gray-800">Tai khoan da duoc tao</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            {/* <div className="text-left">{user.data.data.user.createdAt}</div> */}
                                        </td>

                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile
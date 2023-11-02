import Header from '@/components/Header'
import Submission from '@/components/submissionV3'
import InternationalFormContextProvider from '@/context/international-form-store'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <InternationalFormContextProvider>
                <Submission></Submission>
            </InternationalFormContextProvider>
        </>
    )
}

export default page
import Header from '@/components/Header'
import StandardThankYouForm from '@/components/StandarThankYouFormV3'
import InternationalFormContextProvider from '@/context/international-form-store'
import QuestionsContextProvider from '@/context/questions-store'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <InternationalFormContextProvider>
                <QuestionsContextProvider>
                    <StandardThankYouForm />
                </QuestionsContextProvider>
            </InternationalFormContextProvider>
        </>
    )
}

export default page
import Header from '@/components/Header'
import Questions from '@/components/generic/Questions'
import QuestionsContextProvider from '@/context/questions-store'
import React from 'react'

const page = () => {
    return (
        <div>
            <>
                <Header />
                <QuestionsContextProvider>
                    <Questions />
                </QuestionsContextProvider>
            </>
        </div>
    )
}

export default page
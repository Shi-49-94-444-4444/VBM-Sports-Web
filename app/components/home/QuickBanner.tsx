import React from 'react'
import FormatHomePage from './FormatHomePage'
import QuickBannerImage from './QuickBannerImage'

const QuickBanner = () => {
  return (
    <>
        <FormatHomePage 
            title="Bạn muốn chơi thể thao?"
            subTitle="đến đây và hãy chơi"
        />
        <QuickBannerImage />
    </>
  )
}

export default QuickBanner
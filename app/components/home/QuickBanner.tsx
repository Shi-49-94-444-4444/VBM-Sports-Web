import QuickBannerImage from './QuickBanner/QuickBannerImage'
import QuickBannerTitle from './QuickBanner/QuickBannerTitle'

const QuickBanner = () => {
  return (
    <>
        <QuickBannerTitle
            title="Bạn muốn chơi thể thao?"
            subTitle="đến đây và hãy chơi"
        />
        <QuickBannerImage />
    </>
  )
}

export default QuickBanner
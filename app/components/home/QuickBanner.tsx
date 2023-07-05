import QuickBannerImage from './QuickBanner/QuickBannerImage'
import QuickBannerTitle from './QuickBanner/QuickBannerTitle'

const QuickBanner = () => {
  return (
    <div>
        <QuickBannerTitle
            title="Bạn muốn chơi thể thao?"
            subTitle="đến đây và hãy chơi"
        />
        <QuickBannerImage />
    </div>
  )
}

export default QuickBanner
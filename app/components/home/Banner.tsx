
import Container from '../Container'
import BannerImage from './Banner/BannerImage'
import BannerIntro from './Banner/BannerIntro'

const Banner = () => {
    return (
        <Container>
            <div className="
                    flex 
                    flex-row 
                    justify-between
                    pb-28
                "
            >
                <BannerIntro />
                <BannerImage />
            </div>
        </Container>
    )
}

export default Banner

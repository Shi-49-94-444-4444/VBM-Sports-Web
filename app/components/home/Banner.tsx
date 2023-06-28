
import Container from '../Container'
import BannerImage from './BannerImage'
import BannerIntro from './BannerIntro'


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

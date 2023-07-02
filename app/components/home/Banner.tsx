
import Background from '../BackgroundCus'
import Container from '../Container'
import BannerImage from './Banner/BannerImage'
import BannerIntro from './Banner/BannerIntro'

const Banner = () => {
    return (
        <Background src="/images/background.png">

            <Container>
                <div className="gird gird-cols-5 items-center">
                    <BannerIntro />
                    <BannerImage />
                </div>
            </Container>
        </Background>

    )
}

export default Banner

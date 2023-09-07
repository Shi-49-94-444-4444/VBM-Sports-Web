
import Background from '../BackgroundCus'
import Container from '../Container'
import BannerImage from './Banner/BannerImage'
import BannerIntro from './Banner/BannerIntro'

const Banner = () => {
    return (
        <Background src="/images/background.png">
            <Container>
                <div className="
                        flex
                        justify-center
                        items-center 
                        py-5
                        md:py-12 
                        lg:grid
                        lg:gird-cols-5 
                        lg:justify-normal
                        lg:py-16 
                        xl:py-20
                        transition-all
                        duration-300
                    "
                >
                    <BannerIntro />
                    <BannerImage />
                </div>
            </Container>
        </Background>
    )
}

export default Banner

import { IoLogoGooglePlaystore } from "react-icons/io5"
import { BsApple } from "react-icons/bs"
import { AiFillYoutube } from "react-icons/ai"
import { BiLogoFacebook } from "react-icons/bi"
import { Container } from "./providers"

const Footer = () => {
  return (
    <div className="
        bg-[#222222] 
        w-full 
        text-white
      "
    >
      <Container>
        <div className="
            grid
            grid-cols-12
            py-10 
            gap-5
            transition-all
            duration-500
          "
        >
          <div className="
              lg:col-span-5
              md:col-span-6
              col-span-12
              flex 
              flex-col 
              gap-5
              transition-all 
              duration-500
            "
          >
            <h1 className="
                uppercase 
                text-base 
                font-bold
              "
            >
              Thông Tin chung
            </h1>
            <div>
              <span className="text-orange-cus">
                VNB Sports {' '}
              </span>
              Là hệ thống cửa hàng cầu lông với hơn 50 chi nhánh trên toàn quốc,
              cung cấp sỉ và lẻ các mặt hàng dụng cụ cầu lông từ phong trào tới chuyên nghiệp
            </div>
            <div>
              <span className="text-orange-cus">
                Với sứ mệnh: {' '}
              </span>
              Với sứ mệnh: ”VNB cam kết mang đến những sản phẩm, dịch vụ chất lượng tốt nhất phục vụ cho
              người chơi thể thao để nâng cao sức khỏe của chính mình”
            </div>
            <div>
              <span className="text-orange-cus">
                Tầm nhìn:  {' '}
              </span>
              ”Trở thành nhà phân phối và sản xuất thể thao lớn nhất Việt Nam ”
            </div>
          </div>
          <div className="
              lg:col-span-5
              md:col-span-6
              col-span-12
              flex 
              flex-col 
              gap-3
              transition-all 
              duration-500
            "
          >
            <h1 className="
                uppercase 
                text-base 
                font-bold
              "
            >
              Thông Tin Liên hệ
            </h1>
            <div className="whitespace-nowrap mb-3">
              <span className="font-bold">
                Hệ thống cửa hàng:  {' '}
              </span>
              <span className="text-orange-cus">
                56 cửa hàng {' '}
              </span>
              trên toàn quốc
            </div>
            <h2 className="text-orange-cus font-semibold">
              Xem tất cả các cửa hàng VNB
            </h2>
            <div className="whitespace-nowrap font-semibold">
              Hotline: {' '}
              <span className="text-orange-cus font-medium">
                0788612959 | 0788612959
              </span>
            </div>
            <div className="whitespace-nowrap font-semibold">
              Email:: {' '}
              <span className="text-orange-cus font-medium">
                info@shopvnb.com
              </span>
            </div>
            <div className="whitespace-nowrap font-semibold">
              Hợp tác kinh doanh: {' '}
              <span className="text-orange-cus font-medium">
                0947342259
              </span>
            </div>
            <div className="whitespace-nowrap font-semibold">
              Hotline bán sỉ: {' '}
              <span className="text-orange-cus font-medium">
                032.63.67.618
              </span>
            </div>
            <div className="whitespace-nowrap font-semibold">
              Nhượng quyền thương hiệu: {' '}
              <span className="text-orange-cus font-medium">
                0334.741.141
              </span>
            </div>
            <div className="whitespace-nowrap font-semibold">
              Than phiền dịch vụ: {' '}
              <span className="text-orange-cus font-medium">
                0334.741.141
              </span>
            </div>
          </div>
          <div className="
              lg:col-span-2
              md:col-span-6
              col-span-12
              flex 
              mt-5
              transition-all 
              duration-500
            "
          >
            <div className="
                relative 
                flex 
                flex-col 
                gap-5
              "
            >
              <div>
                <h1 className="font-semibold">
                  Get the App
                </h1>
              </div>
              <button className="
                  relative 
                  flex 
                  flex-row 
                  flex-shrink-0
                  bg-gray-cus-2 
                  rounded-md 
                  gap-2 
                  items-center 
                  px-2 
                  py-2
                  whitespace-nowrap
                "
              >
                <div className="flex">
                  <IoLogoGooglePlaystore size={30} />
                </div>
                <div className="
                    flex 
                    flex-col 
                    text-left
                  "
                >
                  <h2 className="uppercase text-xs">
                    get it on
                  </h2>
                  <h1 className="text-base">
                    Google Play
                  </h1>
                </div>
              </button>
              <button className="
                  relative 
                  flex 
                  flex-row 
                  flex-shrink-0
                  bg-gray-cus-2 
                  rounded-md 
                  gap-2 
                  items-center 
                  px-2 
                  py-2
                  whitespace-nowrap
                "
              >
                <div className="flex">
                  <BsApple size={30} />
                </div>
                <div className="
                    flex 
                    flex-col 
                    text-left
                  "
                >
                  <h2 className="uppercase text-xxs">
                    download on the
                  </h2>
                  <h1 className="text-base">
                    App Store
                  </h1>
                </div>
              </button>
              <div className="
                  flex 
                  flex-row 
                  mt-5 
                  gap-5
                "
              >
                <div className="
                    rounded-full 
                    bg-transparent 
                    border-2 
                    border-white 
                    p-2 
                    cursor-pointer
                  "
                >
                  <BiLogoFacebook size={34} />
                </div>
                <div className="
                    rounded-full 
                    bg-transparent
                    border-2 
                    border-white 
                    p-2 
                    cursor-pointer
                  "
                >
                  <AiFillYoutube size={34} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container >
    </div >
  )
}

export default Footer
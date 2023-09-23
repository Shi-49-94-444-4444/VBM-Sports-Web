import { IoLogoGooglePlaystore } from "react-icons/io5"
import { BsApple } from "react-icons/bs"
import { AiFillYoutube } from "react-icons/ai"
import { BiLogoFacebook } from "react-icons/bi"
import { Container } from "./providers"

const Footer = () => {
  return (
    <div className="
        bg-secondary-blue-cus 
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
              text-lg
              transition-all 
              duration-500
            "
          >
            <h1 className="
                uppercase 
                text-xl 
                font-bold
              "
            >
              Thông Tin chung
            </h1>
            <div className="space-x-1">
              <span className="font-bold">
                VNB Sports
              </span>
              <span>
                Là hệ thống cửa hàng cầu lông với hơn 50 chi nhánh trên toàn quốc,
                cung cấp sỉ và lẻ các mặt hàng dụng cụ cầu lông từ phong trào tới chuyên nghiệp
              </span>
            </div>
            <div className="space-x-1">
              <span className="font-bold">
                Với sứ mệnh:
              </span>
              <span>
                Với sứ mệnh: ”VNB cam kết mang đến những sản phẩm, dịch vụ chất lượng tốt nhất phục vụ cho
                người chơi thể thao để nâng cao sức khỏe của chính mình”
              </span>
            </div>
            <div className="space-x-1">
              <span className="font-bold">
                Tầm nhìn:
              </span>
              <span>
                "Trở thành nhà phân phối và sản xuất thể thao lớn nhất Việt Nam"
              </span>
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
              text-lg
            "
          >
            <h1 className="
                uppercase 
                text-xl
                font-bold
              "
            >
              Thông Tin Liên hệ
            </h1>
            <div className="whitespace-nowrap mb-3 space-x-1">
              <span className="font-bold">
                Hệ thống cửa hàng:
              </span>
              <span>
                56 cửa hàng trên toàn quốc
              </span>
            </div>
            <h2 className="font-bold">
              Xem tất cả các cửa hàng VNB
            </h2>
            <div className="whitespace-nowrap space-x-1">
              <span className="font-bold">
                Hotline:
              </span>
              <span className="">
                0788612959 | 0788612959
              </span>
            </div>
            <div className="whitespace-nowrap space-x-1">
              <span className="font-bold">
                Email:
              </span>
              <span className="">
                info@shopvnb.com
              </span>
            </div>
            <div className="whitespace-nowrap space-x-1">
              <span className="font-bold">
                Hợp tác kinh doanh:
              </span>
              <span className="">
                0947342259
              </span>
            </div>
            <div className="whitespace-nowrap space-x-1">
              <span className="font-bold">
                Hotline bán sỉ:
              </span>
              <span className="">
                032.63.67.618
              </span>
            </div>
            <div className="whitespace-nowrap space-x-1">
              <span className="font-bold">
                Nhượng quyền thương hiệu:
              </span>
              <span className="">
                0334.741.141
              </span>
            </div>
            <div className="whitespace-nowrap space-x-1">
              <span className="font-bold">
                Than phiền dịch vụ:
              </span>
              <span className="">
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
              <h1 className="font-semibold text-xl text-gray-300">
                Get the App
              </h1>
              <button className="
                  relative 
                  flex 
                  flex-row 
                  flex-shrink-0
                  bg-white 
                  text-secondary-blue-cus
                  rounded-md 
                  gap-2 
                  items-center 
                  px-4 
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
                  <h1 className="text-lg font-semibold">
                    Google Play
                  </h1>
                </div>
              </button>
              <button className="
                  relative 
                  flex 
                  flex-row 
                  flex-shrink-0
                  bg-white
                  text-secondary-blue-cus
                  rounded-md 
                  gap-2 
                  items-center 
                  px-4 
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
                  <h2 className="uppercase text-xs">
                    download on the
                  </h2>
                  <h1 className="text-lg font-semibold">
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
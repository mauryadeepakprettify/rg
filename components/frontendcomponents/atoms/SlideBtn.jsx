import Image from "next/image"

const SlideBtn = ({ className }) => {
    return (
        <button className={`${className} ${className.includes("prev") ? "swiper-prev" : "swiper-next"}`}>
            <Image src="/icon/right.svg" alt={className} width={16} height={16} />
        </button>
    )
}

export default SlideBtn 
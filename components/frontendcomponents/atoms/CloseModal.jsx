
const CloseModal = ({ onClick }) => {
    return (
        <button className="close" onClick={onClick}>
            <Image src="/image/icon/close.svg" alt="CloseIcon" width={40} height={40} />
        </button>
    )
}

export default CloseModal
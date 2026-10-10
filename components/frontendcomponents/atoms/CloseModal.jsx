"use client"
import { useModal } from "@/hooks/useModal";
import Image from "next/image"

const CloseModal = () => {
    const { closeModal } = useModal();
    return (
        <button className="close" onClick={closeModal}>
            <Image src="/icon/close.svg" alt="CloseIcon" width={40} height={40} />
        </button>
    )
}

export default CloseModal
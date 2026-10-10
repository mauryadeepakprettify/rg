"use client"
import { useModal } from '@/hooks/useModal';
import { useSelector } from 'react-redux'

const Overlay = () => {
    const { isModal } = useSelector((state) => state.modal)
    const { closeModal } = useModal();
    return (
        <div className={`overlay ${isModal !== null ? "is-open" : ""}`} onClick={closeModal}></div>
    )
}

export default Overlay
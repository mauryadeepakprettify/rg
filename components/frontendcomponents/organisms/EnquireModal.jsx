"use client"
import CloseModal from "../atoms/CloseModal"
import EnquireFields from "./EnquireFields"
import { useSelector } from "react-redux"

const EnquireModal = () => {
    const { isModal } = useSelector((state) => state.modal)

    console.log(isModal)

    return (
        <div className={`modal enquire-modal ${isModal === "enquire" ? "is-open" : ""}`}>
            <CloseModal />
            <div className="modal-body">
                <div className="heading">
                    <h2>Enquire Now</h2>
                    <p>Unlock Exclusive Properties & Tailored Experiences</p>
                </div>

                <EnquireFields />
            </div>
        </div>
    )
}

export default EnquireModal
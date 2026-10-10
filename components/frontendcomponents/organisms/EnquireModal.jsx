import CloseModal from "../atoms/CloseModal"
import EnquireFields from "./EnquireFields"

const EnquireModal = () => {
    return (
        <div className="modal enquire-modal">
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
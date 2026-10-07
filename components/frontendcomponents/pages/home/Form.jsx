import Button from "../../atoms/Button"
import Input from "../../atoms/Input"
import Textarea from "../../atoms/Textarea"

const Form = () => {
    return (
        <section className="home-secN border-b-secondary">
            <div className="container">
                <div className="heading">
                    <h2>Your Place Among the Stars Awaits</h2>
                </div>

                <form className="form form-grid">
                    <Input label="First Name*" name="name" id="name" type="text"  />
                    <Input label="Last Name*" name="name" id="name" type="text"  />
                    <Input label="Phone*" name="name" id="name" type="number"  />
                    <Input label="Email*" name="name" id="name" type="email"  />
                    <Textarea label="Message" name="message" id="message"  />
                    <div className="btn-container full">
                        <Button className="btn-animate">Schedule a Site Visit</Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Form
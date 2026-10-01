import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <header>
            <div className="header-wrapper">
                <Link href="/" className="logo">
                    <Image src="/logo.svg" width={149} height={106} alt="Logo" />
                </Link>

                <ul className="nav">
                    <li>

                    </li>
                    <li>
                        <button className="ham-btn">
                            {
                                Array.from({ length: 3 }).map((_, i) => (
                                    <span key={i} className={"line line-" + (i + 1)}></span>
                                ))
                            }
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
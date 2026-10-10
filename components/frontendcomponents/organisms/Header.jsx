"use client"
import Image from "next/image"
import Link from "next/link"
import Button from "../atoms/Button"
import { useEffect, useState } from "react"
import { useModal } from "@/hooks/useModal"

const Header = () => {

    const [isHeaderFixed, setIsHeaderFixed] = useState(false)

    const { openModal } = useModal();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                setIsHeaderFixed(true)
            } else {
                setIsHeaderFixed(false)
            }
        })
    }, [])

    return (
        <header className={isHeaderFixed ? "header-fixed" : ""}>
            <div className="header-wrapper">
                <Link href="/" className="logo">
                    <Image src="/logo.svg" width={149} height={106} alt="Logo" />
                </Link>

                <ul className="nav">
                    <li>
                        <Button onClick={() => openModal("enquire")} className="btn-animate"> Schedule a Site Visit </Button>
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
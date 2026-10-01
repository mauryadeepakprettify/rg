import Link from "next/link";

export default function Button({
    href,
    children,
    onClick,
    className = "",
    type = "button",
    disabled = false,
    target = "_self",
    rel = "noopener noreferrer",
}) {
    return href ? (
        <Link
            href={href}
            className={`btn ${className}`}
            target={target}
            rel={rel}
            onClick={onClick}
        >
            <span>{children}</span>
        </Link>
    ) : (
        <button
            type={type}
            onClick={onClick}
            className={`btn ${className}`}
            disabled={disabled}
        >
            <span>{children}</span>
        </button>
    );
}

import "@/public/sass/footer/footer.css"
import Button from "../atoms/Button"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
	return (
		<footer >
			<div className="bottom-nav">
				<div className="container">
					<ul>
						{
							navData.map(({ title, route }, i) => {
								return (
									<li key={i}>
										<Link href={route}>
											{title}
										</Link>
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
			<div className="upper-col">
				<div className="container">
					<div className="col-a">
						<p>
							Call Us :
							<Link href="tel:+910000000000"> +91 000 000 0000</Link>
						</p>
					</div>
					<div className="col-b">
						<ul>
							{
								socialData?.map(({ href, icon }, i) => {
									return (
										<li key={i}>
											<Link href={href}>
												<Image src={`/icon/${icon}`} width={24} height={24} alt={`${icon.split('.')[0]} icon`} />
											</Link>
										</li>
									)
								})
							}

							<li>
								<Button className="primary-border"><Image src="/icon/whatsapp-gradient.svg" width={20} height={20} alt="whatsapp" />  WhatsApp chat</Button>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="mid-col">
				<div className="container">
					<div className="col-a">
						<p>Disclaimer: Information mentioned in this website for project, RG Pleiaddes registered with Haryana Real Estate Regulatory Authority vide Reg. No. 00000000000, being constructed by RG GROUP are only representative and informative only. Information, images and visuals and/ or any information in any manner whatsoever in this document and other promotional documents are only indicative.</p>
						<p>Rera No. UPRERAPRJ415309/09/2025</p>
					</div>
					<div className="col-b">
						<figure>
							<Image src="/image/qr.png" width={79} height={79} alt="qr" />

						</figure>
						<figcaption>
							Scan for RERA
						</figcaption>
					</div>


				</div>
			</div>
			<div className="bottom-col">
				<div className="container">

					<p>Pleaddes ©  All rights reserved  | <span> Made by passion <Image src="/prettify.svg" alt="prettify" width={57} height={21} /> </span>  </p>
				</div>
			</div>
		</footer>
	)
}

export default Footer

const socialData = [
	{
		icon: "twitter.svg",
		href: "/"
	},
	{
		icon: "facebook.svg",
		href: ""
	},
	{
		icon: "instagram.svg",
		href: ""
	},
	{
		icon: "linkedin.svg",
		href: ""
	}
]

const navData = [
	{
		title: "About Pleiaddes",
		route: "/about-us"
	},
	{
		title: "Construction Updates",
		route: "/construction-update"
	},
	{
		title: "Contact Us",
		route: "/contact-us"
	},
	{
		title: "Blogs",
		route: "/blogs"
	},
	{
		title: "Terms & Conditons",
		route: "/terms-and-conditions"
	},
	{
		title: "Privacy Policy",
		route: "/privacy-policy"
	},
	{
		title: "Disclaimer",
		route: "/disclaimer"
	}
]
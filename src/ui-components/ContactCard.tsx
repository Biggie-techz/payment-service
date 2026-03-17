import { CiClock2 } from "react-icons/ci"
import { MdEmail, MdLocalPhone } from "react-icons/md"
import { Link } from "react-router-dom"

export const ContactCard = () => {

    const CardDetail = [
        {
            icon: <MdLocalPhone />,
            title: "Call Us",
            text: "090-456-606-63"
        },
        {
            icon: <MdEmail />,
            title: "Email Us",
            text: "customercare@icmaservices.com"
        },
        {
            icon: <CiClock2 />,
            title: "Open Hours",
            text: "Mon - Fri|9:00AM - 05:00PM"
        }
    ]
    return (
        <div className="max-w-6xl flex flex-col items-center mx-auto w-full px-4 md:px-6 py-5">
            <p className="text-2xl text-chart-5 font-semibold mb-5">Contact Us</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-3 w-full">
                {CardDetail.map((item, index) => (
                    <div key={index} className="flex flex-col gap-1 border-b-2 border-l-2 border-border w-full md:w-2/3 p-3">
                        {item.icon}
                        <p className="text-lg">{item.title}</p>
                        <Link to= {`${index === 1 ? `mailto:${item.text}` : ''}`} className="font-bold text-xs">{item.text}</Link>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-4 items-center mt-14">
                <img src="/img/Mastercard.webp" className="w-3/5 md:w-1/3 mx-auto" alt="" />
                <img src="/img/verve.png" className="w-3/5 md:w-1/3 mx-auto" alt="" />
                <img src="/img/visa.png" className="w-3/5 md:w-1/3 mx-auto" alt="" />
                <img src="/img/xpress.png" className="w-3/5 md:w-1/3 mx-auto" alt="" />
            </div>
        </div>
    )
}

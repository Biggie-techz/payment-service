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
        <div className="max-w-6xl flex flex-col items-center mx-auto">
            <p className="text-xl font-medium mb-5">Contact Us</p>
            <div className="grid grid-cols-3 justify-between w-full">
                {CardDetail.map((item, index) => (
                    <div key={index} className="flex flex-col gap-1 shadow-sm border-l-2 border-gray-300 w-2/3 p-3">
                        {item.icon}
                        <p className="text-sm">{item.title}</p>
                        <Link to= {`mailto:${item.text}`} className="font-bold text-xs">{item.text}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

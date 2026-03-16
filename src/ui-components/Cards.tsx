import { FaArrowRightLong } from "react-icons/fa6";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { useState } from "react";
import { Separator } from "./Separator";
import { Button } from "@/components/ui/button";
import { ChevronRight, Search } from "lucide-react";

export const Cards = () => {
    const [payerIdDialog, setPayerIdDialog] = useState('')
    const [paymentIdDialog, setPaymentIdDialog] = useState('')

    const [inputValue, setInputValue] = useState('')

    const payerId = "/img/payer-id.jpg"
    const payerName = "/img/payer-name.jpg"
    const paymentCode = "/img/payment-code.jpg"

    const CardDetails = [
        {
            icon: payerId,
            title: "PAYER ID",
            desc: "(PAYE, WHT, Back Duty only)",
            dialogHeader: "Enter S-TIN to contiue",
        },
        {
            icon: paymentCode,
            title: "ASSESSMENT or PAYMENT CODE",
            desc: "(Assessment-Based Payments Only)",
            dialogHeader: "Input Assessment or Payment Code to Continue"
        },
        {
            icon: payerName,
            title: "PAYER NAME",
            desc: "(Other Payments)",
            dialogHeader: "Please read the following instructions carefully"
        },
    ]
    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10 w-full">
                {CardDetails.map((item, index) => (
                    <div key={index} className="group relative bg-white/10 backdrop-blur-sm shadow-xl rounded-xl h-60 w-full border border-white/20 overflow-hidden transition-all duration-300 hover:scale-[102%]">
                        <img src={item.icon} alt={`Illustration of ${item.title.toLowerCase()}`} className="h-full w-full object-cover rounded-xl scale-110 group-hover:scale-100 transition-transform duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 via-black/70 to-transparent/0 backdrop-blur-sm h-2/5 group-hover:h-4/5 transition-all duration-500 flex flex-col items-center justify-center gap-1 p-6 pt-12 rounded-b-xl">
                            <p className="text-sm font-bold font-serif text-white drop-shadow-md text-center tracking-wide">{item.title}</p>
                            <p className="text-xs font-medium font-serif text-white/90 drop-shadow-sm text-center">{item.desc}</p>
                            <Dialog>
                                <DialogTrigger>
                                    <button className="cursor-pointer px-3 py-1 rounded-full text-sm font-semibold text-white flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg group-hover:animate-pulse"><span>Click here</span> <FaArrowRightLong /></button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>{item.dialogHeader}</DialogTitle>
                                    </DialogHeader>
                                    <Separator />
                                    {index !== 2 ?
                                        <div className="w-full flex gap-2">
                                            <input
                                                className="p-2 w-full outline outline-green-900 rounded-sm"
                                                placeholder="Enter value to search"
                                                value={inputValue}
                                                onChange={e => setInputValue(e.target.value)}
                                            />
                                            <Button className="flex items-center gap-2">
                                                Search
                                                <Search />
                                            </Button>
                                        </div>
                                        : 
                                        <div className="flex flex-col items-center gap-2">
                                            <p className="flex items-center text-xs">If you <span className="text-green-500 font-bold mx-1">HAVE</span> S-TIN, kindly click on <ChevronRight /> <Button className="text-sm">Continue with S-TIN</Button> </p>
                                            <p className="text-xs">If you <span className="text-red-500 font-bold mx-1">DO NOT HAVE</span> S-TIN, kindly click on <ChevronRight /> <Button variant={"destructive"} className="text-sm">Continue without S-TIN</Button> </p>
                                        </div>
                                        }
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                ))}


            </div>
            {/* CTA */}
            <button className="cursor-pointer text-white bg-emerald-900 hover:bg-emerald-800 px-8 py-3 rounded-xl mx-auto mt-12 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">Check Payment Status</button>
        </div>
    )
}

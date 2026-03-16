import { FaArrowRightLong } from "react-icons/fa6";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { useState } from "react";
import { Separator } from "./Separator";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronsRight, Search } from "lucide-react";

export const Cards = () => {
    // const [payerIdDialog, setPayerIdDialog] = useState('')
    // const [paymentIdDialog, setPaymentIdDialog] = useState('')

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
            function: () => {
                console.log(`Payer ID function executed ${inputValue}`)
            }
        },
        {
            icon: paymentCode,
            title: "ASSESSMENT or PAYMENT CODE",
            desc: "(Assessment-Based Payments Only)",
            dialogHeader: "Input Assessment or Payment Code to Continue",
            function: () => {
                console.log(`Payment code function executed ${inputValue}`)
            }
        },
        {
            icon: payerName,
            title: "PAYER NAME",
            desc: "(Other Payments)",
            dialogHeader: "Please read the following instructions carefully",
            // function: () => {
            //     console.log(`Payer name function executed ${inputValue}`)
            // },
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
                                    <button className="cursor-pointer px-3 py-1 rounded-full text-sm font-semibold text-white flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg group-hover:animate-pulse"><span className="opacity-0 group-hover:opacity-100 transition-all duration-500">Click here</span> <FaArrowRightLong className="-rotate-90 group-hover:rotate-0 transition-all duration-500 absolute left-1/2 group-hover:left-[61%] -translate-x-1/2 group-hover:translate-0" /></button>
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
                                            <Button className="flex items-center gap-2"
                                                onClick={item.function}>
                                                Search
                                                <Search />
                                            </Button>
                                        </div>
                                        :
                                        <div className="flex flex-col items-center gap-2">
                                            <p className="flex items-center text-xs">If you <span className="text-green-500 font-bold mx-1">HAVE</span> S-TIN, kindly click on <ChevronsRight size={18} />
                                                <Dialog>
                                                    <DialogTrigger>
                                                        {/* <button className="cursor-pointer px-3 py-1 rounded-full text-sm font-semibold text-white flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg group-hover:animate-pulse"><span>Click here</span> <FaArrowRightLong /></button> */}
                                                        <Button size={"xs"} className="cursor-pointer" >Continue with S-TIN</Button>
                                                    </DialogTrigger>
                                                    <DialogContent>
                                                        <DialogHeader>
                                                            <DialogTitle>Supply S-TIN to continue</DialogTitle>
                                                        </DialogHeader>

                                                        <Separator />

                                                        <div className="w-full flex gap-2">
                                                            <input
                                                                className="p-2 w-full outline outline-green-900 rounded-sm"
                                                                placeholder="Enter value to search"
                                                                value={inputValue}
                                                                onChange={e => setInputValue(e.target.value)}
                                                            />
                                                            <Button className="flex items-center gap-2"
                                                                onClick={item.function}>
                                                                Search
                                                                <Search />
                                                            </Button>
                                                        </div>
                                                    </DialogContent>
                                                </Dialog>
                                            </p>
                                            <p className="flex text-nowrap items-center text-xs">If you <span className="text-red-500 font-bold mx-1">DO NOT HAVE</span> S-TIN, kindly click on <ChevronsRight size={18} /> <Button variant={"destructive"} size={"xs"} className="cursor-pointer   ">Continue without S-TIN</Button> </p>
                                        </div>
                                    }
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                ))}


            </div>
            {/* CTA */}
            <Dialog>
                <DialogTrigger>
                    <button className="cursor-pointer text-white bg-emerald-900 hover:bg-emerald-800 px-8 py-3 rounded-xl mx-auto mt-12 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">Check Payment Status</button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Enter Transaction Ref Number</DialogTitle>
                        <DialogDescription className="text-destructive">Check your email for your transaction reference number</DialogDescription>
                    </DialogHeader>
                    <Separator />
                    <div className="w-full flex gap-2">
                        <input
                            className="p-2 w-full outline outline-green-900 rounded-sm"
                            placeholder="Enter Transaction Ref Number"
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                        />
                    </div>
                    <Separator />
                    <DialogFooter>
                        <Button className="flex items-center gap-2">
                            Query
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

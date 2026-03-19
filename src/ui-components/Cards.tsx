import { FaArrowRightLong } from 'react-icons/fa6';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import { useState } from 'react';
import { Separator } from './Separator';
import { Button } from '@/components/ui/button';
import { ChevronsDown, Search } from 'lucide-react';


export const Cards = () => {
  // const [payerIdDialog, setPayerIdDialog] = useState('')
  // const [paymentIdDialog, setPaymentIdDialog] = useState('')

  const [inputValue, setInputValue] = useState('');

  const payerId = '/img/payer-id.jpg';
  const payerName = '/img/payer-name.jpg';
  const paymentCode = '/img/payment-code.jpg';

  const CardDetails = [
    {
      icon: payerId,
      title: 'PAYER ID',
      desc: '(PAYE, WHT, Back Duty only)',
      dialogHeader: 'Enter S-TIN to contiue',
      function: () => {
        console.log(`Payer ID function executed ${inputValue}`);
      },
    },
    {
      icon: paymentCode,
      title: 'ASSESSMENT or PAYMENT CODE',
      desc: '(Assessment-Based Payments Only)',
      dialogHeader: 'Input Assessment or Payment Code to Continue',
      function: () => {
        console.log(`Payment code function executed ${inputValue}`);
      },
    },
    {
      icon: payerName,
      title: 'PAYER NAME',
      desc: '(Other Payments)',
      dialogHeader: 'Please read the following instructions carefully',
      // function: () => {
      //     console.log(`Payer name function executed ${inputValue}`)
      // },
    },
  ];
  return (
    <div className="flex flex-col items-center bg-background">
      <p className="font-bold text-2xl text-chart-5 block lg:hidden mt-10">
        Revenue Payments Made Easy
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-10 w-full px-4 md:px-6">
        {CardDetails.map((item, index) => (
          <div className="group relative bg-white/10 backdrop-blur-sm shadow-xl rounded-xl h-52 w-full border border-white/20 overflow-hidden transition-all duration-300 hover:scale-[102%]">
            <img
              src={item.icon}
              alt={`Illustration of ${item.title.toLowerCase()}`}
              className="h-full w-full object-cover rounded-xl scale-110 group-hover:scale-100 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 via-black/70 to-transparent/0 backdrop-blur-sm h-3/5 xl:h-1/2 group-hover:h-4/5 transition-all duration-500 flex flex-col items-center justify-center gap-1 p-6 pt-12 rounded-b-xl">
              <p className="text-lg lg:text-base font-bold font-sans text-white drop-shadow-md text-center tracking-wide">
                {item.title}
              </p>
              <p className="text-sm lg:text-xs font-medium font-sans text-white/90 drop-shadow-sm text-center">
                {item.desc}
              </p>
              <Dialog>
                <DialogTrigger>
                  <button className="cursor-pointer px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-2 transition-all duration-300 hover:text-[13px] shadow-lg group-hover:animate-pulse">
                    <span className="opacity-100 xl:opacity-0 group-hover:opacity-100 transition-all duration-500 text-sm">
                      Click here
                    </span>
                    <FaArrowRightLong
                      size={12}
                      className="rotate-0 xl:-rotate-90 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 absolute left-[62%] lg:left-[65%] xl:left-1/2 group-hover:left-[62%] -translate-x-1/2 group-hover:translate-0"
                    />
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-sm lg:text-base">
                      {item.dialogHeader}
                    </DialogTitle>
                  </DialogHeader>
                  <Separator />
                  {index !== 2 ? (
                    <div className="w-full flex gap-2">
                      <input
                        className="p-2 w-full outline outline-green-900 rounded-sm"
                        placeholder="Enter value to search"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                      />
                      <Button
                        className="flex items-center gap-2"
                        onClick={item.function}
                      >
                        Search
                        <Search />
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-5">
                      <p className="flex flex-col items-center text-xs">
                        <div>
                          If you{' '}
                          <span className="text-green-500 font-bold mx-1">
                            HAVE
                          </span>{' '}
                          S-TIN, kindly click on{' '}
                        </div>
                        <ChevronsDown size={18} />
                        <Dialog>
                          <DialogTrigger>
                            <Button className="cursor-pointer">
                              Continue with S-TIN
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>
                                Supply S-TIN to continue
                              </DialogTitle>
                            </DialogHeader>

                            <Separator />

                            <div className="w-full flex gap-2">
                              <input
                                className="p-2 w-full outline outline-green-900 rounded-sm"
                                placeholder="Enter value to search"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                              />
                              <Button
                                className="flex items-center gap-2"
                                onClick={item.function}
                              >
                                Search
                                <Search />
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </p>
                      <Separator />
                      <p className="flex flex-col text-nowrap items-center text-xs">
                        <div>
                          If you{' '}
                          <span className="text-red-500 font-bold mx-1">
                            DO NOT HAVE
                          </span>{' '}
                          S-TIN, kindly click on
                        </div>{' '}
                        <ChevronsDown size={18} />{' '}
                        <Button
                          variant={'destructive'}
                          className="cursor-pointer   "
                        >
                          Continue without S-TIN
                        </Button>{' '}
                      </p>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
      {/* CTA */}
      <Dialog>
        <DialogTrigger>
          <div className="cursor-pointer text-white bg-emerald-900 hover:bg-emerald-800 px-8 py-3 rounded-xl mx-auto mt-12 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Check Payment Status
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter Transaction Ref Number</DialogTitle>
            <DialogDescription className="text-destructive">
              Check your email for your transaction reference number
            </DialogDescription>
          </DialogHeader>
          <Separator />
          <div className="w-full flex gap-2">
            <input
              className="p-2 w-full outline outline-green-900 rounded-sm"
              placeholder="Enter Transaction Ref Number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <Separator />
          <DialogFooter>
            <Button className="flex items-center gap-2">Query</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

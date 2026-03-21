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
import { useState, useEffect } from 'react';
import { Separator } from './Separator';
import { Button } from '@/components/ui/button';
import { ChevronsDown, Eye, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const Cards = () => {
  // const [payerIdDialog, setPayerIdDialog] = useState('')
  // const [paymentIdDialog, setPaymentIdDialog] = useState('')

  const [inputValue, setInputValue] = useState('');
  const [countryValue, setCountryValue] = useState('ng');
  const [stateValue, setStateValue] = useState('');

  const [countries, setCountries] = useState<
    { name: { common: string }; cca2: string }[]
  >([]);
  const [nigeriaStates, setNigeriaStates] = useState<
    { name: string; state_code: string }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const payerId = '/img/payer-id.jpg';
  const payerName = '/img/payer-name.jpg';
  const paymentCode = '/img/payment-code.jpg';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const countriesRes = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,cca2'
        );
        const countriesData = await countriesRes.json();
        setCountries(countriesData);

        // Fallback Nigeria states since API 404
        const fallbackStates = [
          { name: "Abia", state_code: "AB" },
          { name: "Adamawa", state_code: "AD" },
          { name: "Akwa Ibom", state_code: "AK" },
          { name: "Anambra", state_code: "AN" },
          { name: "Bauchi", state_code: "BA" },
          { name: "Bayelsa", state_code: "BY" },
          { name: "Benue", state_code: "BE" },
          { name: "Borno", state_code: "BO" },
          { name: "Cross River", state_code: "CR" },
          { name: "Delta", state_code: "DE" },
          { name: "Ebonyi", state_code: "EB" },
          { name: "Edo", state_code: "ED" },
          { name: "Ekiti", state_code: "EK" },
          { name: "Enugu", state_code: "EN" },
          { name: "FCT - Abuja", state_code: "FC" },
          { name: "Gombe", state_code: "GO" },
          { name: "Imo", state_code: "IM" },
          { name: "Jigawa", state_code: "JI" },
          { name: "Kaduna", state_code: "KA" },
          { name: "Kano", state_code: "KN" },
          { name: "Katsina", state_code: "KT" },
          { name: "Kebbi", state_code: "KE" },
          { name: "Kogi", state_code: "KO" },
          { name: "Kwara", state_code: "KW" },
          { name: "Lagos", state_code: "LA" },
          { name: "Nassarawa", state_code: "NA" },
          { name: "Niger", state_code: "NI" },
          { name: "Ogun", state_code: "OG" },
          { name: "Ondo", state_code: "ON" },
          { name: "Osun", state_code: "OS" },
          { name: "Oyo", state_code: "OY" },
          { name: "Plateau", state_code: "PL" },
          { name: "Rivers", state_code: "RI" },
          { name: "Sokoto", state_code: "SO" },
          { name: "Taraba", state_code: "TA" },
          { name: "Yobe", state_code: "YO" },
          { name: "Zamfara", state_code: "ZA" },
        ];
        setNigeriaStates(fallbackStates);
      } catch (err) {
        setError('Failed to load data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (countryValue !== 'ng') {
      setStateValue('');
    }
  }, [countryValue]);

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
      <p className="mt-10 block text-2xl font-bold text-chart-5 lg:hidden">
        Revenue Payments Made Easy
      </p>
      <div className="mx-auto mt-10 grid w-full max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:px-6 lg:grid-cols-3">
        {CardDetails.map((item, index) => (
          <div className="group relative h-52 w-full overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[102%]">
            <img
              src={item.icon}
              alt={`Illustration of ${item.title.toLowerCase()}`}
              className="h-full w-full scale-110 rounded-xl object-cover transition-transform duration-500 group-hover:scale-100"
            />
            <div className="absolute right-0 bottom-0 left-0 flex h-3/5 flex-col items-center justify-center gap-1 rounded-b-xl bg-linear-to-t from-black/90 via-black/70 to-transparent/0 p-6 pt-12 backdrop-blur-sm transition-all duration-500 group-hover:h-4/5 xl:h-1/2">
              <p className="text-center font-sans text-lg font-bold tracking-wide text-white drop-shadow-md lg:text-base">
                {item.title}
              </p>
              <p className="text-center font-sans text-sm font-medium text-white/90 drop-shadow-sm lg:text-xs">
                {item.desc}
              </p>
              <Dialog>
                <DialogTrigger>
                  <button className="flex cursor-pointer items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg transition-all duration-300 group-hover:animate-pulse hover:text-[13px]">
                    <span className="text-sm opacity-100 transition-all duration-500 group-hover:opacity-100 xl:opacity-0">
                      Click here
                    </span>
                    <FaArrowRightLong
                      size={12}
                      className="absolute left-[62%] -translate-x-1/2 rotate-0 transition-all duration-500 group-hover:left-[62%] group-hover:translate-0 group-hover:scale-110 group-hover:rotate-0 lg:left-[65%] xl:left-1/2 xl:-rotate-90"
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
                    <div className="flex w-full gap-2">
                      <input
                        className="w-full rounded-sm p-2 outline outline-green-900"
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
                          <span className="mx-1 font-bold text-green-500">
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
                          <DialogContent className="max-w-lg">
                            <DialogHeader>
                              <DialogTitle>
                                Supply S-TIN to continue
                              </DialogTitle>
                            </DialogHeader>

                            <Separator />

                            <div className="flex w-full gap-2">
                              <input
                                className="w-full rounded-sm p-2 outline outline-green-900"
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
                      <p className="flex flex-col items-center text-xs text-nowrap">
                        <div>
                          If you{' '}
                          <span className="mx-1 font-bold text-red-500">
                            DO NOT HAVE
                          </span>{' '}
                          S-TIN, kindly click on
                        </div>{' '}
                        <ChevronsDown size={18} />{' '}
                        <Dialog>
                          <DialogTrigger>
                            <Button
                              variant={'destructive'}
                              className="cursor-pointer"
                            >
                              Continue without S-TIN
                            </Button>{' '}
                          </DialogTrigger>
                          <DialogContent className="min-w-3xl">
                            <DialogHeader>
                              <DialogTitle>
                                Please provide the details below for your
                                Receipt
                              </DialogTitle>
                            </DialogHeader>
                            <Separator />
                            <form
                              action=""
                              className="flex flex-col items-start gap-3"
                            >
                              <h1 className="text-xl font-medium">
                                Payment Information
                              </h1>
                              <div className="w-full flex items-center gap-2">
                                <label htmlFor="" className="text-nowrap w-2/5">
                                  Surname or Company name{' '}
                                  <span className="text-red-500">*</span> :
                                </label>
                                <Input type="text" className="rounded-sm" />
                              </div>
                              <div className="w-full flex items-center gap-2">
                                <label htmlFor="" className="text-nowrap w-2/5">
                                  Other Names :
                                </label>
                                <Input type="text" className="rounded-sm" />
                              </div>
                              <div className="w-full flex items-center gap-2">
                                <label htmlFor="" className="text-nowrap w-2/5">
                                  Agency <span className="text-red-500">*</span>{' '}
                                  :
                                </label>
                                <Select>
                                  <SelectTrigger className="w-full rounded-sm">
                                    <SelectValue placeholder="Click to Select AGENCY" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>AGENCY</SelectLabel>
                                      <SelectItem value="apple">
                                        Agency-1
                                      </SelectItem>
                                      <SelectItem value="banana">
                                        Agency-2
                                      </SelectItem>
                                      <SelectItem value="blueberry">
                                        Agency-3
                                      </SelectItem>
                                      <SelectItem value="grapes">
                                        Agency-4
                                      </SelectItem>
                                      <SelectItem value="pineapple">
                                        Agency-5
                                      </SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="w-full flex items-center gap-2">
                                <label htmlFor="" className="text-nowrap w-2/5">
                                  Revenue{' '}
                                  <span className="text-red-500">*</span> :
                                </label>
                                <Input type="text" className="rounded-sm" />
                              </div>
                              <div className="w-full flex items-center gap-2">
                                <label htmlFor="" className="text-nowrap w-2/5">
                                  Enter Amount to be paid (₦){' '}
                                  <span className="text-red-500">*</span> :
                                </label>
                                <Input type="text" className="rounded-sm" />
                              </div>
                              <div className="w-full flex items-center gap-2">
                                <label htmlFor="" className="text-nowrap w-2/5">
                                  Payment Period :
                                </label>
                                <Input type="text" className="rounded-sm" />
                              </div>

                              <Separator />

                              <h1 className="text-xl font-medium">
                                Other Information
                              </h1>
                              <div className="w-full flex items-center gap-2">
                                <label htmlFor="" className="text-nowrap w-2/5">
                                  Street No and Name{' '}
                                  <span className="text-red-500">*</span> :
                                </label>
                                <Input type="text" className="rounded-sm" />
                              </div>
                              <div className="w-full flex items-center gap-2">
                                <label htmlFor="" className="text-nowrap w-2/5">
                                  Country{' '}
                                  <span className="text-red-500">*</span> :
                                </label>
                                <Select
                                  value={countryValue}
                                  onValueChange={(value) =>
                                    setCountryValue(value)
                                  }
                                >
                                  <SelectTrigger className="w-full rounded-sm">
                                    <SelectValue
                                      placeholder={
                                        loading
                                          ? 'Loading countries...'
                                          : 'Click to Select COUNTRY'
                                      }
                                    />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>COUNTRY</SelectLabel>
                                      {countries.map((country) => (
                                        <SelectItem
                                          key={country.cca2}
                                          value={country.cca2.toLowerCase()}
                                        >
                                          {country.name.common}
                                        </SelectItem>
                                      ))}
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="w-full flex items-center gap-2">
                                <label htmlFor="" className="text-nowrap w-2/5">
                                  State <span className="text-red-500">*</span>{' '}
                                  :
                                </label>
                                <Select
                                  value={stateValue}
                                  onValueChange={(value) =>
                                    setStateValue(value)
                                  }
                                  disabled={countryValue !== 'ng'}
                                >
                                  <SelectTrigger className="w-full rounded-sm">
                                    <SelectValue
                                      placeholder={
                                        loading
                                          ? 'Loading states...'
                                          : countryValue === 'ng'
                                            ? 'Click to Select STATE'
                                            : 'Select Nigeria for states'
                                      }
                                    />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>STATE</SelectLabel>
                                      {countryValue === 'ng' &&
                                        nigeriaStates.map((state) => (
                                          <SelectItem
                                            key={state.state_code}
                                            value={state.state_code.toLowerCase()}
                                          >
                                            {state.name}
                                          </SelectItem>
                                        ))}
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="w-full flex items-center gap-2">
                                <label htmlFor="" className="text-nowrap w-2/5">
                                  City <span className="text-red-500">*</span> :
                                </label>
                                <Input type="text" className="rounded-sm" />
                              </div>
                              <div className="w-full flex items-center gap-2">
                                <label htmlFor="" className="text-nowrap w-2/5">
                                  LGA <span className="text-red-500">*</span> :
                                </label>
                                <Select>
                                  <SelectTrigger className="w-full rounded-sm">
                                    <SelectValue placeholder="Click to Select LGA" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>LGA</SelectLabel>
                                      <SelectItem value="lga-1">
                                        LGA-1
                                      </SelectItem>
                                      <SelectItem value="lga-2">
                                        LGA-2
                                      </SelectItem>
                                      <SelectItem value="lga-3">
                                        LGA-3
                                      </SelectItem>
                                      <SelectItem value="lga-4">
                                        LGA-4
                                      </SelectItem>
                                      <SelectItem value="lga-5">
                                        LGA-5
                                      </SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="w-full flex items-center gap-2">
                                <label htmlFor="" className="text-nowrap w-2/5">
                                  Telephone{' '}
                                  <span className="text-red-500">*</span> :
                                </label>
                                <Input type="text" className="rounded-sm" />
                              </div>
                              <div className="w-full flex items-center gap-2">
                                <label htmlFor="" className="text-nowrap w-2/5">
                                  Email <span className="text-red-500">*</span>{' '}
                                  :
                                </label>
                                <Input type="text" className="rounded-sm" />
                              </div>
                            </form>
                            <Separator />
                            <DialogFooter>
                              <Button className="flex items-center gap-2">
                                <Eye size={18} />
                                Review Entries
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
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
          <div className="mx-auto mt-12 transform cursor-pointer rounded-xl bg-emerald-900 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-emerald-800 hover:shadow-xl">
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
          <div className="flex w-full gap-2">
            <input
              className="w-full rounded-sm p-2 outline outline-green-900"
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

export const Navbar = () => {
  const logo = "/public/favicon/StateLogo.png"
  return (
    <nav className="p-4 md:px-6 bg-background/90">
      <div className="container mx-auto flex items-center justify-between max-w-6xl">
        <img src={logo} alt="" className="w-36" />
        <p className="font-bold text-sm lg:text-2xl text-blue-900 hidden lg:block">Revenue Payments Made Easy</p>
        <button className="bg-emerald-800 text-white p-2 rounded-md cursor-pointer">Self-Service</button>
      </div>
    </nav>
  )
}



export default function Navbar(){
  const menuItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact']
  const name = "Himaja"
  return(
    <div className="my-4 flex justify-around gap-x-4">
      <div className="text-white text-6xl">{name.toUpperCase()}</div>
      <div className="flex gap-x-16 items-center ">
        {menuItems.map((item:string) => {return(
          <div className="">{item}</div>
        )})}
      </div>
    </div>
  )
}
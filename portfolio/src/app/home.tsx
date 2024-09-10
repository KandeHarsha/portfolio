
export default function HomePage(){
  const name = "Kande Himaja"
  const specilazation = "Data Analyst & Salesforce"
  return(
    <div className="ml-20 flex h-[80vh] items-center justify-start">
      <div className="flex flex-col gap-y-4">
        <div className="text-3xl">{specilazation}</div>
        <div className="text-7xl">Hi, I'm <span className="text-[#ff004f]">{name}</span></div>
      </div>
    </div>
  )
}
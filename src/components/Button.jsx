const Button = ({ label, iconURL }) => {
  return (
    <button type="button" className="flex items-center justify-center gap-2 px-7 py-4 border border-coral-red font-montserrat text-lg leading-none bg-coral-red rounded-full text-white">
        {label}
        <img src={iconURL} alt={label} className="ml-2 rounded-full w-5 h-5"/>
    </button>
  )
}

export default Button
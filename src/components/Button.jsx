const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button type="button" 
    className={`flex items-center justify-center gap-2 px-7 py-4 
    border font-montserrat text-lg leading-none rounded-full
    ${backgroundColor 
      ? `${backgroundColor} ${textColor} ${borderColor}` 
    :
    "bg-coral-red text-white border-coral-red"}

    ${
      fullWidth && "w-full"
    }
    `}
    
    >
        {label}
        {
          iconURL && <img src={iconURL} alt={label} className="ml-2 rounded-full w-5 h-5"/>
        }
    </button>
  )
}

export default Button
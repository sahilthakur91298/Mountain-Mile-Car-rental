
const Button = ({
    children,
    type="button",
    onClick,
    className=""
}) => {
  return (
    <button 
        type = {type}
        onClick = {onClick}
        className = {`px-4 py-2 bg-blue-500 text-white rounded cursor-pointer ${className}`}>
            {children}
        </button>
  )
}

export default Button

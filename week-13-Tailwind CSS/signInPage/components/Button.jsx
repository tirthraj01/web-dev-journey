export const Button = ({
  disabled,
  children,
  onClick,
  variant // sm, lg
}) => {

  // clsx, cx

  return (
    <span
      onClick={onClick}
      className={`rounded-2xl text-4xl px-25 py-4 text-white 
        cursor-pointer ${disabled ? "bg-blue-200" : "bg-green-400"
      }`}
    >
      {children}
    </span>
  )
}

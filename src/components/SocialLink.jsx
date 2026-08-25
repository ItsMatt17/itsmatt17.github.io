function SocialButton({
  onClick = (_) => {},
  href = "",
  icon = "",
  name = "",
  children,
}) {
  return (
    <a
      href={href}
      className="group relative flex items-center gap-x-2 rounded-md bg-neutral-200 p-2 px-4 transition duration-100 ease-in-out hover:-translate-y-1 hover:bg-neutral-400"
      onClick={(e) => onClick(e)}
      ng-href={name}
    >
      <div className="max-w-10">
        <img className="h-auto w-full object-cover" src={icon} />
      </div>
      <p>{name}</p>
      {children}
    </a>
  )
}

export default SocialButton

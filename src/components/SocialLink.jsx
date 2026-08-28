function SocialButton({
  onClick = (_) => { },
  href = "",
  icon = "",
  name = "",
  target = "_blank",
  children,
}) {
  return (
    <a
      href={href}
      target={target}
      tabIndex={0}
      rel="noopener"
      className="group relative flex items-center gap-x-2 rounded-md bg-neutral-200 p-2 px-4 transition duration-100 ease-in-out focus:bg-neutral-400 focus:-translate-y-1 hover:-translate-y-1 active:bg-neutral-400 hover:bg-neutral-400"
      onClick={(e) => onClick(e)}
      ng-href={name}
    >
      <div className="max-h-10 max-w-10">
        <img className="h-auto w-full object-cover" src={icon} alt={`Logo for ${name}.`} />
      </div>
      <p>{name}</p>
      {children}
    </a>
  )
}

export default SocialButton

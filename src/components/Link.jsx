function Link({ name, icon, url }) {
  return (
    <a
      href={url}
      className="flex flex-col items-center gap-2 rounded bg-neutral-50 p-2 px-4"
    >
      <div className="max-w-10 overflow-hidden">
        <img src={icon} className="h-auto w-full object-cover" />
      </div>
      <p>{name}</p>
    </a>
  )
}

export default Link

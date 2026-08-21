function Links({ data }) {
  if (!data?.length) return <p>Could not fetch links :(</p>

  return (
    <div className="flex flex-col gap-y-1">
      {data.map((link) => (
        <a
          key={link.name}
          href={link.url}
          className="flex items-center gap-x-2 rounded-md bg-neutral-200 p-2 px-4"
        >
          <div className="max-w-10">
            <img className="h-auto w-full object-contain" src={link.icon} />
          </div>
          <p>{link.name}</p>
        </a>
      ))}
    </div>
  )
}

export default Links

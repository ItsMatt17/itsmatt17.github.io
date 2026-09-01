import { useState } from "react"
import Logo from './Logo'

function SocialCopy({ icon, name, copy }) {
  const [copied, setCopied] = useState(false)

  const onClick = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(copy)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div
      tabIndex={0}
      onClick={(e) => onClick(e)}
      className="group relative flex cursor-pointer items-center gap-x-2 rounded-md bg-neutral-200 p-2 px-4 transition duration-100 ease-in-out hover:-translate-y-1 hover:bg-neutral-400 focus:-translate-y-1 focus:bg-neutral-400 active:bg-neutral-400"
    >

      <Logo name={name} icon={icon} />
      <p>{name}</p>
      <div className="opactiy-0 invisible absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 transform rounded bg-gray-700 px-2 py-1 text-sm text-white opacity-0 shadow-lg group-focus:opacity-100 group-focus:visible group-hover:opacity-100 group-hover:visible">
        {copied ? "Copied!" : "Click to Copy!"}
      </div>
    </div>
  )
}

export default SocialCopy

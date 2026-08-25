import SocialLink from "./SocialLink.jsx"

import { useState } from "react"

function SocialCopy({ icon, name, copy }) {
  const [copied, setCopied] = useState(false)

  return (
    <SocialLink
      onClick={(e) => {
        e.preventDefault()
        navigator.clipboard.writeText(copy)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      }}
      title="Click Here"
      icon={icon}
      name={name}
    >
      <div className="opactiy-0 invisible absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 transform rounded bg-gray-700 px-2 py-1 text-sm text-white opacity-0 shadow-lg group-hover:opacity-100 group-hover:visible">
        {copied ? "Copied!" : "Click to Copy!"}
      </div>
    </SocialLink>
  )
}

export default SocialCopy

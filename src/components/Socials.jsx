import SocialLink from "./SocialLink.jsx"
import SocialCopy from "./SocialCopy.jsx"

function Socials({ data }) {
  console.log(data)
  if (!data || Object.keys(data).length == 0)
    return <p>Could not fetch links :(</p>

  return (
    <div className="flex flex-col gap-y-2">
      {data.links.map((link) => (
        <SocialLink href={link.url} icon={link.icon} name={link.name} />
      ))}
      {data.copy.map((copy) => (
        <SocialCopy icon={copy.icon} name={copy.name} copy={copy.copy} />
      ))}
    </div>
  )
}

export default Socials 

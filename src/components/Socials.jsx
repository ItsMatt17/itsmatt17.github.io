import SocialLink from "./SocialLink.jsx"
import SocialCopy from "./SocialCopy.jsx"

function Socials({ data }) {
  console.log(data)
  if (!data || Object.keys(data).length == 0)
    return <p>Could not fetch links :(</p>

  return (
    <ul className="flex flex-col gap-y-2">
      {data.map((social) => (
        <li >
          {
            social.isLink
              ? <SocialLink key={social.name} href={social.url} icon={social.icon} name={social.name} />
              : <SocialCopy key={social.name} icon={social.icon} name={social.name} copy={social.copy} />
          }

        </li>

      ))
      }
    </ul >
  )
}

export default Socials 

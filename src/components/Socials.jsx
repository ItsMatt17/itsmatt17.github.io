import SocialLink from './SocialLink.jsx'
import SocialCopy from './SocialCopy.jsx'

function Socials({ data }) {
  if (!data || Object.keys(data).length == 0)
    return <p>Could not fetch links :(</p>

  return (
    <ul className='flex flex-col gap-y-2'>
      {data.map((social) => (
        <li key={social.name} >
          {social.isLink ? (
            <SocialLink
              href={social.url}
              icon={social.icon}
              name={social.name}
            />
          ) : (
            <SocialCopy
              icon={social.icon}
              name={social.name}
              copy={social.copy}
            />
          )}
        </li>
      ))}
    </ul>
  )
}

export default Socials

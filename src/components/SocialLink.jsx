import Logo from './Logo'

function SocialLink({ href, icon, name }) {
  return (
    <a
      href={href}
      target="_blank"
      tabIndex={0}
      rel="noopener"
      className="group relative flex items-center gap-x-2 rounded-md bg-neutral-200 p-2 px-4 transition duration-100 ease-in-out hover:-translate-y-1 hover:bg-neutral-400 focus:-translate-y-1 focus:bg-neutral-400 active:bg-neutral-400"
      ng-href={name}
    >
      <Logo name={name} icon={icon} />
      <p>{name}</p>
    </a>
  )
}

export default SocialLink

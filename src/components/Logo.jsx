function Logo({ name, icon }) {
  return (
    <div className='max-h-10 max-w-10'>
      <img
        className='h-auto w-full object-cover'
        src={icon}
        alt={`Logo for ${name}.`}
      />
    </div>

  )
}

export default Logo

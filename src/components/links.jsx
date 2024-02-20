const links = () => {

const items = [
    "Homepage",
    "Services",
    "Contact",
    "About"
]

  return (
    <div className="links">
      {items.map(items => (
        <a href={`${item}`} key={item}>{item}</a>
      ))}
    </div>
  )
}

export default links

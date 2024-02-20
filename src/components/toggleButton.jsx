const toggleButton = ({setOpen}) => {
  return (
    <div>
      <button onClick={() => setOpen((prev) => !prev)}>
        Button
      </button>
    </div>
  )
}

export default toggleButton

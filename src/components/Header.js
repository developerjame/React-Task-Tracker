
const Header = ({title}) => {
  return (
    <header>
      <h1 style={headingStyle}>{title}</h1>
    </header>
  )
}
Header.defaultProps = {
    title: 'Hello World'
}

const headingStyle = {
  color: "lightblue"
}

export default Header

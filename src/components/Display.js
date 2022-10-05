import PropTypes from "prop-types"

function Display({children}) {
  return (
    <section>
      {children}
    </section>
  )
}

Display.propTypes = {
  children: PropTypes.node,
}

export default Display

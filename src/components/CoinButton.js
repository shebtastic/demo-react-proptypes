import PropTypes from "prop-types"

function CoinButton({onClick, value}) {
  return (
    <button onClick={() => onClick(value)}>{value}</button>
  )
}

CoinButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
}

export default CoinButton

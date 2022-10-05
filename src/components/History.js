import PropTypes, { func } from "prop-types"
import styled from "styled-components";

function History({history, onHistoryItemClick = () => {}, className}) {
  return (
    <ul className={className}>
      {
        history.map((item, index) => (
          <HistoryItem key={index} onClick={() => onHistoryItemClick(index)} ignored={item.ignored}>
            <p>value: {item.value}</p>
            <p>time: {item.time.toISOString()}</p>
          </HistoryItem>
        ))
      }
    </ul>
  )
}

const HistoryItem = styled.li`
  border: solid black;
  text-decoration: ${props => props.ignored ? "line-through" : "none"};
`

const StyledHistory = styled(History)`
  padding-left: 0;
  list-style: none;

  & p {
    color: red;
  }
`

StyledHistory.propTypes = {
  history: PropTypes.arrayOf(PropTypes.exact({
    value: PropTypes.number.isRequired,
    // value: function(props, propName, componentName) {},
    time: PropTypes.instanceOf(Date).isRequired,
    ignored: PropTypes.bool
  })).isRequired,
  onHistoryItemClick: PropTypes.func,
}

export default StyledHistory 

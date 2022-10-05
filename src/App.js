import {useEffect, useState} from "react";
import Display from "./components/Display";
import CoinButton from "./components/CoinButton";
import History from "./components/History"
import Sum from "./components/Sum";

function App() {
  const [history, setHistory] = useState([])
  const [sum, setSum] = useState(0)

  useEffect(() => {
    setSum(history.reduce((accumulator, curr) => {
      let value = curr.value
      if(curr.ignored) {
        value = 0
      }
      return accumulator + value
    }, 0))
  }, [history])

  function addCoinToHistory(value) {
    setHistory((history) => [
      ...history,
      {
        value,
        ignored: false,
        time: new Date()
      }
    ])
  }

  function ignoreHistoryItem(index) {
    setHistory((history) => {
      history[index].ignored = !history[index].ignored
      return [
        ...history
      ]
    })
  }

  return (
    <div className="App">
      <Display>
          <Sum sum={sum} />
          <History
            history={history}
            onHistoryItemClick={ignoreHistoryItem}
          />
      </Display>
      <div>
        <CoinButton onClick={addCoinToHistory} value={50}/>
        <CoinButton onClick={addCoinToHistory} value={100}/>
        <CoinButton onClick={addCoinToHistory} value={200}/>
      </div>
      <History history={[{value: 99, time: new Date()}]} />
    </div>
  );
}

export default App;

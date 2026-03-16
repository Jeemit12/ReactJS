import './TravelJournal/TJ.css';
import Header from './TravelJournal/Header';
import Body from './TravelJournal/Body';
import data from './TravelJournal/travelinfo.js'
function App(){
  const travelElemnts=data.map((travel) => {
    return (
      <Body
        key={travel.id}
        travel={travel}

      />
    )

  }
  )

  return (
    <>
        <Header />
        {travelElemnts}
    </>
  )
}
export default App

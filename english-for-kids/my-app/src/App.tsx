import React, { useEffect, useState } from 'react';
import './App.css';
import Data from '../src/data/data.json'
import SingleComponent from './components/single-componet/single-component';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import HeaderComponent from './components/header-component/header-component';
import GameComponent from './components/game-component/game-component';


const App = () => {
  const [dataJson, setDataJson] = useState({ ...Data })
  const [vataJson, setVataJson] = useState(true)
  const changeFlag = () => {
    if (vataJson === true) {
      setVataJson(false)
    } else {
      setVataJson(true)
    }
  }
  const arr = [];
  for (let key of Object.entries(dataJson.sets)) {
    arr.push(key)
  }

  const renderComponent = arr.map((item: any) => {
    return <SingleComponent item={item} />
  })

  const renderGame = arr.map((item: any) => {

    return <Route path={`/${item[0]}`} render={() => <GameComponent key={item} item={item} vataJson={vataJson} />} />
  })



  return (
    <BrowserRouter>
      <HeaderComponent dataJson={dataJson} changeFlag={changeFlag} vataJson={vataJson} />
      <Switch>
        {renderGame}
        <div className="main_cards__wrapper">
          <Route path='/' render={() => renderComponent} />
        </div>
      </Switch>
    </BrowserRouter>
  )
}

export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import Data from '../src/data/data.json'
import SingleComponent from './components/single-componet/single-component';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import HeaderComponent from './components/header-component/header-component';
import GameComponent from './components/game-component/game-component';


const App = () => {
  // router
  const [dataJson, setDataJson] = useState({ ...Data })
  // useEffect(() => {
  //   const mainCover = document.querySelector('main_cover')
  //   mainCover?.addEventListener('click', ()=> {
  //     return 1
  //   })
  //   return () => mainCover?.removeEventListener('click', ()=> {
  //     return 1
  //   } )
  // })


  const [vataJson, setVataJson] = useState(true)
  const changeFlag = () => {
    if (vataJson === true) {
      setVataJson(false)
      // console.log(vataJson);
    } else {
      setVataJson(true)
    }
  }
  // console.log(dataJson);
  const arr = [];
  for (let key of Object.entries(dataJson.sets)) {
    arr.push(key)
  }
  
  
  const renderComponent = arr.map((item: any) => {
    return <SingleComponent item={item}/>
  })
  
  const renderGame = arr.map((item: any) => {
    return <Route path={`/${item[0]}`} render={() => <GameComponent key={item} item={item} vataJson={vataJson}/>}/>
  })
  // const renderMainCards = arr.map((item: any) => {
  //   return <Route path={`/${item[0]}`} render={() => <SingleComponent key={item} item={item}/>}/>
  // })

  return (
      <BrowserRouter>
        <HeaderComponent dataJson={dataJson} changeFlag= {changeFlag} vataJson = {vataJson}/>
        <Switch>
        {renderGame}
        <div className="main_cards__wrapper">
        <Route path='/' render={() => renderComponent}/>
        </div>
        </Switch>
      </BrowserRouter>
  )
}

export default App;

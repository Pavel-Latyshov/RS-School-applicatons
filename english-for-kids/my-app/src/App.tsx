import React, { useEffect, useState } from 'react';
import './App.css';
import Data from '../src/data/data.json'
import SingleComponent from './components/single-componet/single-component';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import HeaderComponent from './components/header-component/header-component';
import GameComponent from './components/game-component/game-component';
import gameArr from './components/game-state';
import { start } from 'repl';
import starsArr from './components/start-state';
import winArr from './components/winState';
import Footer from './components/footer-component/footer';


const App = () => {
  const [dataJson, setDataJson] = useState({ ...Data })
  const [vataJson, setVataJson] = useState(true)
  let [wordCheck, setWordCheck] = useState('')
  let [stars, setStars] = useState(true)

  // 222
  const clearGameArr = () => {
    return gameArr.splice(0, gameArr.length)
  }
  const clearStarsArr = () => {

    return starsArr.splice(0, starsArr.length)
  }
  const clearWinArr = () => {
    return winArr.splice(0, winArr.length)
  }

  let [flag, setFlag] = useState(true)
  const toggleNav = () => {
      if (flag === true) {
          setFlag(false)
      } else {
          setFlag(true)
      }
  }

  const starsClear = () => {
    clearGameArr()
    clearStarsArr()
    clearWinArr()
    setStars(false)
    hideNav()
    setWordCheck('')
  }




  // 2222

  const changeFlag = () => {
    if (vataJson === true) {
      setVataJson(false)
      gameArr.splice(0, gameArr.length)
      setWordCheck('')

    } else {
      setVataJson(true)
      gameArr.splice(0, gameArr.length)
      setWordCheck('')
    }
  }

  const hideNav =()=> {
    setFlag(true)
  }
  const arr = [];
  for (let key of Object.entries(dataJson.sets)) {
    arr.push(key)
  }

  const renderComponent = arr.map((item: any) => {
    return <SingleComponent item={item} />
  })

  const renderGame = arr.map((item: any) => {

    return <Route  path={`/${item[0]}`} render={() => <GameComponent key={item} item={item} vataJson={vataJson} wordCheck={wordCheck} setWordCheck={setWordCheck} setStars={setStars} stars={stars} starsClear={starsClear} hideNav={hideNav} />} />
  })

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      <HeaderComponent  dataJson={dataJson} changeFlag={changeFlag} vataJson={vataJson} setVataJson={setVataJson} setStars={setStars} stars={stars} setWordCheck={setWordCheck} starsClear={starsClear} setFlag={setFlag} flag={flag} toggleNav={toggleNav} hideNav={hideNav}/>
      <Switch>
        {renderGame}
        <div onClick={hideNav} className="main_cards__wrapper">
          <Route path='/' render={() => renderComponent} />
        </div>
      </Switch>
      <Footer hideNav={hideNav} />
    </BrowserRouter>
  )
}

export default App;

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
import Login from './components/login.component/login-component';
import Logup from './components/logup-component/logup';
import AdminComponent from './components/admin-component/admin-component';
import { useSelector } from 'react-redux';
import AdminHeader from './components/admin-header-component/admin-header';

const App = () => {
  const categorySelector = useSelector((state: any) => state.category.category)
  const wordsSelector = useSelector((state: any) => state.words.words)
  console.log(wordsSelector);
  const data: any = {
    sets: {}
  }
  for (let key of Object.entries(categorySelector)) {
    const correctCategeory = key[0]
    const category: any = key[1]
    let newData: any = {
      [category]: {}
    }
    data.sets[key[0]] = newData
    for (let key2 of Object.entries(wordsSelector)) {
      const wordArray: any = key2[1]
      const correctWord = wordArray[4]
      if (correctWord === correctCategeory) {
        newData[category] = {...newData[category],
          [wordArray[0]]: [wordArray[1], wordArray[2], wordArray[3], correctWord],
        }
      }
    }
  }
  
  const [dataJson, setDataJson] = useState({ ...Data })
  const [vataJson, setVataJson] = useState(true)
  const [wordCheck, setWordCheck] = useState('')
  const [stars, setStars] = useState(true)
  const [logFlag, setLogFlag] = useState(true)



useEffect(() => {
    setDataJson(data)
  }, [])

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

  const hideNav = () => {
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

    return <Route path={`/${item[0]}`} render={() => <GameComponent key={item} item={item} vataJson={vataJson} wordCheck={wordCheck} setWordCheck={setWordCheck} setStars={setStars} stars={stars} starsClear={starsClear} hideNav={hideNav} />} />
  })

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      {logFlag===true ?       <HeaderComponent dataJson={dataJson} changeFlag={changeFlag} vataJson={vataJson} setVataJson={setVataJson} setStars={setStars} stars={stars} setWordCheck={setWordCheck} starsClear={starsClear} setFlag={setFlag} flag={flag} toggleNav={toggleNav} hideNav={hideNav} setLogFlag={setLogFlag}  /> : <AdminHeader />}

      <Switch>
          <Route path='/login' render={() => <Login />} />
          <Route path='/logup' render={() => <Logup />} />
          <Route path='/admin' render={() => <AdminComponent />} />
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

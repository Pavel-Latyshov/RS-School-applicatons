import React, { useEffect, useState } from 'react';
import css from './train.module.css'

const TrainComponent = ({changeFlag, vataJson}:any) => {   

   
    return (
        <div onClick={changeFlag}  className={css.train_btn}>
            <div  className={css.train_text}>
            {vataJson===true ?  'train' : 'play'}
            
            </div>
            <div className={vataJson===true ? css.train_toggle : css.train_toggle_left}>

            </div>
        </div>
    )
}

export default TrainComponent
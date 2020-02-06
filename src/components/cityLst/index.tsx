import React from 'react';

import style from './index.module.scss'

interface totals {
    confirm: number,
    suspect: number,
    dead: number,
    heal: number
}

interface cityItem {
    name: string,
    total: totals
}

const Index = (props: cityItem) => {
    return (
        <div className={style.titleCity}>
            <div className={style.county} >{props.name}</div>
            <div className={style.data} >
                <span>{props.total.dead}</span>
                <span>{props.total.confirm}</span>
                <span>{props.total.heal}</span>
                <span>{props.total.suspect}</span>
            </div>
            <div className={style.ico} >
                <div className={style.icon} ></div>
            </div>
        </div>
    )
}

export default Index
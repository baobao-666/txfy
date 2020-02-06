import React from 'react'

import style from './index.module.scss'

import { AreaType } from '../../utils/type/http'

import CityItem from '../../components/cityLst/index'

const HotPals = (props: { areaList: AreaType[] }) => {
    return (
        <div className={style.wrap} >
            {
                props.areaList.map((item, index) => {
                    return <div key={index} >
                        <CityItem name={item.name} total={item.total}></CityItem>
                    </div>
                })
            }
        </div>
    )
}

export default HotPals
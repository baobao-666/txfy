import React, { useState, useEffect } from 'react';
import style from './app.module.scss';

import { AreaType, TotalType } from '../utils/type/http'
import { getDisease } from '../api/http'


// 头部组件
import HeaderCode from '../components/header/Header'

// 全国医院
import ChatCode from '../view/chat/index'

//全国实时数据
import HotPals from '../view/hotPals/index'

// 图表组件
import BizChart from '../view/bizChart/index'

//地图组件
import MapCode from '../components/map/index'

// 最新进展
import Trace from '../components/trace/Trace'

// 疫情速报
import Newms from '../components/News/News'

const App = () => {
  let [total, setTotal] = useState<TotalType>();
  //热门医院数据
  let [areaList, setArea] = useState<AreaType[]>([])
  //每日数据
  let [dayList, setDayList] = useState([]);
  //每日新增数据
  let [dayAddList, setDayAddList] = useState([]);
  //地图数据
  let [mapList,setMap] =useState([]);

  let [areaTree, setAreaTree] = useState<AreaType[]>([]);

  useEffect(() => {
    getDisease().then((res: any) => {
      console.log('res', res)
      if (res.ret === 0) {
        let data = JSON.parse(res.data);
        let { chinaTotal, chinaAdd, lastUpdateTime, areaTree, chinaDayList, chinaDayAddList } = data;
        setTotal({ chinaTotal, chinaAdd, lastUpdateTime });
        setArea(areaTree);
        setDayList(chinaDayList);
        setAreaTree(areaTree)
        setDayAddList(chinaDayAddList);
        let mapsList = areaTree[0].children.map((item:any)=>{
            return {
              name: item.name,
              value: item.total.confirm
           }
        });
        setMap(mapsList)
      }
    })
  }, [])
  return (
    <>
      <HeaderCode  total={total as TotalType} ></HeaderCode>
      <MapCode mapList={mapList} ></MapCode>
      <div className={style.titleCity}>
        <div className={style.county} >地区</div>
        <div className={style.data} >
          <span>新增确诊</span>
          <span>累计确诊</span>
          <span>治愈</span>
          <span>死亡</span>
        </div>
        <div className={style.ico} ></div>
      </div>
      <HotPals areaList={areaList.length ? areaList[0].children as AreaType[] : []} ></HotPals>
      <Newms areaTree={areaTree.length?areaTree[0].children as AreaType[]:[]} ></Newms>
      <BizChart chinaDayAddList={dayAddList} chinaDayList={dayList}  ></BizChart>
       <Trace></Trace>
      <ChatCode></ChatCode>
    </>
  );
}

export default App;

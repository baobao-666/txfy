import React, { useState, useEffect } from 'react';
import style from './app.module.scss';

import { AreaType, TotalType } from '../utils/type/http'
import { getDisease} from '../api/http'

// 全国医院
import ChatCode from '../view/chat/index'

//全国实时数据
import HotPals from '../view/hotPals/index'

// 图表组件
import BizChart  from  '../view/bizChart/index'

const App = () => {
  let [areaList, setArea] = useState<AreaType[]>([])
    // 每日数据
    let [dayList, setDayList] = useState([]);
    // 每日新增数据
    let [dayAddList, setDayAddList] = useState([]);
  useEffect(() => {
    getDisease().then((res:any)=>{
      console.log('res', res)
      if(res.ret === 0){
         let data =JSON.parse(res.data);
         let {chinaTotal, chinaAdd, lastUpdateTime, areaTree, chinaDayList, chinaDayAddList} = data;

         console.log(data);
         setArea(areaTree); 
         setDayList(chinaDayList);
         setDayAddList(chinaDayAddList);         

      }
    })
  }, [])
  return (
    <>
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
         <HotPals  areaList ={areaList.length?areaList[0].children as AreaType[]:[]} ></HotPals>

         <BizChart  chinaDayAddList={dayAddList} chinaDayList={dayList}  ></BizChart>

         <ChatCode></ChatCode>
    </>
  );
}

export default App;

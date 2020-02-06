import React from 'react';

import style from './index.module.scss'
import { ChinaDatyList } from '../../utils/type/http'



const Index = (props:{chingList:ChinaDatyList[]}) =>{
   return(
       <div className = {style.wrap} >
           图表组件
       </div>
   )
}

export default Index
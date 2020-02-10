import React, {useState, useEffect} from 'react'
import {TotalType} from '../../utils/type/http'
import style from './Header.module.scss'

const Hospital = (props: {total: TotalType})=>{
    console.log('total...', props.total)
    return <>
 <div className={style.header}>
     <img src="https://mat1.gtimg.com/news/images/inews/2020/feiyan/18/img/top_headv3.png" alt=""/>
<div className={style.jump}>
   
</div>
<div className={style.jump_zhuizong}>
    
</div>
<div className={style.text}>
    <span>数据来源：国家及各地卫健委每日信息发布</span>
</div>

 </div>
 <div className={style.timeNum}>
统计截至{props.total&&props.total.lastUpdateTime}更新于12分钟前
</div>
<div className={style.totalNum}>
                <div className={style.first}>
                    <p className={style.add}>较上日<b className={style.spans}>+{props.total && props.total.chinaAdd.confirm}</b></p>
                    <p className={style.p}>{props.total && props.total.chinaTotal.confirm}</p>
                    <p className={style.span}>全国确诊</p>
                </div>
                <div className={style.secound}>
                    <p className={style.add}>较上日<b className={style.spans}>{props.total && props.total.chinaAdd.suspect}</b></p>
                    <p className={style.p}>{props.total && props.total.chinaTotal.suspect}</p>
                    <p className={style.span}>疑似病例</p>
                </div>
                <div className={style.third}>
                    <p className={style.add}>较上日<b className={style.spans}>+{props.total && props.total.chinaAdd.heal}</b></p>
                    <p className={style.p}>{props.total && props.total.chinaTotal.heal}</p>
                    <p className={style.span}>治愈人数</p>
                </div>
                <div className={style.fouth}>
                    <p className={style.add}>较上日<b className={style.spans}>+{props.total && props.total.chinaAdd.dead}</b></p>
                    <p className={style.p}>{props.total && props.total.chinaTotal.dead}</p>
                    <p className={style.span}>死亡人数</p>
                </div>
            </div>
            <div className={style.wrapper}>
                <div className={style.box}>
                    <p><img src="https://mat1.gtimg.com/news/images/inews/2020/feiyan/18/img/icon_rili.png" alt=""/>战疫日历</p>
                    <p><img src="https://mat1.gtimg.com/news/images/inews/2020/feiyan/18/img/icon_plot.png" alt=""/>小区查询</p>
                    <p><img src="https://mat1.gtimg.com/news/images/inews/2020/feiyan/18/img/icon_train.png" alt=""/>同乘查询</p>
                </div>
            </div>
 
    </>
}


export default Hospital
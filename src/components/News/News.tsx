import React, { useState, useEffect } from 'react'
import {getProvinceNews} from '../../api/http'
import {AreaType} from '../../utils/type/http'
import style from './News.module.scss'

interface ProvinceType{
    [key: string]: string
}
interface ItemType{
    "title": string,
    "publish_time": string,
    "news_url": string,
    "cms_id": string
}
const ProvinceList:ProvinceType = {
    "hb": "湖北",
    "zj": "浙江",
    "gd": "广东",
    "henan": "河南",
    "hn": "湖南",
    "ah": "安徽",
    "jiangxi": "江西",
    "cq": "重庆",
    "jiangsu": "江苏",
    "cd": "四川",
    "sd": "山东",
    "bj": "北京",
    "sh": "上海",
    "fj": "福建",
    "heilongjiang": "黑龙江",
    "xian": "陕西",
    "guangxi": "广西",
    "hebei": "河北",
    "yn": "云南",
    "hainan": "海南",
    "ln": "辽宁",
    "shanxi": "山西",
    "tj": "天津",
    "guizhou": "贵州",
    "gansu": "甘肃",
    "jilin": "吉林",
    "neimenggu": "内蒙古",
    "ningxia": "宁夏",
    "xinjiang": "新疆",
    "hk": "香港",
    "qinghai": "青海",
    "taiwan": "台湾",
    "macau": "澳门",
    "xizang": "西藏"
}


const News = (props: {areaTree: AreaType[]}) => {
    let [province, setProvince] = useState<string>('hb');
    let [items, setItems] = useState<ItemType []>([])

    let changeArea = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        setProvince(e.target.value);
        getNews();
    }

    useEffect(()=>{
        getNews();
    }, [])

    const getNews = ()=>{
        getProvinceNews(province).then((res:any)=>{
            res = res.data;
            if (res.errno === 0){
                setItems(res.data.items);
            }
        })
    }

   // console.log('news...', items);

    let curIndex = props.areaTree.findIndex(item=>item.name === ProvinceList[province]);
    let curPro = props.areaTree[curIndex];

    // 拼接各省份选项
    const provinceHtml = [];
    for (let key in ProvinceList){
        provinceHtml.push(<option key={ProvinceList[key]} value={key}>{ProvinceList[key]}</option>);
    }
    return <>
    <div className={style.citytab}>
        <div className={style.tap}>
        <div className={style.tabtop}>
             <span className={style.name}>{ProvinceList[province]}</span>
                疫情速报
          </div>
          <div className={style.citychange}>
            <select id={style.selectarea} onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>changeArea(e)}>
                <option value="hb">切换城市</option>
                {provinceHtml}
            </select>
        </div>
        </div>
        <div className={style.count}>
            <li>
                <span className={style.add}>{curPro && curPro.today.confirm}</span>
                <span className={style.number}>新增确诊</span>
            </li>
            <li>
                <span className={style.que}>{curPro && curPro.total.confirm}</span>
                <span className={style.number}>累计确诊</span>
            </li>
            <li>
                <span className={style.heal}>{curPro && curPro.total.heal}</span>
                <span className={style.number}>治愈人数</span>
            </li>
            <li>
                <span className={style.dead}>{curPro && curPro.total.dead}</span>
                <span className={style.number}>死亡人数</span>
            </li>
        </div>
        <div className={style.text}>
            {
               items.map((item,index)=>{
                   return(
                  <div className={style.textItem} key={index}>
                      <div className={style.arr}></div> 
                      <div className={style.title}>
                          <i></i>
                          {item.title}
                          </div>
                     
                  </div>
                   )
               
               }) 
            }
        </div>
</div>

    </>
}


export default News

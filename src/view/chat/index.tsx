import React, { useState, useEffect } from 'react';

import style from './index.module.scss'

import { getHospitalProvince } from '../../api/http'

interface ProType {
  provinceName: string
  citys: any[],
  cityCnt: number,
  active?:boolean
}
const Index = () => {
  // 定义全国医院数据
  let [provinces, setProvinces] = useState<ProType[]>([]);

  // 获取全国医院数据
  useEffect(() => {
    getHospitalProvince().then((res: any) => {
      res = res.data;
      console.log(res);

      if (res.code === 0) {
        setProvinces(res.args.rsp.provinces);
      }
    })
  }, []);
  const expandProvince = (index: number)=>{
    let newProvinces = [...provinces];
    newProvinces[index].active = !provinces[index].active;
    setProvinces(newProvinces)
}
  return (
    <div className={style.wrap}>
      {
        provinces.map((item, index) => {
          return <div className={style.item} key={index} >
            <div className={style.city} >{item.provinceName}</div>
            <div onClick={() =>{expandProvince(index)}} className={item.active ? style.icos : style.ico} ></div>
          </div>
        })
      }
    </div>
  );
}

export default Index;
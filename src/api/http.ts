import axios from 'axios'
import jsonp from 'jsonp'
import { TruthType } from '../utils/type/http';


const factHost = '//fact.txxg.jasonandjay.com'; // '/fact'
const apiHost = '//api.txxg.jasonandjay.com'; // '/api'
const wechatHost = '//wechat.txxg.jasonandjay.com'; // '/fact'
const inewsHost = 'https://view.inews.qq.com'; // '/fact'

export const getHospitalProvince = ()=>{
    return axios.post(`${wechatHost}/api/THPneumoniaService/getHospitalProvince`,{
        service: 'THPneumoniaOuterService',
        args: {req:{}},
        func: 'getHospitalProvince',
        context: {channel: 'AAEEviDRbllNrToqonqBmrER'}
    })
}

// 获取分页辟谣信息列表
export const getTruth = (params: TruthType = {page:0})=>{
    return new Promise((resolve, reject)=>{
        jsonp(`${factHost}/loadmore?page=${params.page}`, {}, (err, data)=>{
            if (err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

// 获取疫情最新进展
export const getTrace = ()=>{
    return new Promise((resolve, reject)=>{
        jsonp(`${inewsHost}/g2/getOnsInfo?name=wuwei_ww_time_line`, {}, (err, data)=>{
            if (err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

// 最新疫情数据
export const getDisease = ()=>{
    return new Promise((resolve, reject)=>{
        jsonp(`${inewsHost}/g2/getOnsInfo?name=disease_h5`, {}, (err, data)=>{
            if (err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

// 省份疫情防治列表
export const getProvinceNews = (code: string)=>{
    return axios.post(`${apiHost}/news/v1/province/news/list?province_code=`+code)
}
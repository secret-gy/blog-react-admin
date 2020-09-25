import axios from 'axios'
import {message} from 'antd'

export default function ajax (url, data={},type='get'){
    return new Promise((resolve, reject) => {
        let promis
        if (type === 'get'){
            promis = axios.get(url,{
                params:data
            })
        }else {
            promis = axios.post(url,data)
        }
        promis.then(res => {
            const {data} = res
            resolve({data})
        }).catch(err =>{
            message.error('请求出错' + err.message)
        })
    })
}
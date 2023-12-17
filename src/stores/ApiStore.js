import { defineStore } from 'pinia'
import ApiServices from '../services/ApiService.js'

export const ApiStore =  defineStore('ProductStore',{
    state:()=>{
        return {
            list:[]
        }
    },
    actions: {
        GET_ALL_PRODUCT(request) {
          
          ApiServices.getAllProduct().then((data)=>{
             console.log(data);
            data.json().then(response => {
                console.log(response);
            })
          },()=>{
            
          }).catch(e => {

          })
 
        } 
    }
})

import axios from "axios";

export const api = axios.create({
    baseURL: 'https://danit-final-twitter-8f32e99a3dec.herokuapp.com'
})





//  Функція сортування постів
export const  compareByDate =(a, b) =>{
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
  
    if (dateA < dateB) {
      return 1; 
    }
    if (dateA > dateB) {
      return -1; 
    }
    return 0;
  }
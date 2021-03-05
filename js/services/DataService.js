const BASE_URL= 'http://127.0.0.1:8000'

export default{

    getAds: async function (){
        const url=`${BASE_URL}/api/ads`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.length)
        return data
    }












}
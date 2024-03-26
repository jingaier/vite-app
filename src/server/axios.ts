export const axios = {
    get<T>(url:string){
        return new Promise(resolve => {
            const xhr = new XMLHttpRequest()
            xhr.open('GET',url)
            xhr.onload = () => {
                if(xhr.readyState === 4 && xhr.status === 200){
                    setTimeout(()=>{
                        resolve(JSON.parse(xhr.responseText))
                    },2000)
                }
            }
            xhr.send(null)
        })
    }
}
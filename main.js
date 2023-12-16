// Add JS here
const url = 'https://catfact.ninja/fact'

let h1  = document.querySelector('h1')


// let getData = async () => {
//     console.log('data is loading ..........')
//     let response = await fetch(url)
//     let data  =  await response.json()
//     h1.innerHTML = data.fact
// }


function getData (){
    fetch(url).then((res)=>{
        return res.json()
    }).then((data)=>{
        h1.innerHTML = data.fact
    })
}
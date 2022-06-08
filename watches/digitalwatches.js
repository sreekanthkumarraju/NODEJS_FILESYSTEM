
const fs=require('fs')
 
let indiantime=()=>{
    let today=new Date()
    let options={timeZone:'Asia/Kolkata'}
    let time=today.toLocaleTimeString('en-US',options)
    let date=today.toLocaleDateString('it-IT',options)
    storeData('current_Indian-date-time.txt',`${date} ${time}`)
}
let americantime=()=>{
    let today=new Date()
    let options={timeZone:'America/Los_Angeles'}
    let time=today.toLocaleTimeString('en-US',options)
    let date=today.toLocaleDateString('it-IT',options)
    storeData('current_american-date-time.txt',`${date} ${time}`)
}
let chinesetime=()=>{
    let today=new Date()
    let options={timeZone:'Asia/shanghai'}
    let time=today.toLocaleTimeString('en-US',options)
    let date=today.toLocaleDateString('it-IT',options)
    storeData('current-chinese-date-time.txt',`${date} ${time}`)
}

let storeData=(fileName,data)=>{
    data=`${data}\n`
    //fs.appendFile()  adds data to a file if exist else creates a new file
    fs.appendFile(fileName,data,'utf-8',(err)=>{
        if(err) throw err;
        console.log('Data is stored')
    });
}
module.exports={
    indiantime,
    americantime,
    chinesetime,
}
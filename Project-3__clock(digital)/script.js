const clock=document.getElementById('clock')

// console.log(date.toLocaleTimeString())
setInterval(function(e){
    let date=new Date()
    clock.innerHTML=date.toLocaleTimeString()
},1000)


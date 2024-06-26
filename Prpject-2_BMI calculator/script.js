const form=document.querySelector('form')
form.addEventListener('submit',function(e){
        e.preventDefault()
        const height=parseInt(document.querySelector('#height').value)
        const weight=parseInt(document.querySelector('#weight').value)
        const result=document.querySelector('.result')

        if(height==='' || height<0 || isNaN(height)){
            result.innerHTML=`Please give a valid height ${height}`
        }
        // result.innerHTML=`${height}`
        else if(weight==='' || weight<0 || isNaN(weight)){
            result.innerHTML=`Please give a valid height ${weight}`
        }
        else{
           const bmi= (weight/((height*height)/10000)).toFixed(2)
           result.innerHTML=`<span>${bmi}</span>`


           const guide=document.querySelector('.guide')
           if(bmi<=18.6){
               guide.innerHTML='Underweight'
           }
           else if(bmi>=18.6 && bmi<24.9){
                guide.innerHTML='Normal'
           }
           else if(bmi>24.9){
                guide.innerHTML='Overweight'
           }
        }
})

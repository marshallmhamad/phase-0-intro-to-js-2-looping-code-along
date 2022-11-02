// Code your solutions in this file
function writeCards(names,event){
    let x = []
   for(let i = 0; i < names.length; i++){
       x[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`

   }

   return x


}



function countDown(num){

   while(num>=0)
   console.log(num--)
}
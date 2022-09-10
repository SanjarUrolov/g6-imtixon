
  const card = document.querySelector(".card");
  let surat=`https://pbs.twimg.com/profile_images/1055413669612478468/Sk-XpJaW_400x400.jpg`



  function addCard(){
    return (
        card.innerHTML+=`<div class="card-div">
        <div class="card-images">
        <img src="${surat}">
        <div class="card-content">
          <h1>New Surface Pro 7</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <h3>LEARN MORE</h3>
     </div>
     </div>
      </div>`
    ) 
          
}

// let btn=document.getElementById('btn');

// const myFunction=()=>{
//     btn.addEventListener('mouseover' , ()=>{
//         return (
//                     card.innerHTML+=`<div class="card-div">
//                     <div class="card-images">
//                     <img src="${surat}">
//                     <div class="card-content">
//                       <h1>New Surface Pro 7</h1>
//                       <p>lorem dkjsfj ekjrfhe jdfksj hbfwjbfewj jbfwkjbfwk</p>
//                       <h3>LEARN MORE</h3>
//                  </div>
//                  </div>
//                   </div>`
//                 ) 
//     })
// }

// myFunction();
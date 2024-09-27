const scriptURL = 'https://script.google.com/macros/s/AKfycbzBf-X1RocaEzuAWR6zwweL-Ei9oW2PzYWd_FPjP45Ieqkl0mSlv7Ie3XYdsRuvxgWgUg/exec'
  const form = document.forms['submit-to-google-sheet']
 const msg=document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
              msg.innerHTML="THank you for Subscribing"
              setTimeout(function(){
            msg.innerHTML=""
              },5000)
              form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
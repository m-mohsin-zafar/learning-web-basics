let formELm = document.querySelector('form');

// Attach an Event
formELm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let data = new FormData(e.target);
    console.log(data);
})

// document.querySelector('form').addEventListener('submit', (e) => {
    
//     e.preventDefault();
//     const formData = new FormData(e.target);
    
//     // Now you can use formData.get('foo'), for example.
//     // Don't forget e.preventDefault() if you want to stop normal form .submission
//   });
const btn_auth = document.getElementById('btn_auth');
const id_first = document.getElementById('id_first');
const id_last = document.getElementById('id_last');

btn_auth.onclick = () => {
  const user = {
    first_name: id_first.value,
    last_name: id_last.value
   }
   localStorage.setItem ('user', JSON.stringify(user));
   let b = localStorage.getItem('user');
   b = JSON.parse(b);
   console.log(b);

   
   window.location = '/home/home.html'
}

console.log(window.location);

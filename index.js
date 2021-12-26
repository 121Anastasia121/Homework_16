const btn =document.getElementById('btn');

btn.onclick = () => {
  const text = localStorage.getItem('user');
  if (text === null) {
    window.location = 'auth/auth.html'
  } else {
    window.location = 'home/home.html'
  }
}

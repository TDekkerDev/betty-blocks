// haald hi de invo uit de json place holder
// en stop hjij het in de html
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    // .then((json) => Object.entries(json).map(([key, value]) => `${key}: ${value}`))
    .then((json) => document.getElementById('api').innerHTML = (JSON.stringify(json)));



    // de html waar als wordt verandert
const api = () => {
  return (
    <div>
        <div id='api'>
        </div>
    </div>
  )
}

export default api

document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://portifolio-g4.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    coDesReplace('.categoria', context)
  })
})



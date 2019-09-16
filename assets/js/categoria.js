document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let value2 = document.querySelector(".linkx")
  value2.href = 'projeto.html?pi=' + value + '&key={{@key}}'

  let db = coDesConnect('https://portifolio-g4.firebaseio.com/')

  db.download('/', function(data) {


    context = data['portifolio'][value]
    coDesReplace('.cat', context)
    coDesReplace('.descri', context)
    coDesReplace('.texto_descricao', context)
  })
})
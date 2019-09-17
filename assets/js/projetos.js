document.addEventListener('DOMContentLoaded', function() {

  let params = coDesExtract()

  let value = params['key']

  let value2 = params['pi']
 

  let db = coDesConnect('https://portifolio-g4.firebaseio.com/')

  db.download('/', function(data) {


    context = data['portifolio'][value2]['projetos'][value]
    console.log(context)
    coDesReplace('.projeto', context)
    coDesReplace('.texto_ferramentas', context)
    coDesReplace('.texto_equipe', context)
    coDesReplace('.texto_professor', context)
    coDesReplace('.texto_descricao', context)
    coDesReplace('.foto', context)
  })
  setTimeout(function(){ 
      let loading = document.querySelector(".preloader");
      let corpo = document.querySelector(".body");
      let head = document.querySelector(".header")
      loading.style.display = "none";
      corpo.style.display = "flex";
      head.style.display = "flex";
      
    }, 3000);
})


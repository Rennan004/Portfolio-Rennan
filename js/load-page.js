//Leitura completa do nosso documento HTML
 $(document).ready(function(){

    //Monitorar todos os cliques em cima do elemento "a" do nosso documento HTML
     
    $('a').click(function(e){
      e.preventDefault()

    //Criar uma variavel local que receba o atributo href do link
    let page = $(this).attr('href')

    alert(page)

    })

 })
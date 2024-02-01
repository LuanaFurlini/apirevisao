//queryselector pega o botao com o id //addevent adiciona o evento especifico
document.querySelector("#listar").addEventListener('click', ()=>{ 
    fetch('http://localhost:3000/todos').then((resposta)=>{
    resposta.json().then((data)=>{
        document.querySelector("#conteudo").innerHTML = data
    })
    })                                               
})

document.querySelector("#salvar").addEventListener('click', ()=>{
   fetch('http://localhost:3000/novo', {
    method: "POST",
    headers: {
        "Content-type": "application/json",
    },
    body : JSON.stringify({
        'palavra' : document.querySelector('#texto').value
    })
   }).then((resposta)=>{
    console.log(resposta);
   })
})
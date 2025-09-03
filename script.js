const tarefasinput = document.getElementById("inputTask")
const btnadd = document.getElementById("btnadd")
const lista_taferas = document.getElementById("lista-de-tarefas")

const tarefassalvas = localStorage.getItem("minhaListaDeTarefas");

let tarefas = tarefassalvas ? JSON.parse(tarefassalvas) : [];


function renderizarTarefas() {
  
    let htmltext = '';
    let cont = 0

    for (const tarefa of tarefas) {

        const classeCSS = tarefa.concluida ? 'tarefa-concluida' : '';
        htmltext += 
                `<div class="tarefa-item-container">
                   <li class="${classeCSS}" id="tarefa-${cont}" data-index="${cont}">
                      <span>${tarefa.texto}</span> 
                   </li>
                   <button class="botao-remover" data-index="${cont}">X</button> 
                </div>`;
       cont ++
       console.log(cont)
    }

   lista_taferas.innerHTML = htmltext;

};


btnadd.onclick = function()
{
    tarefa = tarefasinput.value

    const novaTarefaObjeto = {
    texto: tarefa,
    concluida: false
    };

    tarefas.push(novaTarefaObjeto)

    const tarefasEmString = JSON.stringify(tarefas);

    localStorage.setItem("minhaListaDeTarefas",tarefasEmString)

    tarefasinput.value = ""

    console.log("Array de tarefas atual:", tarefas);

    renderizarTarefas();

};

lista_taferas.addEventListener('click', function(event) {
    
    const elementoClicado = event.target;
    
    if (elementoClicado.classList.contains('botao-remover')) {
        const indice = parseInt(elementoClicado.dataset.index);
        
        tarefas.splice(indice, 1);
    }
    else if (elementoClicado.closest('li')) {
        const liClicado = elementoClicado.closest('li');
        const indice = parseInt(liClicado.dataset.index);

        tarefas[indice].concluida = !tarefas[indice].concluida;
    }

    localStorage.setItem('minhaListaDeTarefas', JSON.stringify(tarefas));
    renderizarTarefas();
});



renderizarTarefas();



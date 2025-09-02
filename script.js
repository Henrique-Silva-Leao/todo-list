const tarefasinput = document.getElementById("inputTask")
const btnadd = document.getElementById("btnadd")
const lista_taferas = document.getElementById("lista-de-tarefas")

const tarefassalvas = localStorage.getItem("minhaListaDeTarefas");

let tarefas = tarefassalvas ? JSON.parse(tarefassalvas) : [];


function renderizarTarefas() {
  
    let htmltext = '';

    for (const tarefa of tarefas) {
    htmltext += `<li>${tarefa}</li>`;
    }

   lista_taferas.innerHTML = htmltext;

};



btnadd.onclick = function()
{
    tarefa = tarefasinput.value
    tarefas.push(tarefa)

    const tarefasEmString = JSON.stringify(tarefas);

    localStorage.setItem("minhaListaDeTarefas",tarefasEmString)

    tarefasinput.value = ""

    console.log("Array de tarefas atual:", tarefas);

    renderizarTarefas();

};
renderizarTarefas();



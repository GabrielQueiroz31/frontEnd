//classe para organização da interface da aplicação]
//

export class TarefaView {
  constructor() {
    this.tarefaInput = document.getElementById("tarefaInput"); //entrada de dados da nova tarefa
    this.addTarefaBtn = document.getElementById("addTarefaBtn"); //botão para enviar tarefa
    this.listaTarefas = document.getElementById("listaTarefas"); //ul lista de tarefas
    this.mensagem = document.getElementById("mensagem"); //p para mensagem
  }

  //Métodos
  //Pegar a tarefa do input
  getTarefaInputValue() {
    return this.tarefaInput.value.trim;
  }

  //Limpar o valor do input
  clearInput(){
    this.tarefaInput.value = "";
  }

  //Mandar uma mensagem para o usuario no paragrafo 
  showMensagem(texto){
    this.mensagem.textContent = texto;
  }

  clearMensagem(){
    this.mensagem.textContent = "";
  }

  //Renderizar a lista de tarefas
}

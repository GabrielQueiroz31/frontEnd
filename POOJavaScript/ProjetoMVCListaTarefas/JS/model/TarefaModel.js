//Base da estrutura do aplicativo
//É a classe responsavel pela modelagem de dados


//Adicionar uma anotação na classe => export
//Que essa classe será isada em outras partes do código
export class TarefaModel{
    
    //JS permite Colocar atributos diretamente no construtor
    constructor(){
        this.tarefas = []; //Cria um vetor para as tarefas
        this.currentId = 1 //contador para o ID
    }

    //Métodos
    //Adicionar tarefa
    addTarefas(titulo){
        const newTarefa = {
            id: this.currentId++,
            titulo: titulo,
            completed: false
        };
        this.tarefas.push(newTarefa); //Adicionar a tarefa ao vetor
    }

    //Buscar a tarefas
    getTarefas(){
        return this.tarefa; //Retorna o vetor de tarefas
    }

    //Atualizar tarefa (update)
    atualizarTarefa(id){
        const tarefa = this.tarefas.find(tarefa => tarefa.id === id);
        if(tarefa) { //Se tarefa encontrada
            tarefa.completed = !this.tarefas.completed; //Inventer o valor da booleana
        }
    }

    //Remover a tarefa do vetor (delete)
    removerTarefa(id){
    this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
    }
}

//O que foi feito?
//um crud 
//criamos um vetor de tarefas
//geramos um id automatico para as tarefas
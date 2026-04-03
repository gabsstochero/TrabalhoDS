//dados das tarefas
interface Tarefa {
    id: number;
    titulo: string,
    descricao: string,
    prioridade: "baixa" | "media" | "alta",
    concluida: boolean
}
//classe para gerenciar
class GerenciadorTarefas{
    //encapsulamente e uma lista privada
    private tarefas: Tarefa[] = [];
    //adicionar tarefa
    adicionartarefa(tarefa: Tarefa): void{
        this.tarefas.push(tarefa);
    }
    //retornar tarefas
    listarTarefas(): Tarefa[] {
        return this.tarefas;
    }
    //marcar como concluidas
    marcarconcluida(id: number): boolean {
        const tarefa = this.tarefas.find(t => t.id === id)
        if (tarefa) {
            tarefa.concluida = true;
            return true;
        }
        return false;
    }
    //Pendentes
    listapendentes(): Tarefa[] {
        return this.tarefas.filter(tarefa => ! tarefa.concluida);
    }
    //remover as tarefas
    removertarefa(id: number): boolean {
        const tamanhoinicial = this.tarefas.length;
        this.tarefas = this.tarefas.filter(t => t.id !== id);
        return this.tarefas.length < tamanhoinicial;
    }
}
//Listar de tarefas
const gerenciador = new GerenciadorTarefas();
gerenciador.adicionartarefa({
    id: 1,
    titulo: "limpar a casa",
    descricao: "passar pano, tirar pó, lavar a louça",
    prioridade: "alta",
    concluida: true
});

gerenciador.adicionartarefa({
    id: 2,
    titulo: "revisar matéria de quinta",
    descricao: "Estudar interfaces e tipos",
    prioridade: "alta",
    concluida: false
});
gerenciador.adicionartarefa({
    id: 3,
    titulo: "Ler livro",
    descricao: "Concluir livro Alchemised",
    prioridade: "baixa",
    concluida: false
});
gerenciador.adicionartarefa({
    id: 4,
    titulo: "Fazer os exercícios da semana",
    descricao: "Fazer trabalho das aulas",
    prioridade: "alta",
    concluida: true
});
gerenciador.adicionartarefa({
    id: 5,
    titulo: "Cozinhar marmitas",
    descricao: "Cozinhar marmitas para a semana",
    prioridade: "media",
    concluida: true
});
///saídas
console.log("Todas as tarefas")
console.log(gerenciador.listarTarefas())
console.log("Pendentes:")
console.log(gerenciador.listapendentes())
console.log("concluídas: ")
console.log(gerenciador.marcarconcluida(2))
console.log("removendo tarefas: ")
console.log(gerenciador.removertarefa(3))
console.log(gerenciador.listarTarefas())

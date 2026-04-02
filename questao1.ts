//colocar os dados dos candidatos
interface Candidatos {
    id: number | string;
    nome: string;
    email: string;
    nivel: "junior" | "pleno";
    ativo: boolean;
    tempoDeEstudo: number;
    stackPrincipal: "ts" | "js" | "java"
}
//função dos resumos, vai pegar os dados dos candidatos e apresentalos para o responsalvel
function gerarresumos(resumo: Candidatos) {
    console.log(resumo)
}
//função pra classificar o nível de estudo que cada candidato tem, separando os nível pelo tempo e om if e else
function classificarCandidato(classificar: Candidatos) {
    if (classificar.tempoDeEstudo < 0){
        console.log("tempo de estudo inválido")
    }
    else if(classificar.tempoDeEstudo >0 && classificar.tempoDeEstudo <= 6) {
        console.log("iniciante")
    }
    else if(classificar.tempoDeEstudo >= 7 && classificar.tempoDeEstudo <= 18 ){
        console.log("em desenvolvimento")
    }
    else if(classificar.tempoDeEstudo >18){
        console.log("mais experiente")
    }
}
//pessoas
const pessoa1: Candidatos ={
    id:4165,
    nome: "João",
    email: "joão@email",
    nivel: 'pleno',
    ativo: true,
    tempoDeEstudo: 20,
    stackPrincipal: "js",
}
const pessoa2: Candidatos ={
    id:4165,
    nome: "Fabiola",
    email: "fabiola@email",
    nivel: 'junior',
    ativo: false,
    tempoDeEstudo: 3,
    stackPrincipal: "java",
}
const pessoa3: Candidatos ={
    id:4165,
    nome: "Henrique",
    email: "henrique@email",
    nivel: 'junior',
    ativo: true,
    tempoDeEstudo: 6,
    stackPrincipal: "ts",
}
const pessoa4: Candidatos ={
    id:4165,
    nome: "Carol",
    email: "carol@email",
    nivel: 'pleno',
    ativo: true,
    tempoDeEstudo: 16,
    stackPrincipal: "java",
}
//vão gerar os ressumos, um para cada pessoa separadamente
gerarresumos(pessoa1)
gerarresumos(pessoa2)
gerarresumos(pessoa3)
gerarresumos(pessoa4)
//vão classificar o tempo de estudo de cada um separados
classificarCandidato(pessoa1)
classificarCandidato(pessoa2)
classificarCandidato(pessoa3)
classificarCandidato(pessoa4)

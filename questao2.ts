//colocar os dados dos cursos
interface Curso {
    id: number;
    titulo: string;
    categoria: "typescript" | "logica" | "frontend",
    cargaHoraria: number,
    inscritos: number,
    ativo: boolean
}
//lista de cursos
const cursos: Curso[] =[
    {id:4165,
    titulo: "curso básico para frontend",
    categoria: "frontend",
    cargaHoraria: 200,
    inscritos: 354,
    ativo: true},
    {id:6541,
    titulo: "curso de lógica matematica",
    categoria: "logica",
    cargaHoraria: 90,
    inscritos: 2734,
    ativo: true},
    {id:2585,
    titulo: "typescript do começo ao fim",
    categoria: "typescript",
    cargaHoraria: 340,
    inscritos: 4158,
    ativo: false},
    {id:2963,
    titulo: "typescript avançado",
    categoria: "typescript",
    cargaHoraria: 420,
    inscritos: 4812,
    ativo: true},
    {id:6541,
    titulo: "Lógica básica para computadores",
    categoria: "logica",
    cargaHoraria: 120,
    inscritos: 24,
    ativo: false},
    {id:4165,
    titulo: "carreira desenvolvimento frontend react",
    categoria: "frontend",
    cargaHoraria: 158,
    inscritos: 3541,
    ativo: true}
]
//usar filter para filtrar os ativos
const ativos = cursos.filter((curso) => curso.ativo = true);
//usar filter para filtrar as categorias
const tp = cursos.filter((curso) => curso.categoria = "typescript");
//usar map para ver quais são os títulos
const titulos = cursos.map((curso) => curso.titulo);
//sort para calcular o total
const totalinscritos =[...cursos].sort((a,b) => b.inscritos - a.inscritos);
//reduce para calcular soma
const somatotal = cursos.reduce((total, curso) => total + curso.inscritos, 0);
//reduce para calcular média
const mediahora = cursos.reduce((total, curso) => total + curso.cargaHoraria, 0)/ cursos.length;
//saída
console.log("DADOS DOS CURSOS")
console.log("No momento os cursos ativos são:")
console.log(ativos)
console.log("Cursos na categoria typescript:")
console.log(tp)
console.log("Cursos ordenados pela quantidade de inscritos:")
console.log(totalinscritos)
console.log("Essa é o total de inscritos:")
console.log(totalinscritos)
console.log("Esta é a média de horas:")
console.log(mediahora)

let id = 1;
let alunos = [];

function adicionar() {
    const entradaNome = document.getElementById('nome').value.trim();
    const entradaIdade = document.getElementById('idade').value;
    const entradaCurso = document.getElementById('curso').value.trim();
    const entradaNota1 = parseFloat(document.getElementById('nota1').value);
    const entradaNota2 = parseFloat(document.getElementById('nota2').value);
    const entradaNota3 = parseFloat(document.getElementById('nota3').value);

    if (entradaNome !== '' && entradaIdade !== '' && entradaCurso !== '' && entradaNota1 !== '' && entradaNota2 !== '' && entradaNota3 !== '') {
        const mediaAluno = media(entradaNota1, entradaNota2, entradaNota3);
        const novoAluno = criarAluno(entradaNome, entradaIdade, entradaCurso, entradaNota1, entradaNota2, entradaNota3, mediaAluno);

        if (mediaAluno >= 7) {
            novoAluno.status = true;
        }
        alunos.push(novoAluno);
        renderizarTabela(novoAluno);

        document.getElementById('nome').value = '';
        document.getElementById('idade').value = '';
        document.getElementById('curso').value = '';
        document.getElementById('nota1').value = '';
        document.getElementById('nota2').value = '';
        document.getElementById('nota3').value = '';
    } else {
        window.alert('Por favor, preencha todos os campos.')
    }

}

function criarAluno(nome, idade, curso, nota1, nota2, nota3, media) {
    return {
        id: id++,
        nome: nome,
        idade: idade,
        curso: curso,
        nota1: nota1,
        nota2: nota2,
        nota3: nota3,
        media: media,
        status: false
    };
}

function renderizarTabela(aluno) {
    let tabela = document.getElementById('tabela');
    let novaLinha = tabela.insertRow();

    let cell1 = novaLinha.insertCell(0);
    let cell2 = novaLinha.insertCell(1);
    let cell3 = novaLinha.insertCell(2);
    let cell4 = novaLinha.insertCell(3);
    let cell5 = novaLinha.insertCell(4);
    let cell6 = novaLinha.insertCell(5);
    let cell7 = novaLinha.insertCell(6);
    let cell8 = novaLinha.insertCell(7);
    let cell9 = novaLinha.insertCell(8);

    cell1.textContent = aluno.id;
    cell2.textContent = aluno.nome;
    cell3.textContent = aluno.idade;
    cell4.textContent = aluno.curso;
    cell5.textContent = aluno.nota1;
    cell6.textContent = aluno.nota2;
    cell7.textContent = aluno.nota3;
    cell8.textContent = aluno.media.toFixed(2);
    cell9.textContent = aluno.status ? "Aprovado" : "Reprovado";
}

const media = function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

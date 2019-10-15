package Aluno.Aluno;

/*
 * Se escolher executar essa classe, acessará o BD e mostrará no console os alunos que cursaram Banco de Dados em 20172 e seus conceitos.
 * 
 * */
import java.util.List;

public class Main {

	public static void main(String[] args) {
		AlunoDAO alunoDAO = new AlunoDAO();
		List<Aluno> listaAluno = alunoDAO.retrieveSelect();
		for (Aluno aluno : listaAluno) {
			System.out.println(aluno.getNome());
			System.out.println(aluno.getNome_disc());
			System.out.println(aluno.getSemestre());
			System.out.println(aluno.getNotas());
			System.out.println("");
		}
		
	}

}

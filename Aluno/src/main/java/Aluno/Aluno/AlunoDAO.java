package Aluno.Aluno;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class AlunoDAO {
	public List<Aluno> retrieveSelect() {
		List<Aluno> listaAluno = new ArrayList<Aluno>();
		try {
			Connection c = DriverManager.getConnection("jdbc:postgresql://" + "localhost:5432/postgres", "postgres",
					"aluno");
			Statement stmt = c.createStatement();
			String sqlSelect = "SELECT Aluno.nome, Disciplina.nome_disc, Semestre.semestre, Semestre.notas"
					+ " from Aluno inner join Semestre" + " on Aluno.matricula = Semestre.matricula"
					+ " inner join Disciplina" + " on Semestre.id_disc = Disciplina.id_disc"
					+ " where Disciplina.nome_disc = 'Banco de Dados' and Semestre.semestre = 20172;";
			ResultSet resultSet = stmt.executeQuery(sqlSelect);
			/*
			 * Em vez de criar uma classe com os atributos nome, nome_disc, semestre e notas para mostrar os dados, adicionei os atributos na própria classe Aluno
			 * Deveria ter manipulado melhor o resultset, mas está funcional para o exercício.	
			 * */
			while (resultSet.next()) {
				String nome = resultSet.getString("nome");
				String nome_disc = resultSet.getString("nome_disc");
				Integer semestre = resultSet.getInt("semestre");
				Double notas = resultSet.getDouble("notas");
				listaAluno.add(new Aluno(nome, nome_disc, semestre, notas));
			}
			resultSet.close();
			c.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return listaAluno;

	}
}

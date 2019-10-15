package Aluno.Aluno;

public class Aluno {
	private int matricula;
	private String email;
	private String nome;
	private String nome_disc;
	private Integer semestre;
	private Double notas;
	
	public Aluno(String nome, String nome_disc, Integer semestre, Double notas) {
		super();
		this.nome = nome;
		this.nome_disc = nome_disc;
		this.semestre = semestre;
		this.notas = notas;
	}

	public int getMatricula() {
		return matricula;
	}

	public void setMatricula(int matricula) {
		this.matricula = matricula;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getNome_disc() {
		return nome_disc;
	}

	public void setNome_disc(String nome_disc) {
		this.nome_disc = nome_disc;
	}

	public Integer getSemestre() {
		return semestre;
	}

	public void setSemestre(Integer semestre) {
		this.semestre = semestre;
	}

	public Double getNotas() {
		return notas;
	}

	public void setNotas(Double notas) {
		this.notas = notas;
	}
	
}

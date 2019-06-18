package Aluno.Aluno;
/*
 * Se escolher executar essa classe, após acessar o BD, gera um relatório com os alunos que cursaram Banco de Dados em 20172 e seus conceitos
 * 
 * */
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URISyntaxException;
import java.util.List;

import org.jxls.common.Context;
import org.jxls.util.JxlsHelper;

public class GerarRelatorio {

	private void gerarRelatorio() throws URISyntaxException, IOException {
		AlunoDAO alunoDAO = new AlunoDAO();
		List<Aluno> listaAluno = alunoDAO.retrieveSelect();
		try {
			InputStream is = new FileInputStream(new File("template/template.xls"));
			OutputStream os = new FileOutputStream(new File("template/relatorio.xls"));
			Context context = new Context();
			context.putVar("listaAluno", listaAluno);
			JxlsHelper.getInstance().processTemplateAtCell(is, os, context, "Result!A1");
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}

	
	public static void main(String[] args) throws IOException, URISyntaxException {
		GerarRelatorio relatorio = new GerarRelatorio();
		relatorio.gerarRelatorio();
		}
}

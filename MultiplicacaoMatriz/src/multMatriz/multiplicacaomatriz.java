package multMatriz;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.ObjectInputStream.GetField;
import java.security.MessageDigest;

public class multiplicacaomatriz {

	private final static int lin = 2;
	private final static int col = 2;

	private static long[][] matA = new long[lin][col];
	private static long[][] matB = new long[lin][col];
	private static long[][] matC = new long[lin][col];

	public static byte[] getFileBytes(File file) {
		int len = (int) file.length();
		byte[] sendBuf = new byte[len];
		FileInputStream inFile = null;

		try {
			inFile = new FileInputStream(file);
			inFile.read(sendBuf, 0, len);
		} catch (Exception e) {
			System.out.println("\tErro: " + e.getMessage());
			System.exit(1);
		}

		return sendBuf;
	}

	public static String toHexFormat(final byte[] bytes) {
		final StringBuilder sb = new StringBuilder();
		for (byte b : bytes) {
			sb.append(String.format("%02x", b));
		}
		return sb.toString();
	}

	public static void main(String[] args) {

		int l, c;

		// Carrega Matriz A
		System.out.println("Lendo arquivo da matriz A...");

		try {

			FileReader file = new FileReader("src/matA.txt");
			BufferedReader bufFile = new BufferedReader(file);

			String line = bufFile.readLine();

			l = c = 0;

			while (line != null) {
				matA[l][c] = Integer.parseInt(line);
				c++;

				if (c >= col) {
					l++;
					c = 0;
				}

				line = bufFile.readLine();
			}
		} catch (Exception e) {
			System.err.println("\tErro: " + e.getMessage());
			System.exit(1);
		}

		System.out.println("Lendo arquivo da matriz B...");

		try {

			FileReader file = new FileReader("src/matB.txt");
			BufferedReader bufFile = new BufferedReader(file);

			String line = bufFile.readLine();

			l = c = 0;

			while (line != null) {
				matA[l][c] = Integer.parseInt(line);
				c++;

				if (c >= col) {
					l++;
					c = 0;
				}

				line = bufFile.readLine();
			}
		} catch (Exception e) {
			System.err.println("\tErro: " + e.getMessage());
			System.exit(1);
		}


		// Realiza a multiplicação das matrizes A e B
		System.out.println("Multiplicando as matrizes A e B...");

		long startTime = System.currentTimeMillis();

		for (int i = 0; i < lin; i++) {
			for (int j = 0; j < lin; j++) {
				for (int k = 0; k < col; k++) {
					matC[i][j] = matC[i][j] + (matA[i][k] * matB[k][j]);
				}
			}
		}

		long stopTime = System.currentTimeMillis();

		// Imprime o tempo de execução
		System.out.println("\tTempo de execução: " + (stopTime - startTime) + "ms");
		System.out.println("\tTempo de execução em segundos: " + (stopTime - startTime) / 1000 + "s");
		System.out.println("\tTempo de execução em minutos: " + ((stopTime - startTime) / 1000) / 60 + "s");

		// Grava um arquivo na matriz C
		System.out.println("Gravando arquivo da matriz C...");
		try {
			File fOut = new File("src/matC.txt");
			BufferedWriter writer = new BufferedWriter(new FileWriter(fOut));
			for (int i = 0; i < lin; i++) {
				for (int j = 0; j < col; j++) {
					writer.write(String.valueOf(matC[i][j]));
					if ((i == lin - 1) && (j == col - 1)) {
						continue;
					} else {
						writer.newLine();
					}

				}

			}
			writer.flush();
			writer.close();
		} catch (Exception e) {
			System.out.println("\tErro: " + e.getMessage());
			System.exit(1);
		}

		// Gera o MD5
		System.out.println("Gerando MD5 da matriz C...");
		try {
			File matCFile = new File("src/matC.txt");
			int matCSize = (int) matCFile.length();
			byte[] matCBytes = new byte[matCSize];
			matCBytes = getFileBytes(matCFile);
			MessageDigest md = MessageDigest.getInstance("MD5");
			byte[] hash = md.digest(matCBytes);
			System.out.println("Hash: " + toHexFormat(hash));
			System.out.println("Gravando arquivo matC.md5...");
			File md5File = new File("src/matC.md5");
			BufferedWriter writer = new BufferedWriter(new FileWriter(md5File));
			writer.write(toHexFormat(hash) + "    matC.txt");
			writer.flush();
			writer.close();
			
		} catch (Exception e) {
			System.out.println("\tErro: " + e.getMessage());
			System.exit(1);
		}
	}

}

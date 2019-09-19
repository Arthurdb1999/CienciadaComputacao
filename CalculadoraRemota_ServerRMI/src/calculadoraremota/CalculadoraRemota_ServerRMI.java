package calculadoraremota;

import java.net.MalformedURLException;
import java.rmi.Naming;
import java.rmi.RemoteException;

public class CalculadoraRemota_ServerRMI {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		System.out.println("Iniciando servidor CalculadoraRemota...");
		
		try {
			//Instancia o gerenciador de segurança
			System.out.println("\tRegistrando o serviço de segurança...");
			System.setSecurityManager(new SecurityManager());
			
			//Instancia o objeto local
			CalculadoraRemota calc = new CalculadoraRemota();
			
			//Registra o objeto no RMI Registry
			System.out.println("\tRegistrando o objeto no RMI Registry...");
			Naming.rebind("rmi://localhost:1099/CalculadoraRemota", calc);
			
			System.out.println("\tAguardando requisições...");
			
		} catch (RemoteException | MalformedURLException e) {
			System.err.println("\tErro: " + e.getMessage());
			System.exit(1);
		}

	}

}

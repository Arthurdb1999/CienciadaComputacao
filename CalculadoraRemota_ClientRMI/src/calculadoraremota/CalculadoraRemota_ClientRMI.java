package calculadoraremota;

import java.net.MalformedURLException;
import java.rmi.Naming;
import java.rmi.NotBoundException;
import java.rmi.RemoteException;


public class CalculadoraRemota_ClientRMI {

	public static void main(String[] args) {
		System.out.println("Iniciando cliente da CalculadoraRemota...");
		
		try {
			InterfaceCalculadoraRemota calc;
			
			//Registra o gerenciador de segurança
			System.out.println("\tRegistrando o gerenciador de segurança...");
			System.setSecurityManager(new SecurityManager());
			
			calc = (InterfaceCalculadoraRemota)Naming.lookup("rmi://localhost:1099/CalculadoraRemota");
			
			System.out.println("\tADD 2 + 2 = " + calc.add(2, 2));
			System.out.println("\tSUB 2 - 2 = " + calc.sub(2, 2));
			System.out.println("\tMULT 2 * 2 = " + calc.mult(2, 2));
			System.out.println("\tDIV 2 / 2 = " + calc.div(2, 2));
			
		} catch (MalformedURLException | RemoteException | NotBoundException e) {
			System.err.println("\tErro: " + e.getMessage());
			System.exit(1);
		}

	}

}

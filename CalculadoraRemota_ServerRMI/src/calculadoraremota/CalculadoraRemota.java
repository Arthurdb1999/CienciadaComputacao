package calculadoraremota;

import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;

public class CalculadoraRemota extends UnicastRemoteObject implements InterfaceCalculadoraRemota{

	private static final long serialVersionUID = 1L;
	
	public CalculadoraRemota() throws RemoteException{
		
	};
	
	public float add(float vlrA, float vlrB) throws RemoteException {
		System.out.println("\tCliente invocou o método remoto ADD...");
		return vlrA + vlrB;
	}

	public float sub(float vlrA, float vlrB) throws RemoteException {
		System.out.println("\tCliente invocou o método remoto SUB...");
		return vlrA - vlrB;
	}

	public float mult(float vlrA, float vlrB) throws RemoteException {
		System.out.println("\tCliente invocou o método remoto MULT...");
		return vlrA * vlrB;
	}

	public float div(float vlrA, float vlrB) throws RemoteException {
		System.out.println("\tCliente invocou o método remoto DIV...");
		return vlrA / vlrB;
	}


}

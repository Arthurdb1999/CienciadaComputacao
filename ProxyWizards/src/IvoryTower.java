
public class IvoryTower implements WizardTower {

	@Override
	public void enter(Wizard wizard) {
		System.out.println(wizard.toString() + " enters the tower.");
	}
}

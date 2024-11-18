import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("Digite o nome do cliente:");
    String nome = scanner.nextLine();

    System.out.println("Digite o Cpf do cliente:");
    String cpf = scanner.nextLine();

    System.out.println("Digite o endereço do cliente:");
    String endereco = scanner.nextLine();

    System.out.println("Digite o telefone do cliente:");
    int telefone = scanner.nextInt();

    Cliente cliente = new Cliente();
    cliente.setNome(nome);
    cliente.setCpf(cpf);
    cliente.setEndereco(endereco);
    cliente.setTelefone(telefone);

    System.out.println("Nome: " + cliente.getNome());
    System.out.println("Cpf: " + cliente.getCpf());
    System.out.println("Endereço: " + cliente.getEndereco());
    System.out.println("Telefone: " + cliente.getTelefone());

    scanner.close();
  }
}
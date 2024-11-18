public class Cliente{
  private String nome;
  private String cpf;
  private String endereco;
  private String telefone;
  

  public Cliente(String nome, String cpf, String endereco, String telefone){
    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
    this.telefone = telefone;
  }
  @Override
 public String toString(){
   return "Nome: " + nome + ",cpf: " + cpf + ",Endereço: " + endereco + ",Telefone: " + telefone;
 }
}
public class Cliente {
  private String nome;
  private String cpf;
  private String endereco;
  private int telefone;

  //Getter para o nome
  public String getNome(){
    return nome;
  }

  //Setter para o nome
  public void setNome(String nome){
    this.nome = nome;
  }

  //Getter para o cpf
  public String getCpf(){
    return cpf;
  }

  //Setter para o cpf
  public void setCpf(String cpf){
    this.cpf = cpf;
  }

  //Getter para o endereço
  public String getEndereco(){
    return endereco;
  }

  //Setter para o endereço
  public void setEndereco(String endereco){
    this.endereco = endereco;
  }

  //Getter para o telefone
  public int getTelefone(){
    return telefone;
  }

  //Setter para o telefone
  public void setTelefone(int telefone){
    this.telefone = telefone;
  }

}
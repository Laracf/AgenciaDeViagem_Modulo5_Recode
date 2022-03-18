package com.projeto.ag.entities;

import java.io.Serializable;
import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cliente implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id_Cliente;
	private String Nome;
	private String DataIda;
	private String DataVolta;
	private String Destino;
	private double ValorCompra;
	
	public Cliente() {
		super();
	}
	
	public Cliente(Long id_Cliente, String nome, String dataIda, String dataVolta, String destino, double valorCompra) {
		super();
		Id_Cliente = id_Cliente;
		Nome = nome;
		DataIda = dataIda;
		DataVolta = dataVolta;
		Destino = destino;
		ValorCompra = valorCompra;
	}	
	
	public Long getId_Cliente() {
		return Id_Cliente;
	}
	public void setId_Cliente(Long id_Cliente) {
		Id_Cliente = id_Cliente;
	}
	public String getNome() {
		return Nome;
	}
	public void setNome(String nome) {
		Nome = nome;
	}
	public String getDataIda() {
		return DataIda;
	}
	public void setDataIda(String dataIda) {
		DataIda = dataIda;
	}
	public String getDataVolta() {
		return DataVolta;
	}
	public void setDataVolta(String dataVolta) {
		DataVolta = dataVolta;
	}
	public String getDestino() {
		return Destino;
	}
	public void setDestino(String destino) {
		Destino = destino;
	}
	public double getValorCompra() {
		return ValorCompra;
	}
	public void setValorCompra(double valorCompra) {
		ValorCompra = valorCompra;
	}
	
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public int hashCode() {
		return Objects.hash(DataIda);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Cliente other = (Cliente) obj;
		return Objects.equals(DataIda, other.DataIda);
	}
	
}

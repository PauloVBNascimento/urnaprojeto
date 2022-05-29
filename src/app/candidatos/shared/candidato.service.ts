import { Injectable } from '@angular/core';
import { DatabaseService } from 'src/app/core/service/database.service';
import { Candidato } from './candidato';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  constructor(private db: DatabaseService) { }

  save(candidato: Candidato) {
    if (candidato.id_c > 0) {
      return this.update(candidato);
    } else {
      return this.insert(candidato);
    }

  }
  save2(candidato: Candidato) {
    if (candidato.numero_c != '00000') {
      return this.votar(candidato);
    } else {
      return this.votar2(candidato);
    }
  }

  private insert(candidato: Candidato) {
    const sql = "INSERT INTO candidatos (nome_c, partido_c, numero_c, votos_c) values (?, ?, ?, 0)";
    candidato.numero_c = String(candidato.numero_c);
    const data = [candidato.nome_c, candidato.partido_c, candidato.numero_c];
    console.log(candidato.numero_c);

    return this.db.executeSQL(sql,data);
  }
  
  private votar(candidato: Candidato) {
    const sql = "UPDATE candidatos SET votos_c = votos_c + 1 WHERE numero_c = ?";
    const data = [candidato.numero_c];

    return this.db.executeSQL(sql,data);
  }

  private update(candidato: Candidato) {
    const sql = "UPDATE candidatos SET nome_c = ?, partido_c = ?, numero_c = ? WHERE id_c = ?";
    const data = [candidato.nome_c, candidato.partido_c, candidato.numero_c, candidato.id_c];

    return this.db.executeSQL(sql,data);
  }

  private votar2(candidato: Candidato) {
    const sql = "UPDATE candidatos SET votos_c = votos_c + 1 WHERE numero_c = '00000'";
    const data = [candidato.numero_c];

    return this.db.executeSQL(sql,data);
  }

  limparv(num: string) {
    const sql = "UPDATE candidatos SET votos_c = 0 WHERE numero_c != ?";
    const data = [num];

    return this.db.executeSQL(sql,data);
  }

  delete(id: number){
    const sql = 'DELETE FROM candidatos WHERE id_c = ?';
    const data = [id];
    
    return this.db.executeSQL(sql,data);
  }

  async getById(id: number){
    const sql = "SELECT * FROM candidatos where id_c = ?";
    const data = [id];
    const result = await this.db.executeSQL(sql,data);
    const rows = result.rows;
    const candidato = new Candidato();
    if (rows && rows.length > 0) {
      const item = rows.item(0);
      candidato.id_c = item.id_c;
      candidato.nome_c = item.nome_c;
      candidato.partido_c = item.partido_c;
      candidato.numero_c = item.numero_c;
      candidato.votos_c = item.votos_c;
    }
    return candidato;
  }

  async getByNum(numero: string){
    const sql = "SELECT * FROM candidatos where numero_c = ?";
    const data = [numero];
    const result = await this.db.executeSQL(sql,data);
    const rows = result.rows;
    const candidato = new Candidato();
    if (rows && rows.length > 0) {
      const item = rows.item(0);
      candidato.id_c = item.id_c;
      candidato.nome_c = item.nome_c;
      candidato.partido_c = item.partido_c;
      candidato.numero_c = item.numero_c;
      candidato.votos_c = item.votos_c;
    }
    return candidato;
  }
  async getAll(){
    const sql = "SELECT * FROM candidatos";
    const result = await this.db.executeSQL(sql);
    const candidatos = this.fillCandidatos(result.rows);
    return candidatos;
  }
  async getAll2(){
    const sql = "SELECT * FROM candidatos ORDER BY votos_c DESC";
    const result = await this.db.executeSQL(sql);
    const candidatos = this.fillCandidatos(result.rows);
    return candidatos;
  }
  async limpar(){
    const sql = "SELECT * FROM candidatos where id_c = 10000";
    const result = await this.db.executeSQL(sql);
    const candidatos = this.fillCandidatos(result.rows);
    return candidatos;
  }
  async filter(text: string) {
    const sql = "SELECT * FROM candidatos WHERE nome_c like ?";
    const data = [`%${text}%`];
    const result = await this.db.executeSQL(sql,data);
    const candidatos = this.fillCandidatos(result.rows);
    return candidatos
  }
  async filterNum(text: string) {
    const sql = "SELECT * FROM candidatos WHERE numero_c like ?";
    const data = [`%${text}%`];
    const result = await this.db.executeSQL(sql,data);
    const candidatos = this.fillCandidatos(result.rows);
    return candidatos
  }
  async filterVot(text: string) {
    const sql = "SELECT * FROM candidatos WHERE nome_c like ? ORDER BY votos_c DESC";
    const data = [`%${text}%`];
    const result = await this.db.executeSQL(sql,data);
    const candidatos = this.fillCandidatos(result.rows);
    return candidatos
  }
  private fillCandidatos(rows: any) {
    const candidatos: Candidato[] = [];

    for (let i = 0; i < rows.length; i++) {
      const item = rows.item(i);
      const candidato = new Candidato();
      candidato.id_c = item.id_c;
      candidato.nome_c = item.nome_c;
      candidato.partido_c = item.partido_c;
      candidato.numero_c = item.numero_c;
      candidato.votos_c = item.votos_c;
      candidatos.push(candidato);
    }
    return candidatos;
  }
}

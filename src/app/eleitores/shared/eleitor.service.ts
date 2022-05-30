import { Injectable } from '@angular/core';
import { DatabaseService } from 'src/app/core/service/database.service';
import { Eleitor } from './eleitor';

@Injectable({
  providedIn: 'root'
})
export class EleitorService {

  constructor(private db: DatabaseService) { }

  save (eleitor: Eleitor) {
    if (eleitor.id_e > 0){
      return this.update(eleitor);
    } else{
      return this.insert(eleitor);
    }
  }

  private insert(eleitor: Eleitor) {
    const sql = "INSERT INTO eleitores (nome_e, senha_e, rep_e, cpf_e) values (?, ?, 'm', ?)";
    eleitor.cpf_e = String(eleitor.cpf_e);
    const data = [eleitor.nome_e, eleitor.senha_e, eleitor.cpf_e];
    console.log(eleitor.cpf_e);

    return this.db.executeSQL(sql,data);
  }
  private update(eleitor: Eleitor) {
    const sql = "UPDATE eleitores set nome_e = ?, senha_e = ? WHERE id_e = ?";
    const data = [eleitor.nome_e, eleitor.id_e];

    return this.db.executeSQL(sql,data);
  }

  async getById(id: number) {
    const sql = "SELECT * FROM eleitores WHERE id_e = ?";
    const data = [id];
    const result = await this.db.executeSQL(sql,data);
    const rows = result.rows;
    const eleitor = new Eleitor();
    if (rows && rows.length > 0) {
      const item = rows.item(0);
      eleitor.id_e = item.id_e;
      eleitor.nome_e = item.nome_e;
      eleitor.senha_e = item.senha_e;
      eleitor.rep_e = item.rep_e;
      eleitor.cpf_e = item.cpf_e;
    }
    return eleitor;
  }

  async getAll() {
    const sql = "SELECT * FROM eleitores";
    const result = await this.db.executeSQL(sql);
    const eleitores = this.fillEleitores(result.rows);
    return eleitores;
  }

  async filter(text: string) {
    const sql = "SELECT * FROM eleitores WHERE cpf_e LIKE ?";
    const data = [`%${text}$%`];
    const result = await this.db.executeSQL(sql,data);
    const eleitores = this.fillEleitores(result.rows);
    return eleitores;
 }
  private fillEleitores(rows: any) {
    const eleitores: Eleitor[] = [];

    for (let i = 0; i < rows.length; i++) {
      const item = rows.item(i);
      const eleitor = new Eleitor();
      eleitor.id_e = item.id_e;
      eleitor.nome_e = item.nome_e;
      eleitor.senha_e = item.senha_e;
      eleitor.rep_e = item.rep_e;
      eleitor.cpf_e = item.cpf_e;
      eleitores.push(eleitor);
    }
    return eleitores;
  }
  delete(id: number){
    const sql = 'DELETE FROM eleitores WHERE id_c = ?';
    const data = [id];
    
    return this.db.executeSQL(sql,data);
  }
  async limpar(){
    const sql = "SELECT * FROM eleitores where id_c = 0";
    const result = await this.db.executeSQL(sql);
    const candidatos = this.fillEleitores(result.rows);
    return candidatos;
  }
}

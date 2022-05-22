import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db: SQLiteObject;
  databaseName: string = 'candidatos.db';

  constructor(private sqlite: SQLite, private sqlitePorter: SQLitePorter) { }

  async openDatabase(){
    try{
      this.db = await this.sqlite.create({name: this.databaseName, location: 'default' });
      await this.createDatabase();
    } catch (e) {
      console.error('Erro ao criar o banco de dados', e);
    }
  }

  async createDatabase(){
    const sqlCreateDatabase = this.getCreateTable();
    const result = await this.sqlitePorter.importSqlToDb(this.db, sqlCreateDatabase);
    return result ? true : false;
  }

  getCreateTable(){
    const sqls = [];
    sqls.push('CREATE TABLE IF NOT EXISTS candidatos (id_c INTEGER PRIMARY KEY AUTOINCREMENT, nome_c VARCHAR(100) NOT NULL, partido_c VARCHAR(50) NOT NULL, numero_c INTEGER NOT NULL, votos_c INTEGER);');
    return sqls.join('\n');
  }

  executeSQL(sql: string, params?: any[]) {
    return this.db.executeSql(sql, params);
  }
}

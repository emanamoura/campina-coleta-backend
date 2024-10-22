import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'collect_point'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id') // Chave primária

      table.string('name', 255).notNullable() // Nome do ponto de coleta
      table.text('embed_code').nullable() // Código embed do mapa
      table.time('open_at').notNullable() // Horário de abertura
      table.time('close_at').notNullable() // Horário de fechamento
      table.string('phone', 20).nullable() // Telefone de contato
      table.string('street', 255).notNullable() // Rua do ponto de coleta
      table.string('city', 255).notNullable() // Cidade
      table.string('status', 50).notNullable() // Status (aberto, fechado, etc.)
      table.integer('max_capacity').notNullable() // Capacidade máxima
      table.text('aditional_info').nullable() // Informações adicionais

      table.timestamps(true, true) // Campos created_at e updated_at
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'collect_point'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      // Adicionando as colunas openAt e closeAt como strings
      table.string('openAt') // Coluna para horário de abertura
      table.string('closeAt') // Coluna para horário de fechamento

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

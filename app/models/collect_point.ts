import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import CollectType from './collect_type.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class CollectPoint extends BaseModel {
  static table = 'collect_point'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare embedCode: string

  @column()
  declare openAt: DateTime

  @column()
  declare closeAt: DateTime

  @column()
  declare phone: string

  @column()
  declare street: string

  @column()
  declare city: string

  @column()
  declare status: string

  @column()
  declare maxCapacity: number

  @column()
  declare aditionalInfo: string

  @hasMany(() => CollectType)
  declare collectTypes: HasMany<typeof CollectType>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
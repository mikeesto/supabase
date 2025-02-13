import { PostgresTable } from '@supabase/postgres-meta'
import PostgresMetaInterface from '../common/PostgresMetaInterface'
import { IRootStore } from '../RootStore'

export default class ForeignTableStore extends PostgresMetaInterface<Partial<PostgresTable>> {
  constructor(
    rootStore: IRootStore,
    dataUrl: string,
    headers?: {
      [prop: string]: any
    },
    options?: { identifier: string }
  ) {
    super(rootStore, dataUrl, headers, options)
  }
}

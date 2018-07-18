require 'pg'

class SQLQuery
    def initialize(query, db)
        @db = db
        @query = query
    end 
    def run!
        conn = PG.connect(dbname: @db)
        result = conn.exec(@query)
        conn.close
        return result
    end
end
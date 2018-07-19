require 'active_record'

options = {
    adapter: 'postgresql',
    database: 'celestial_crud'
}

ActiveRecord::Base.establish_connection(options)
class Shelter
    attr_accessor :clients, :animals, :name, :location

    def initialize(name, location)
        @name = name
        @location = location
        @clients = []
        @animals = []
    end
    def sign_up_client!(client)
        @clients << client
    end
    def sign_up_animal!(animal)
        @animals << animal
    end
    def find_clients(name)
        @clients.select{ |client| 
            client.first_name.downcase == name.downcase ||
            client.last_name.downcase == name.downcase
        }
    end 
    def find_animals(name)
        @animals.select{ |animal| animal.name.downcase == name.downcase}
    end
    def print_clients
        @clients.map { |client| "#{client.first_name} #{client.last_name}" }
    end
    def print_animals
        @animals.map { |animal| animal.name }
    end
end
class Adoption
    def initialize(animal, shelter, client)
        @animal = animal
        @client = client
        @shelter = shelter
    end
    def perform!
        @client.pets << @animal
        @shelter.animals.delete( @animal)
    end
end
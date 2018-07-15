class Surrender
    attr_accessor :args
    def initialize(client=nil,animal, shelter)
        @animal = animal
        @shelter = shelter
        @client = client
    end
    
    def perform!
        @client.pets.delete(@animal) if @client
        @shelter.animals << @animal
    end
end
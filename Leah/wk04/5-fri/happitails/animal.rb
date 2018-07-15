class Animal
attr_accessor :name
    def initialize(name, age, species, toys=[])
        @name = name
        @age = age
        @species = species
        @toys = toys
    end


end
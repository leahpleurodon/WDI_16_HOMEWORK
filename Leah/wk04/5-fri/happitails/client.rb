class Client
    attr_accessor :pets, :first_name, :last_name, :name
    def initialize(first_name, last_name, children, age, pets=[])
        @first_name = first_name
        @last_name = last_name
        @children = children
        @age = age
        @pets = pets
        @name = "#{first_name} #{last_name}"
    end
end
class Seed
    attr_accessor :shelter
    def initialize(shelter)
        @shelter = shelter
    end
    def seed!
        # creating two anon surrendered pets.
        Surrender.new(Animal.new("George", 15, "cat", ["ball","feather"]),@shelter).perform!
        Surrender.new(Animal.new("Shout", 1, "rat"),@shelter).perform!
        
        # creating two non pet owning clients with same name for testing
        @shelter.sign_up_client!(Client.new("Leah","Eramo", 0,27))
        @shelter.sign_up_client!(Client.new("Leah","Prince", 0, 30))
        
        #creating client with pet to surrender
        @shelter.sign_up_client!(Client.new(
            "Horrible", "Person", 0, 87,[Animal.new("Bambi", 1, "deer", ["flower"])]
        ))

        ##creating UI instance
        
    end
end


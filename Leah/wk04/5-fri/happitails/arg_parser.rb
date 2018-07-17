require_relative "shelter"

class ArgParser
    def initialize(class_name, shelter)
        @class_name = class_name
        @shelter = shelter
        @client = nil
    end

    def creation_args
        {
            adoption: [
                {prompt: "Enter Animal Name", required: true, type: :animal},
                {required: true, type: :shelter},
                {prompt: "Select Client", required: true, type: :client}
            ],
            client: [
                {prompt: "Enter First name", required: true, type: :string},
                {prompt: "Enter Last name", required: true, type: :string},
                {prompt: "Number of children", required: true, type: :integer},
                {prompt: "Age", required: true, type: :integer}
            ],
            surrender: [
                {prompt: "Enter Client last name(leave blank for anonymous)", required: true, type: :client},
                {prompt: "Select Animal", required: true, type: :clientanimal},
                {required: true, type: :shelter},
            ],
            animal: [
                {prompt: "Enter Name", required: true, type: :string},
                {prompt: "Age", required: true, type: :integer},
                {prompt: "Species", required: true, type: :string},
                {prompt: "Toys (comma seperated)", required: false, type: :array}
            ]
        }
    end

    def get_user_args
        user_args = []
        self.creation_args[@class_name].each do |arg|
            puts arg[:prompt] if arg[:prompt]
            user_input = gets.chomp if arg[:type] != :clientanimal
            case arg[:type]
                when :shelter
                    user_args.push(@shelter)
                when :clientanimal, :client, :animal
                    puts "select from list (type in corresponding number)"
                    if @client
                        list = @client.pets
                    else
                        list = self.list_instances(arg[:type], user_input)
                    end
                    puts list.map.with_index { |elem, i| "#{i} - #{elem.name}"}
                    option = gets.chomp
                    selection = list[option.to_i]
                    @client = selection if arg[:type] == :client
                    user_args.push(selection)
                when :array
                    user_args.push(user_input.split(","))
                else
                    user_args.push(user_input)
            end
        end
        return user_args
    end

    def list_instances(of_class, query)
        if of_class == :client
            @shelter.find_clients(query)
        elsif of_class == :animal
            @shelter.find_animals(query)
        end
    end

    
end
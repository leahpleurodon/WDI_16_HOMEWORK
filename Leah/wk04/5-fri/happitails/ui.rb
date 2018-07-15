require_relative "arg_parser"

class Ui

    def initialize
        @line = "---------------------------------------"
    end
    
    def print_top_menu
        puts "please select an option:-"
        print "0 - List animals\n1 - List clients\n2 - Adoption!\n3 - Surrender - from Client\n4 - Surrender - Anonymous\n5 - Add Client\n#{@line}\n"
    end

    def print_list(list, title)
        puts "\n#{title}\n#{@line}"
        puts list
        puts @line
    end

    def print_shelter_name(shelter)
        puts "#{shelter.name} - #{shelter.location}\n#{@line}\n"
    end

    def create_instance_ui(class_name, shelter)
        puts "Create #{class_name.to_s}\n#{@line}\n"
        user_args = ArgParser.new(class_name, shelter).get_user_args
        case class_name
        when :adoption
            Adoption.new(*user_args).perform!
        when :surrender
            Surrender.new(*user_args).perform!
        when :client
            shelter.sign_up_client!(Client.new(*user_args))
        when :animal
            shelter.sign_up_animal!(Animal.new(*user_args))
        else
            puts "coming soon"
        end
    end
end
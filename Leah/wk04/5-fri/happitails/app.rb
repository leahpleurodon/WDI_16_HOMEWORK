#!/usr/bin/env ruby

require_relative "animal"
require_relative "shelter"
require_relative "client"
require_relative "adoption"
require_relative "surrender"
require_relative "ui"
require_relative "seeds"
# require "pry" 


#initialise UI and seed some data in.
ui = Ui.new 

#create some data to play with
seed_data = Seed.new(Shelter.new("HappiTails", "Melbourne"))
seed_data.seed!
shelter = seed_data.shelter
user_input = nil

while user_input != "exit" do

    ui.print_shelter_name(shelter)
    puts "type exit to quit"
    ui.print_top_menu

    user_input = gets.chomp

    case user_input
        when "0"
            ui.print_list(shelter.print_animals,"Our Animals")
        when "1"
            ui.print_list(shelter.print_clients,"Our Clients")
        when "2"
            ui.create_instance_ui(:adoption, shelter) #wip
        when "3"
            ui.create_instance_ui(:surrender, shelter) #wip
        when "4"
            ui.create_instance_ui(:animal, shelter) #wip
        when "5"
            ui.create_instance_ui(:client, shelter) #wip
        else
            "coming soon"
    end

end


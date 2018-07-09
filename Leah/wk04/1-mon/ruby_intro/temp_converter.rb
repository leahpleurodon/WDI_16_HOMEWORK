


def convert_temp(value, unit)

    unit = unit.upcase

    if unit == "C"
        {
            F: value * 1.8 + 32,
            C: value,
            K:  value - 273.15
        }
    elsif unit == "K"
        {
            F: 1.8 * (value - 273.15) + 32,
            C: value + 273.15,
            K:  value
        }
    elsif unit == "F"
        {
            F: value,
            C: (value - 32) * 0.5556,
            K:  (value - 32) * 0.5556 - 273.15
        }
    else
        "Please select a valid unit"
    end

end

puts "Welcome... enter a temperature and unit e.g '45 c' or type exit to quit"
user_input = gets.chomp   

while user_input != "exit" do 
    args = user_input.split(" ")
    puts convert_temp( args[0].to_i , args[1] )
    puts "--------\n enter a temperature and unit e.g '45 c' or type exit to quit"
    user_input = gets.chomp
end




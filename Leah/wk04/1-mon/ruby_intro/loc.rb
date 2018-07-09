puts "Welcome... enter a filename or type exit to quit"

user_input = gets.chomp   

while user_input != "exit" do 

    line_count = File.readlines(user_input)

    puts "File has #{line_count.length} lines."

    puts "-------\n Enter a filename or type exit to quit"
    user_input = gets.chomp   
end
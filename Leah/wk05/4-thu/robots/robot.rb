require 'pry'
class Robot
    attr_reader :mac_address
    def initialize
        @robot_name = gen_name
        @mac_address = (1..6).collect{"%02x" % [rand(255)]}.join(":")
        @last_boot = Time.now()
        @creation_time = Time.now()
        @instruction_count = 0
    end

    def name
        if !@robot_name
            @robot_name = gen_name 
        end
        @last_boot = Time.now()
        @instruction_count += 1
        @robot_name
    end

    def reset
        @robot_name = nil
        @last_boot = nil
    end

    def timers
        since_boot_array = (Time.now() - @last_boot).divmod(60)
        since_creation_array = (Time.now() - @creation_time).divmod(60)
        "Last booted, #{since_boot_array[0]} mins and #{since_boot_array[1].to_i} seconds ago... Created #{since_creation_array[0]} mins and #{since_creation_array[1].to_i} seconds ago..."
    end

    def gen_name
        ("A".."Z").to_a.sample(2).join + "%03d" % rand(999)
    end

end

binding.pry
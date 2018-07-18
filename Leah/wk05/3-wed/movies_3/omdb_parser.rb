require 'httparty'

class OMDBParser
    attr_accessor :get_result, :to_sql_insert
    
    def get_result(search_type, search_query, api_key)
        result = HTTParty.get("http://www.omdbapi.com/?#{search_type}=#{search_query}&apikey=#{api_key}")
        result.parsed_response
    end
end
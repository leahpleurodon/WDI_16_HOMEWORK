
module OMDBService

    def self.fetch_search_results(search_query)
        result = HTTParty.get("http://www.omdbapi.com/?s=#{search_query}&apikey=2f6435d9")
        result.parsed_response["Search"]
    end

    def self.fetch_by_imdb_id(imdb_id)
        result = HTTParty.get("http://www.omdbapi.com/?i=#{imdb_id}&apikey=2f6435d9")
        result.parsed_response
    end

end
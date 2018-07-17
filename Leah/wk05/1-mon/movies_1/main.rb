require 'httparty'     
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb(:index)
end

get '/movie' do
  @movie_title = params["movie_title"]
  result = HTTParty.get("http://omdbapi.com/?t=#{@movie_title}&apikey=2f6435d9")
  @movie = result.parsed_response
  erb(:movie_details)
end




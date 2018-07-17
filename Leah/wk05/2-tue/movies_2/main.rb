require 'httparty'     
require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
  erb :index
end

get '/movie/:id' do
  result = HTTParty.get("http://www.omdbapi.com/?i=#{params["id"]}&apikey=2f6435d9")
  @movie = result.parsed_response
  erb :movie_details
end

get '/search_results' do
  File.write('history.txt', "#{params["movie_title"]}\n", File.size('history.txt'), mode: 'a')
  result = HTTParty.get("http://omdbapi.com/?s=#{params["movie_title"]}&apikey=2f6435d9")
  @movies_list = result.parsed_response["Search"]
  if @movies_list == nil
    redirect "movie/youpeanutthisfilmdoesntexit"
  elsif @movies_list.length == 1
    redirect "movie/#{@movies_list[0]['imdbID']}"
  end
  erb :search_results
end





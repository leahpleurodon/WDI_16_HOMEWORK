     
require 'sinatra'
require 'sinatra/reloader'
require_relative "omdb_parser"
require_relative "sql_query"
require_relative "sql_generator"
require 'pry'

get '/' do
  erb :index
end

get '/search_results' do
  @movies_list = OMDBParser.new.get_result("s",params["title"],"2f6435d9")["Search"]
  erb :search_results
end

get '/movie/:id' do
  local_movie = SQLQuery.new("SELECT * FROM movies WHERE imdbID = '#{params[:id]}';","moovies").run!
  if local_movie.ntuples == 0
    @movie = OMDBParser.new.get_result("i",params[:id],"2f6435d9")
    SQLQuery.new(SQLGenerator.new.movie_create_script(@movie), "moovies").run!
    local_movie = SQLQuery.new("SELECT * FROM movies WHERE imdbID = '#{@movie["imdbID"]}';", "moovies").run![0]
    SQLQuery.new(SQLGenerator.new.create_actors_sql(local_movie["id"],@movie),"moovies").run!
    erb :movie_details
  else
    @movie = local_movie[0]
    @actors = SQLQuery.new("SELECT actor_name FROM movie_actors WHERE movie_id = #{@movie["id"]};","moovies").run!
    erb :movie_details_local
  end
end


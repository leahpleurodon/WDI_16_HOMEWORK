class SQLGenerator
    attr_accessor :movie_create_sql, :create_actors_script
    def movie_create_script(movie)
         "INSERT INTO movies (title, year, rating, released, runtime, plot, country, poster, imdbID) values ('#{movie["Title"].gsub("'","")}', '#{movie["Year"]}', '#{movie["Rated"].gsub("'","")}', '#{movie["Released"].gsub("'","")}', '#{movie["Runtime"].gsub("'","")}', '#{movie["Plot"].gsub("'","")}', '#{movie["Country"].gsub("'","")}', '#{movie["Poster"]}', '#{movie["imdbID"].gsub("'","")}');" 
    end
    def create_actors_sql(local_id, movie)
        str = "INSERT INTO movie_actors (movie_id, actor_name) values "
        movie["Actors"].split(", ").each do |a| 
            str = str + "(#{local_id},'#{a}'), "
        end
        str[-2] = ';'
        str[-1] = ''
        str
    end
end
require_relative '../services/OMDB_service'
class MoviesController < ApplicationController

    def show
        if !!Movie.find_by(imdb_id: params[:imdb_id])
            @movie = Movie.find_by(imdb_id: params[:imdb_id])
        else
            omdb_data = OMDBService.fetch_by_imdb_id(params[:imdb_id])
            @movie = Movie.new(
                title: omdb_data["Title"],
                year: omdb_data["Year"],
                imdb_id: omdb_data["imdbID"],
                poster_url: omdb_data["Poster"],
                plot: omdb_data["Plot"],
                rating: omdb_data["Rated"]
            )
            @movie.save
        end
    end

    def destroy
        @movie = Movie.find(params[:id])
        @movie.delete
        redirect_to "/"
    end
    
    def edit
        @movie = Movie.find(params[:id])
    end

    def update
        @movie = Movie.find(params[:id])
        @movie.title = params[:title]
        @movie.year = params[:year]
        @movie.poster_url = params[:poster]
        @movie.plot = params[:plot]
        @movie.rating = params[:rating]
        if @movie.save
            redirect_to "/movies/#{@movie.imdb_id}"
        else
            render :edit
        end
    end
end

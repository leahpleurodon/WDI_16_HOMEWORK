require_relative '../services/OMDB_service'

class PagesController < ApplicationController

    def home
        @search_results = !!params[:q] ? OMDBService.fetch_search_results(params[:q]) : []
    end
end
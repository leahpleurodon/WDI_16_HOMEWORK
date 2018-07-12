require 'stock_quote'
require 'sinatra'
require "sinatra/reloader"
require 'pry'

get "/" do

    erb(:index)
end

get "/price_info" do

    @stock = StockQuote::Stock.quote(params["stock"])
    erb(:price_info)
end

get "/about" do
    erb(:about)
end
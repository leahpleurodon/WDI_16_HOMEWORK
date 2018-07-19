  
require 'sinatra'
require 'sinatra/reloader'
require_relative 'db_config'   
require_relative 'models/galaxy'
require_relative 'models/planet'
require_relative 'models/moon'

get '/' do
  @galaxies = Galaxy.all
  @planets = Planet.all
  @moons = Moon.all
  erb :index
end

# -------get/index

get '/planets' do
  @planets = Planet.all
  erb :"planets/index"
end

get '/moons' do
  @moons = Moon.all
  erb :"moons/index"
end

get '/galaxies' do
  @galaxies = Galaxy.all
  erb :"galaxies/index"
end

# -------get/show

get '/planet/:id' do
  @planet = Planet.find(params[:id])
  erb :"planets/show"
end
get '/galaxy/:id' do
  @galaxy = Galaxy.find(params[:id])
  erb :"galaxies/show"
end

get '/moon/:id' do
  @moon = Moon.find(params[:id])
  erb :"moons/show"
end

# -------get/edit form

get '/moon/:id/edit' do
  @moon = Moon.find(params[:id])
  erb :"moons/edit"
end

get '/planet/:id/edit' do
  @planet = Planet.find(params[:id])
  erb :"planets/edit"
end

get '/galaxy/:id/edit' do
  @galaxy = Galaxy.find(params[:id])
  erb :"galaxies/edit"
end

# -------put/edit

put '/planet/:id' do
  planet = Planet.find(params[:id])
  planet.name = params[:name]
  planet.photo_url = params[:photo_url]
  planet.blurb = params[:blurb]
  planet.save
  redirect "/planet/#{params[:id]}"
end

put '/moon/:id' do
  moon = Moon.find(params[:id])
  moon.name = params[:name]
  moon.photo_url = params[:photo_url]
  moon.blurb = params[:blurb]
  moon.save
  redirect "/moon/#{params[:id]}"
end

put '/galaxy/:id' do
  galaxy = Galaxy.find(params[:id])
  galaxy.name = params[:name]
  galaxy.photo_url = params[:photo_url]
  galaxy.blurb = params[:blurb]
  galaxy.save
  redirect "/galaxy/#{params[:id]}"
end





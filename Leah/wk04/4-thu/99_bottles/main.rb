     
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  @bottle_num = 99
  erb(:bottles)

end

get '/:num' do
  @bottle_num = params["num"].to_i
  erb(:bottles)
end





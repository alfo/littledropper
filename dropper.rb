require 'sinatra'
require 'sinatra/reloader' if development?
require 'faraday'

get '/' do
	send_file File.join(settings.public_folder, 'index.html')
end

post '/post' do
	text = params[:text];

	connection = Faraday.new('http://remote.bergcloud.com/') do |c|
		c.request :url_encoded
		c.adapter Faraday.default_adapter
	end

	html = "
	<html>
		<h1>#{text}</h1>
	</html>"
	
	result = connection.post('playground/direct_print/OZNK4GWVGDE6', :html => html)

	result.body
	
end
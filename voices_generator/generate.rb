require_relative 'token'
require_relative 'speech'
require_relative 'collection'

=begin
puts "[INFO] Getting access token"
token = Token.new(ENV['azure_key'])

puts "[INFO] Translating text"
hyva = Speech.new('Hyvä päivä', token, 'fi-FI')

puts "[INFO] Saving text"
hyva.save
=end

collection = Collection.new('questions.json')
collection.generate('35be31b159f547678e10e86bedefd920')

require_relative 'token'
require_relative 'speech'
require_relative 'collection'

unless ENV.has_key? 'AZURE_KEY'
  STDERR.puts "[ERROR] You need to define the variable environment AZURE_KEY with your azure api key to generate the new voices"
  exit 1
end

collection = Collection.new('questions.json')
collection.generate(ENV['AZURE_KEY'])

require 'json'
require 'fileutils'

require_relative 'token'
require_relative 'speech'

class Collection
  def initialize(file)
    @data = JSON.parse(File.read(file))
  end

  def generate(api_key)
    puts "[INFO] Get access token"
    @token = Token.new(api_key)
    @data.each_with_index do |collection|
      puts "[INFO] Start managing #{collection[0]}"
      langs = collection[1]['langs']
      langs.each { |lang| create_directory("dist/#{lang[1]}") }
      collection[1]['questions'].each do |question|
        generate_speech(question, 'origin', langs)
        generate_speech(question, 'answer', langs)
      end
    end
  end

  private

  def generate_speech(question, key, langs)
    unless exist?("dist/#{langs[key]}/#{Base64.strict_encode64(question[key])}.mp3")
      puts "[INFO] Must generate #{question[key]} in #{langs[key]}"
      Speech.new(question[key], @token, langs[key]).save
    end
  end

  def create_directory(dir)
    FileUtils.mkdir_p dir
  end

  def exist?(filename)
    File.file?(filename)
  end
end

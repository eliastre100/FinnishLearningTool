require 'net/http'
require 'net/https'
require 'uri'
require 'ruby_speech'
require 'base64'

# https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support#standard-voices
LANGS = {
    'en-GB': 'Microsoft Server Speech Text to Speech Voice (en-GB, Susan, Apollo)',
    'fi-FI': 'Microsoft Server Speech Text to Speech Voice (fi-FI, HeidiRUS)'
}

class Speech
  attr_accessor :text
  attr_accessor :sound
  attr_accessor :lang

  def initialize(text, token, lang = 'en-GB')
    @text = text
    @lang = lang.to_sym
    generate(token, lang)
  end

  def save
    File.open("dist/#{lang}/#{Base64.strict_encode64(@text)}.mp3", 'wb') { |file| file.write(@sound) }
    puts "[INFO] Saved #{@text} into dist/#{lang}/#{Base64.strict_encode64(@text)}.mp3"
  end

  private

  def generate(token, lang)
    text = @text
    ttsServiceUri = "https://westeurope.tts.speech.microsoft.com/cognitiveservices/v1"
    url = URI.parse(ttsServiceUri)
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true

    headers = {
        'content-type' => 'application/ssml+xml',
        'X-Microsoft-OutputFormat' => 'riff-24khz-16bit-mono-pcm',
        'Authorization' => 'Bearer ' + token.token,
        'User-Agent' => 'TTSRuby'
    }

    data = RubySpeech::SSML.draw do
      voice name: LANGS[lang.to_sym] do
        string text
      end
    end

    resp = http.post(url.path, data.to_s, headers)
    @sound = resp.body
  end
end

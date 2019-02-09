require 'net/http'
require 'net/https'
require 'uri'

class Token
  attr_accessor :token

  def initialize(api_key)
    get_token api_key
  end

  private

  def get_token(api_key)
    url = URI.parse("https://westeurope.api.cognitive.microsoft.com/sts/v1.0/issueToken")
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true

    headers = {
        'Ocp-Apim-Subscription-Key' => api_key
    }

    resp = http.post(url.path, '', headers)
    @token = resp.body
  end
end
class User < ActiveRecord::Base
  # include Authorize
  #has_secure_password
  has_many :videos
end

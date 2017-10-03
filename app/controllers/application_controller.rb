class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # before_action :authenticate_user!
  # after_action :add_csrf_token_to_json_request_header
  after_action :set_csrf_token
  
  protected

def set_csrf_token
	response.headers['X-CSRF-TOKEN'] = form_authenticity_token
end
end

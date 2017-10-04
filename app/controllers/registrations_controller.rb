class RegistrationsController < Devise::RegistrationsController  
    clear_respond_to
    respond_to :json

    def create
    	build_resource(sign_up_params)
    	if resource.invalid?
    		render :json => {:errors => resource.errors.full_messages }, :status => 422
    		return
    	end
    	super
    end

end
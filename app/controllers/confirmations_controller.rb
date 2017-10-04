class ConfirmationsController < Devise::ConfirmationsController  
  clear_respond_to
  respond_to :html, :json

  # GET /resource/confirmation?confirmation_token=abcdef
  def show
    self.resource = resource_class.confirm_by_token(params[:confirmation_token])
    yield resource if block_given?

    if resource.errors.empty?
      	# set_flash_message!(:notice, :confirmed)
      	redirect_to root_path, flash: {notice: :confirmed}
  	else
  		# set_flash_message!(:alert, resource.errors.full_messages.join("; "))
      	redirect_to root_path, flash: {alert: resource.errors.full_messages.join("; ")}
    end
  end

end
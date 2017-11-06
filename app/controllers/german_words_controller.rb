class GermanWordsController < ApplicationController
  
  def index
  	@german_words = GermanWord.all()
  	@data = {:app_type => "german_words",
  			 :page_data => @german_words}
  	respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @data}
    end
  end

end
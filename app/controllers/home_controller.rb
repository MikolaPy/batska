class HomeController < ApplicationController
  def index
    @global_store = { global_store: [1,2,3]}
  end
end

class StudentsController < ApplicationController

  def index
    @students = Student.all
  end

  def show
    @student = Student.find(params[:id])
  end

  def new
    @student = Student.new
  end

  def create
    @student = Student.new(
      name: params[:name],
      img_url: params[:"img-url"],
      house: House.all.sample
    )
    if @student.save
      redirect_to "/welcome/student/#{@student.id}"
    else
      render :new
    end
  end

  def welcome
    @student = Student.find(params[:id])
  end
end

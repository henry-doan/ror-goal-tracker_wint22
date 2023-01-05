class Goal < ApplicationRecord
  has_many :usergoals, dependent: :destroy
  has_many :users, through: :usergoals
  
  validates :target, :author, presence: true
end


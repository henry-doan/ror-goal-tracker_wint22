class Usergoal < ApplicationRecord
  belongs_to :user
  belongs_to :goal

  validates :entry, :when, presence: true
end

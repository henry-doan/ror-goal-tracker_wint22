class Goal < ApplicationRecord
  validates :target, :author, presence: true
end


class CreateUsergoals < ActiveRecord::Migration[7.0]
  def change
    create_table :usergoals do |t|
      t.string :entry
      t.datetime :when
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :goal, null: false, foreign_key: true

      t.timestamps
    end
  end
end

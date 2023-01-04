class CreateGoals < ActiveRecord::Migration[7.0]
  def change
    create_table :goals do |t|
      t.string :target
      t.datetime :start_time
      t.datetime :end_time
      t.string :img
      t.boolean :complete
      t.string :author

      t.timestamps
    end
  end
end

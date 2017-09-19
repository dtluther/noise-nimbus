class CreatePlays < ActiveRecord::Migration[5.1]
  def change
    create_table :plays do |t|
      t.datetime :datetime, null: false
      t.integer :listener_id, null: false
      t.integer :track_id, null: false

      t.timestamps
    end
    add_index :plays, :datetime
    add_index :plays, :listener_id
    add_index :plays, :track_id
  end
end

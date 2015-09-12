class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string
      t.references , index: true
      t.text

      t.timestamps null: false
    end
    add_foreign_key :videos, :users
  end
end

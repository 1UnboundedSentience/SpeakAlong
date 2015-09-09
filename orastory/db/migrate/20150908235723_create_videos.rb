class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :title
      t.references :user, index: true
      t.text :video_link

      t.timestamps null: false
    end
    add_foreign_key :videos, :users
  end
end

class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :title
      t.integer :user_id
      t.text :video_link

      t.timestamps null: false
    end
  end
end

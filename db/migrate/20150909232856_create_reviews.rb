class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.references :video, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true
      t.integer :body_lang_rating
      t.text :body_lang_comments
      t.integer :vocal_rating
      t.text :vocal_comments
      t.integer :content_rating
      t.text :content_comments
      t.integer :overall_rating
      t.text :overall_comments

      t.timestamps null: false
    end
  end
end

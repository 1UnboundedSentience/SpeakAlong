# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150909232856) do

  create_table "reviews", force: :cascade do |t|
    t.integer  "video_id"
    t.integer  "user_id"
    t.integer  "body_lang_rating"
    t.text     "body_lang_comments"
    t.integer  "vocal_rating"
    t.text     "vocal_comments"
    t.integer  "content_rating"
    t.text     "content_comments"
    t.integer  "overall_rating"
    t.text     "overall_comments"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id"
  add_index "reviews", ["video_id"], name: "index_reviews_on_video_id"

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "username"
    t.string   "password"
    t.string   "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "videos", force: :cascade do |t|
    t.string   "title"
    t.integer  "user_id"
    t.string   "video_link"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "videos", ["user_id"], name: "index_videos_on_user_id"

end

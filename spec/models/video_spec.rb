require 'rails_helper'
#green test  = product manager completely happy, User Story is accepted.
RSpec.describe Video, type: :model do
    describe "videos" do
      it 'create a video in the database' do
        video = Video.create(title: "test", video_link: "https://www.youtube.com/watch?v=XtLz_qOknnk")
        expect(Video.count).to eq(1)
      end
      context 'user providing youtube links' do
        it 'should validate if the youtube link is valid' do
          video = Video.create(title: "test", video_link: "https://www.youtube.com/watch?v=XtLz_qOknnk")
            expect(Video.count).to eq(1)
        end
        it 'should validate if the youtube link is invalid' do
          video = Video.create(title: "test", video_link: "https://www.example.com")
            expect(Video.count).to eq(0)
        end
      end
    end
end

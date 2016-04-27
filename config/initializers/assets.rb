# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'
Rails.application.config.assets.precompile += %w( keycontrols.js )
Rails.application.config.assets.precompile += %w( webrtcLogic.js )
Rails.application.config.assets.precompile += %w( RecordRTC.js )
Rails.application.config.assets.precompile += %w( RecordRTClogic.js )
Rails.application.config.assets.precompile += %w( webrtc_css.css )

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )

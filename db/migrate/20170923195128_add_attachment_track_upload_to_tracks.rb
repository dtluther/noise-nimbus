class AddAttachmentTrackUploadToTracks < ActiveRecord::Migration[5.1]
  def self.up
    change_table :tracks do |t|
      t.attachment :track_upload, null: false
    end
  end

  def self.down
    remove_attachment :tracks, :track_upload
  end
end

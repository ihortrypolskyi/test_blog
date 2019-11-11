class Post < ApplicationRecord
  belongs_to :user
  has_many_attached :images
  has_rich_text :body
  validates :user_id, presence: true
  validates :title, presence: true, length: { maximum: 200 }, uniqueness: {case_sensitive: false}
  validates :body, presence: true, length: { maximum: 10000 }
  default_scope -> { order(created_at: :desc) }
  scope :published, -> { where(active: true).order(created_at: :desc) }
end

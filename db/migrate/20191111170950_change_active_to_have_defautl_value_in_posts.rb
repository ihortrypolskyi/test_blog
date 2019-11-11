class ChangeActiveToHaveDefautlValueInPosts < ActiveRecord::Migration[6.0]
  def up
    change_column :posts, :active, :boolean, default: false
  end

  def down
    change_column :posts, :active, :boolean
  end
end

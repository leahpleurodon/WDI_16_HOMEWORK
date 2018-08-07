class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :year
      t.string :imdb_id
      t.string :poster_url
      t.text :plot
      t.string :rating

      t.timestamps
    end
    add_index :movies, :imdb_id, unique: true
  end
end

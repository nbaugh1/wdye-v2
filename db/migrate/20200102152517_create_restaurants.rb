class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :cuisine
      t.integer :yelp_id
      t.string :location
      t.integer :price_range

      t.timestamps
    end
  end
end

class CreateGermanWords < ActiveRecord::Migration[5.1]
  def change
    create_table :german_words do |t|
      t.string 	:text, null: false, uniqueness: true
      t.string 	:plural
      t.string 	:translation, null: false
      t.string 	:speech_part, limit: 5, null: false
      t.string 	:gender, limit: 1
      t.integer :lesson
    end
  end
end

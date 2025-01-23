import * as SQLite from 'expo-sqlite';


class SprintRepository {
  constructor() {
    this.db = SQLite.openDatabaseAsync("sprints.db");
    //this.enableCascading();
  }

  // Enable cascading foreign keys
//   async enableCascading() {
//     const database = await this.db;
//     await database.runAsync('PRAGMA foreign_keys = ON'); (only necessary in relationships)
//   }

  // Initialize the database (create the table if it doesn't exist)
  async initialize() {
    try {
      const database = await this.db;
      await database.runAsync(`CREATE TABLE IF NOT EXISTS Sprints (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        time TEXT NOT NULL
      );`);
      return 'Table created successfully';
    } catch (error) {
      console.error("Error initializing database: ", error);
      throw error;
    }
  }

  // Add a new sprint
  async addSprint(title, time) {
    try {
      const database = await this.db;
      const result = await database.runAsync(
        'INSERT INTO Sprints (title, time) VALUES (?, ?);',
        [title, time]
      );
      return result.insertId;
    } catch (error) {
      console.error("Error adding sprint: ", error);
      throw error;
    }
  }

  // Get all sprints
  async getAllSprints() {
    const db = await this.db;
  try {
    const result = await db.getAllAsync(
      'SELECT id, title, time FROM Sprints;',
      []
    );

    // Map the result to a usable format
    const sprints = result.map(row => ({
      id: row.id,
      title: row.title,
      time: row.time,
    }));

    return sprints;
  } catch (error) {
    console.error("Error fetching all sprints: ", error);
    throw error;
  }
  }

  // Delete a sprint by ID
  async deleteSprint(id) {
    try {
      const database = await this.db;
      const result = await database.runAsync(
        'DELETE FROM Sprints WHERE id = ?;',
        [id]
      );
      return result.rowsAffected;
    } catch (error) {
      console.error("Error deleting sprint: ", error);
      throw error;
    }
  }

  // Clear all sprints
  async clearAllSprints() {
    try {
      const database = await this.db;
      const result = await database.runAsync('DELETE FROM Sprints;', []);
      return result.rowsAffected;
    } catch (error) {
      console.error("Error clearing all sprints: ", error);
      throw error;
    }
  }
}

export const repo= new SprintRepository()
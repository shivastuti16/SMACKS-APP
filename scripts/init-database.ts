import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./database.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS menu (
      id INTEGER PRIMARY KEY,
      name TEXT,
      price TEXT,
      description TEXT,
      allergyInfo TEXT,
      image TEXT
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS orders (
      id TEXT PRIMARY KEY,
      items TEXT,
      paymentMethod TEXT,
      status TEXT
    );
  `);

  console.log('Database initialized');
});

db.close();

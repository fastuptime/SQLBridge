# SQLBridge 💾

SQLBridge is a simple Node.js class for interacting with MySQL databases. This class can be used to perform typical SQL operations and also provides the flexibility to execute custom SQL queries.

## Installation ⚙️

You can add SQLBridge to your project using npm:

```bash
npm install sqlbridge
```

## Usage 🚀

```javascript
const SQLBridge = require('sqlbridge');

// Creating an instance of SQLBridge
const sqlBridge = new SQLBridge({
    host: 'localhost',
    port: '3306',
    user: 'username',
    password: 'password',
    database: 'my_database'
});

// Finding all data in a table
const allData = await sqlBridge.find('my_table', '1=1');

// Finding a specific data by ID
const specificData = await sqlBridge.findById('my_table', 1);

// Creating a new data entry
const newData = await sqlBridge.create('my_table', { name: 'John', age: 30 });

// Executing a custom SQL query
const customQuery = await sqlBridge.SQLQuery('SELECT * FROM my_table WHERE age > 25');

// Closing the connection
sqlBridge.close();
```

## Methods 🛠️

- `find(table, where)`: Finds data in the specified table. The `where` parameter should be provided as the SQL WHERE condition.
- `findOne(table, where)`: Finds a specific data in the specified table. The `where` parameter should be provided as the SQL WHERE condition.
- `findById(table, id)`: Finds the data with the given ID in the specified table.
- `findByIdAndDelete(table, id)`: Deletes the data with the given ID in the specified table.
- `findByIdAndUpdate(table, id, data)`: Updates the data with the given ID in the specified table.
- `findOneAndDelete(table, where)`: Deletes a specific data in the specified table. The `where` parameter should be provided as the SQL WHERE condition.
- `findOneAndReplace(table, where, data)`: Replaces a specific data in the specified table with the provided data. The `where` parameter should be provided as the SQL WHERE condition.
- `findOneAndUpdate(table, where, data)`: Updates a specific data in the specified table. The `where` parameter should be provided as the SQL WHERE condition.
- `create(table, data)`: Creates a new data entry in the specified table.
- `SQLQuery(query)`: Executes a custom SQL query.
- `close()`: Closes the connection.

## Caution 🚨

When using SQLBridge, SQL queries should not come directly from user input or user interaction. Always take security measures such as user input validation and prevention of SQL injection.
class SQLBridge {
    constructor(options) {
        this.options = options;
        if (!options.host || !options.port || !options.user || !options.database) {
            throw new Error('Invalid options provided, please provide host, port, user, password and database');
        }
        this.mysql = require('mysql2/promise');
       
        try {
            this.connection = this.mysql.createPool({
                host: options.host,
                port: options.port,
                user: options.user,
                password: options?.password || '',
                database: options.database
            });
            console.log('Connected to database');
        } catch (error) {
            new Error(`Error connecting to database: ${error}`);
        }
    }

    async find(table, where) {
        try {
            const [rows, fields] = await this.connection.execute(`SELECT * FROM ${table} WHERE ${where}`);
            return rows;
        } catch (error) {
            throw new Error(`Error fetching data: ${error}`);
        }
    }

    async findOne(table, where) {
        try {
            const [rows, fields] = await this.connection.execute(`SELECT * FROM ${table} WHERE ${where} LIMIT 1`);
            return rows[0];
        } catch (error) {
            throw new Error(`Error fetching data: ${error}`);
        }
    }

    async findById(table, id) {
        try {
            const [rows, fields] = await this.connection.execute(`SELECT * FROM ${table} WHERE id = ${id}`);
            return rows[0];
        } catch (error) {
            throw new Error(`Error fetching data: ${error}`);
        }
    }

    async findByIdAndDelete(table, id) {
        try {
            const [rows, fields] = await this.connection.execute(`DELETE FROM ${table} WHERE id = ${id}`);
            return rows[0];
        } catch (error) {
            throw new Error(`Error fetching data: ${error}`);
        }
    }

    async findByIdAndUpdate(table, id, data) {
        try {
            const [rows, fields] = await this.connection.execute(`UPDATE ${table} SET ? WHERE id = ${id}`, data);
            return rows[0];
        } catch (error) {
            throw new Error(`Error fetching data: ${error}`);
        }
    }

    async findOneAndDelete(table, where) {
        try {
            const [rows, fields] = await this.connection.execute(`DELETE FROM ${table} WHERE ${where} LIMIT 1`);
            return rows[0];
        } catch (error) {
            throw new Error(`Error fetching data: ${error}`);
        }
    }

    async findOneAndReplace(table, where, data) {
        try {
            const [rows, fields] = await this.connection.execute(`REPLACE INTO ${table} SET ? WHERE ${where}`, data);
            return rows[0];
        } catch (error) {
            throw new Error(`Error fetching data: ${error}`);
        }
    }

    async findOneAndUpdate(table, where, data) {
        try {
            const [rows, fields] = await this.connection.execute(`UPDATE ${table} SET ? WHERE ${where}`, data);
            return rows[0];
        } catch (error) {
            throw new Error(`Error fetching data: ${error}`);
        }
    }

    async create(table, data) {
        try {
            const [rows, fields] = await this.connection.execute(`INSERT INTO ${table} SET ?`, data);
            return rows;
        } catch (error) {
            throw new Error(`Error fetching data: ${error}`);
        }
    }

    async SQLQuery(query) {
        try {
            const [rows, fields] = await this.connection.execute(query);
            return rows;
        } catch (error) {
            throw new Error(`Error fetching data: ${error}`);
        }
    }

    close() {
        this.connection.end();
    }
}

module.exports = SQLBridge;

# SQLBridge 💾

SQLBridge, MySQL veritabanıyla etkileşimde bulunmayı sağlayan basit bir Node.js sınıfıdır. Bu sınıf, tipik SQL işlemlerini gerçekleştirmek için kullanılabilir ve aynı zamanda kullanıcıya özelleştirilebilir SQL sorguları yapma imkanı sunar.

## Kurulum ⚙️

Projenize SQLBridge'ı eklemek için npm kullanabilirsiniz:

```bash
npm install sqlbridge
```

## Kullanım 🚀

```javascript
const SQLBridge = require('sqlbridge');

// SQLBridge örneği oluşturma
const sqlBridge = new SQLBridge({
    host: 'localhost',
    port: '3306',
    user: 'username',
    password: 'password',
    database: 'my_database'
});

// Tablodaki tüm verileri bulma
const allData = await sqlBridge.find('my_table', '1=1');

// ID'ye göre belirli bir veriyi bulma
const specificData = await sqlBridge.findById('my_table', 1);

// Yeni bir veri oluşturma
const newData = await sqlBridge.create('my_table', { name: 'John', age: 30 });

// SQL sorgusu yapma
const customQuery = await sqlBridge.SQLQuery('SELECT * FROM my_table WHERE age > 25');

// Bağlantıyı kapatma
sqlBridge.close();
```

## Metodlar 🛠️

- `find(table, where)`: Belirtilen tablodaki verileri bulur. `where` parametresi, SQL WHERE koşulu olarak belirtilmelidir.
- `findOne(table, where)`: Belirtilen tablodaki belirli bir veriyi bulur. `where` parametresi, SQL WHERE koşulu olarak belirtilmelidir.
- `findById(table, id)`: Belirtilen tablodaki ID'si verilen veriyi bulur.
- `findByIdAndDelete(table, id)`: Belirtilen tablodaki ID'si verilen veriyi siler.
- `findByIdAndUpdate(table, id, data)`: Belirtilen tablodaki ID'si verilen veriyi günceller.
- `findOneAndDelete(table, where)`: Belirtilen tablodaki belirli bir veriyi siler. `where` parametresi, SQL WHERE koşulu olarak belirtilmelidir.
- `findOneAndReplace(table, where, data)`: Belirtilen tablodaki belirli bir veriyi verilen veriyle değiştirir. `where` parametresi, SQL WHERE koşulu olarak belirtilmelidir.
- `findOneAndUpdate(table, where, data)`: Belirtilen tablodaki belirli bir veriyi günceller. `where` parametresi, SQL WHERE koşulu olarak belirtilmelidir.
- `create(table, data)`: Belirtilen tabloya yeni veri ekler.
- `SQLQuery(query)`: Özel bir SQL sorgusu yapar.
- `close()`: Bağlantıyı kapatır.

## Dikkat 🚨

SQLBridge kullanırken, SQL sorguları doğrudan kullanıcı girişinden veya kullanıcı etkileşiminden gelmemelidir. Kullanıcı girişi doğrulama ve SQL enjeksiyonu gibi güvenlik önlemlerini daima almalısınız.
const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// 👉 Подключаем папку с изображениями
app.use('/products', express.static('public/products'));
app.use('/products2', express.static('public/products2')); // если используешь вторую папку

// 👉 Получение всех товаров
app.get("/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Ошибка сервера");
  }
});

// 👉 Получение одного товара по ID
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Товар не найден" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Ошибка при получении товара");
  }
});

// 👉 Запуск сервера
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`✅ Сервер запущен на http://localhost:${PORT}`);
});

const app = require("express")();

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Servidor rodando na porta " + PORT);
})
const appRouter = function (app) {
    app.get("/api", function (req, res) {
        res.status(200).send("verificacion de conexion");
    });

    app.get("/api/:text", function (req, res) {
        const text = req.params.texto;
        respondHandler(text, res)
    });

    app.post('/api', function (req, res) {
        const text = req.body.texto;
        respondHandler(text, res);
    });    
}

function respondHandler(text, res) {
    (text !== undefined) ? res.status(200).send(text) : res.status(400);
};

module.exports = appRouter;
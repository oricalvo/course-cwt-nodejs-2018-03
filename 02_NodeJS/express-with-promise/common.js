function promisifyExpressApi(func) {
    return async function(req, res) {
        try {
            const retVal = await func(req, res);
            res.json(retVal);
        }
        catch (err) {
            res.json({
                ok: false,
                error: err.message,
            });
        }
    }
}

exports.promisifyExpressApi = promisifyExpressApi;
export const auth = (req, res, next) => {
    const accessToken = req.headers.authorization
    console.log(accessToken)

    return response.json({teste: "ok"})
}
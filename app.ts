import express from 'express'
const app = express()
const port = 80

app.use(express.static("./static/"));
app.listen(port, () => console.log(`Web site listening on port ${port}!`))
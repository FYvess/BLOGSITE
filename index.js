import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = process.env.PORT || 3000
let userName = ""

app.set("views", path.join(__dirname, "views"))

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

// Routes
app.get("/", (req, res) => {
  res.render("index.ejs", { userName: userName })
})

app.get("/to-do", (req, res) => {
  res.render("to-do.ejs", { userName: userName })
})

app.post("/submit", (req, res) => {
  userName = req.body.userNameInput || "Guest"
  console.log(`User's name submitted: ${userName}`)
  res.redirect("/")
})

app.get("/bio", (req, res) => {
  res.send("Bio page - Coming soon")
})

app.get("/hobbies", (req, res) => {
  res.send("Hobbies page - Coming soon")
})

app.get("/pets", (req, res) => {
  res.send("Pets page - Coming soon")
})

app.get("/portfolio", (req, res) => {
  res.send("Portfolio page - Coming soon")
})

app.get("/merchandise", (req, res) => {
  res.send("Merchandise page - Coming soon")
})

app.get("/contact", (req, res) => {
  res.send("Contact page - Coming soon")
})

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

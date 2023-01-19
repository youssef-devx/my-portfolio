const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
require('dotenv').config()

const app = express()

app.get('/projects', (req, res) => {
  const projects = []

  res.status(200).json(projects)
})

app.post('/project', (req, res) => {
  const createdProject = {}

  res.status(200).json(createdProject)
})

app.update('/project', (req, res) => {
  const updatedProject = {}

  res.status(200).json(updatedProject)
})

app.delete('/project', (req, res) => {
  const deletedProjectId = ''

  req.status(200).json(deletedProjectId)
})

app.listen(PORT, (err) => console.log('Server started'))
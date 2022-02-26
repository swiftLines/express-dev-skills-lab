import * as skillDb from '../data/skill-db.js'


function index(req, res) {
  skillDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error,
      time: req.time
    })
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function show(req, res) {
  skillDb.findById(req.params.id, function(error, skill) {
    res.render('skills/show', {
      skill: skill,
      error: error
    })
  })
}


export {
  index,
  newSkill as new,
  show
}
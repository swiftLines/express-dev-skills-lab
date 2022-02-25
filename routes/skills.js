import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'
const router = Router()

/* GET skills listing. */
// router.get('/', function(req, res) {
//   res.send('respond with a resource')
// })

router.get('/', skillsCtrl.index)
router.get('/:id', todosCtrl.show)

export {
  router
}

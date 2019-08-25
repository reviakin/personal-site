import { Router } from 'express'

import { main, projects, contacts } from './site.controllers'

const router = Router()

router.get('/', main)
router.get('/projects', projects)
router.get('/contacts', contacts)

export default router

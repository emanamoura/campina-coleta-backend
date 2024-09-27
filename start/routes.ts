/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const CollectPointsController = () => import('#controllers/collect_points_controller')

router.get('collectPoints', [CollectPointsController, 'index'])
router.post('collectPoints', [CollectPointsController, 'store'])
router.get('collectPoints/:id', [CollectPointsController, 'show'])
router.delete('collectPoints/:id', [CollectPointsController, 'destroy'])



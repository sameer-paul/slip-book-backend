import { Router } from 'express'
import { homeRouteHandler } from '../controllers/homeroute.controller.js'

export const homeRoute = Router()

homeRoute.get('/', homeRouteHandler)

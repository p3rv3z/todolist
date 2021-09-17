import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

import Task from 'App/Models/Task'

export default class TasksController {
  public async index() {
    return Task.query().orderBy('id')
  }

  public async store({ request, response }: HttpContextContract) {
    const taskSchema = schema.create({
      title: schema.string({}, [rules.maxLength(250)]),
    })

    const payload = await request.validate({ schema: taskSchema })
    const task = await Task.create(payload)

    response.status(201)
    return task.refresh()
  }

  public async show({ params }: HttpContextContract) {
    return Task.findOrFail(params.id)
  }

  public async update({ params, request }: HttpContextContract) {
    const taskSchema = schema.create({
      title: schema.string({}, [rules.maxLength(100)]),
      is_completed: schema.boolean.optional()
    })

    const payload = await request.validate({ schema: taskSchema })

    return (await Task.findOrFail(params.id)).merge(payload).save()
  }

  public async destroy({ params }: HttpContextContract) {
    const task = await Task.findOrFail(params.id)
    await task.delete()
    return task
  }
}
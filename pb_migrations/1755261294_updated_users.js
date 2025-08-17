/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "select614373258",
    "maxSelect": 1,
    "name": "tier",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Free",
      "Plus",
      "Friends with benefits :))"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "select614373258",
    "maxSelect": 1,
    "name": "tier",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Free",
      "Plus",
      "Friends with benefits =))"
    ]
  }))

  return app.save(collection)
})

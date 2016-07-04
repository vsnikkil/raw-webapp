function MessageRouter () {}

var _subscribers = {}

MessageRouter.prototype = Object.assign({}, {
  subscribe (name, cb) {
    if (!_subscribers[name]) _subscribers[name] = []
    if (_subscribers[name].indexOf(cb) < 0) {
      _subscribers[name].push(cb)
    }
  },
  
  unsubscribe (name, cb) {
    if (_subscribers[name][indexOf(cb)]) {
      return delete _subscribers[name][indexOf(cb)]
    }
    return false
  },
  
  send (name, val) {
    try {
      for (let cb of _subscribers[name]) {
        cb(val)
      }
    }
    catch (error) {
      console.log(`Problems with signal ${name}`)
      throw error
    }
  }
})

var messageRouter = new MessageRouter()

export default messageRouter


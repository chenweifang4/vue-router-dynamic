import { delay } from '@/utils'
import HelloEntry from './components/HelloEntry'

export default {
  components: {
    HelloEntry
  },
  render () {
    return (
      <div>
        <hello-entry></hello-entry>
        <p>Hello Entry</p>
      </div>
    )
  },

  created () {
    delay()
      .then(() => {
        console.log('Yeah!!!!')
      })
  }
}

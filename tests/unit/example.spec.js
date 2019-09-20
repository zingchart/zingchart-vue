import { expect } from 'chai'
import { render } from '@vue/test-utils'
import ZingChart from '../../ZingChart.vue'
// Ref: https://vue-test-utils.vuejs.org/

describe('ZingChart.vue', () => {
  it('renders ', () => {
    const msg = 'new message'
    const wrapper = render(ZingChart, {
      propsData: { 
        config: {
          type: 'line',
          series: [{
            values: [5,3,2,3,5,3,3]
          }]
        }
      }
    })
    // expect(wrapper.text()).to.include(msg)
  })
})

/**
 * @class
 */
import MNAppHeaderViewTpl from './MNAppHeaderViewTpl.html';

export default class MNAppHeaderView extends Backbone.View {

  el() {
    return '<div class="app-header"></div>'
  }

  initialize(props) {
    super.initialize(props);
    let data = {
      title: 'Backbone - Application'
    }
    this.render(data);
  }

  render(data) {
    let html = _.template(MNAppHeaderViewTpl)(data);
    this.$el.append(html)
  }
}

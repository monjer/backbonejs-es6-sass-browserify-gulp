/**
 * @class
 */
import MNAppLeftNavPanelViewTpl from './MNAppLeftNavPanelViewTpl.html';

export default class MNAppLeftNavPanelView extends Backbone.View {

  el() {
    return '<div class="app-left-nav"></div>'
  }
  initialize(props) {
    super.initialize(props);
    this.render();
  }

  render() {
    this.$el.append(MNAppLeftNavPanelViewTpl);
  }
}

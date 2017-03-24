/**
 * @class 
 */
import MNAppMainViewTpl from './MNAppMainViewTpl.html'
import MNAppLeftNavPanelView from './MNAppLeftNavPanelView.js'


export default class MNAppMainView extends Backbone.View {

  el() {
    return '<div class="app-main"></div>';
  }

  initialize(props) {
    super.initialize(props);
    this.render();
  }

  render() {
    this.$el.append(MNAppMainViewTpl);
    this.navView = new MNAppLeftNavPanelView();
    this.$('.app-left-nav-wrap').append(this.navView.el);
  }
}

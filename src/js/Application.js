/**
 * 
 */
import ApplicationTpl from './ApplicationTpl.html'
import MNAppHeaderView from './view/layout/MNAppHeaderView.js'
import MNAppMainView from './view/layout/MNAppMainView.js'

export default class Application extends Backbone.View {
  initialize(props) {
    super.initialize(props);
    this.render();
  }
  render() {
    this.$el.append(ApplicationTpl);
    this.headerView = new MNAppHeaderView();
    this.$('.app-inner').append(this.headerView.el);
    this.mainView = new MNAppMainView();
    this.$('.app-inner').append(this.mainView.el);
    return this;
  }
  static boot() {
    var application = new Application();
    $('body').append(application.el);
  }
}

Application.boot();

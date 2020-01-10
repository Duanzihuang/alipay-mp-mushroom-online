// components/search-bar/search-bar.js
Component({
  /**
   * 组件的属性列表
   */
  props: {
    placeholder: String
  },

  methods: {
    goToSearchPage() {
      this.props.onSearchBarTap()
    }
  }
})

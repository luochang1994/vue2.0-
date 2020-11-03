// import {
//   defaults,
//   isString,
//   pickBy,
//   pull,
// } from 'lodash'

import _ from 'lodash'

const ifNull = (val) => {
  if (_.isString(val)) {
    return val === ''
  }
  return false
}

const DEFAULT_PAGES = {
  page: 1,
  pageSize: 20,
}

export default {
  data () {
    return {
      page: DEFAULT_PAGES.page,
      pageSize: DEFAULT_PAGES.pageSize,
      total: 0,
    }
  },

  methods: {
    $_page_pageChange (page) {
      // console.log(page)
      this.$_page_update({
        page,
        pageSize: this.pageSize,
      })
    },
    $_page_pageSizeChange (pageSize) {
      // console.log(pageSize)
      this.pageSize = pageSize
      if (this.page ==1) {
        this.$_page_update({
          pageSize,
         })
      }
      // this.$_page_update({
      //    pageSize,
      //   })
    },
    $_index_method (row) {
      // console.log('row====',row)
      const { _index } = row
      return (this.page - 1) * this.pageSize + _index + 1
    },
    $_index_methodErr (row) {
      const { _index } = row
      return (this.pageError - 1) * this.pageSizeError + _index + 1
    },

    $_page_update (query) {

      console.log(_.isEmpty([1, 2, 3]))


      const newQuery = {}
      // console.log(query)

      // console.log(this.DEFAULT_QUERY)
      // console.log(DEFAULT_PAGES)
      _.defaults(newQuery, query, this.DEFAULT_QUERY, DEFAULT_PAGES)
      // console.log(newQuery)

      // console.log(_.defaults(newQuery, query, this.DEFAULT_QUERY, DEFAULT_PAGES))

      const realQuery = _.pickBy(newQuery, (val) => !ifNull(val))

      // console.log(realQuery)

      // var array = [1, 2, 3, 1, 2, 3]
      // _.pull(array, 5, 4)
      // console.log(array)

      this.getData(realQuery)
    },
  },
}

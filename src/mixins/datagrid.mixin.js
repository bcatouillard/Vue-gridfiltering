const DataGridMixin = {
  data() {
    return {
      filters: null,
    };
  },
  methods: {
    persistFilters(filters) {
      this.filters = filters;
    },

    getFiltersFromQueryParams(params) {
      if (!params || !Object.keys(params).length) {
        return null;
      }

      return {
        make: JSON.parse(decodeURIComponent(params.make ?? '')),
        model: JSON.parse(decodeURIComponent(params.model ?? '')),
        price: JSON.parse(decodeURIComponent(params.price ?? '')),
      };
    },

    getQueryParamsFromFilter() {
      if (!this.filters || !Object.keys(this.filters).length) {
        return {
          make: null,
          model: null,
          price: null,
        };
      }
      return {
        make: encodeURIComponent(JSON.stringify(this.filters.make || null)),
        model: encodeURIComponent(JSON.stringify(this.filters.model || null)),
        price: encodeURIComponent(JSON.stringify(this.filters.price || null)),
      };
    },
  },
};

export default DataGridMixin;

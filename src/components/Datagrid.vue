<template>
  <ag-grid-vue
    class="ag-theme-alpine grid"
    @filter-changed="onSortChanged"
    @grid-ready="onGridReady"
    :columnDefs="columnDefs"
    :rowData="rowData"
  />
</template>

<script>
import { AgGridVue } from 'ag-grid-vue';
import DataGridMixin from '@/mixins/datagrid.mixin';

export default {
  name: 'DataGrid',
  components: {
    AgGridVue,
  },
  mixins: [DataGridMixin],
  data() {
    return {
      columnDefs: null,
      rowData: null,
    };
  },
  beforeMount() {
    this.columnDefs = [
      {
        field: 'make',
        sortable: true,
        filter: true,
        filterParams: {
          newRowsAction: 'keep',
        },
      },
      {
        field: 'model',
        sortable: true,
        filter: true,
        filterParams: {
          newRowsAction: 'keep',
        },
      },
      {
        field: 'price',
        sortable: true,
        filter: true,
        filterParams: {
          newRowsAction: 'keep',
        },
      },
    ];

    fetch('https://www.ag-grid.com/example-assets/small-row-data.json')
      .then((result) => result.json())
      // eslint-disable-next-line
      .then((rowData) => this.rowData = rowData);
  },
  methods: {
    onGridReady(params) {
      const gridApi = params.api;
      const filters = this.getFiltersFromQueryParams(this.$route.query);
      gridApi.setFilterModel(filters);
    },
    onSortChanged(event) {
      const filters = event.api.getFilterModel();
      this.persistFilters(filters);
      const params = this.getQueryParamsFromFilter();
      this.$router.push({
        name: 'home',
        query: params,
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "~ag-grid-community/dist/styles/ag-grid.css";
@import "~ag-grid-community/dist/styles/ag-theme-alpine.css";

.grid {
  width: 100%;
  height: 100%;
}

</style>
